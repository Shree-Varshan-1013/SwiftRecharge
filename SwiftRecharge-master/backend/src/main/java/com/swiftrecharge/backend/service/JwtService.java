package com.swiftrecharge.backend.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.swiftrecharge.backend.repository.AppUserRepo;
import com.swiftrecharge.backend.dto.JwtRequest;
import com.swiftrecharge.backend.dto.JwtResponse;
import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.util.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JwtService implements UserDetailsService {

	private final AppUserRepo userRepo;

	private final JwtUtil jwtUtil;

	public static AuthenticationManager authenticationManager = null;

	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
		final List<GlobalAuthenticationConfigurerAdapter> configurers = new ArrayList<>();
		configurers.add(new GlobalAuthenticationConfigurerAdapter() {
			@Override
			public void configure(AuthenticationManagerBuilder auth) throws Exception {
				// auth.doSomething()
			}
		});
		authenticationManager = authConfig.getAuthenticationManager();
		return authConfig.getAuthenticationManager();
	}

	public JwtResponse createJwtToken(JwtRequest jwtRequest) throws Exception {
		String userName = jwtRequest.getUserName();
		String userPassword = jwtRequest.getUserPassword();

		boolean isEmail = userName.contains("@");
		String newUserName = isEmail ? userRepo.findByEmail(userName).getUserName() : userName;

		try {
			authenticate(newUserName, userPassword);
			final UserDetails userDetails = loadUserByUsername(newUserName);

			System.out.println("User Details: " + userDetails);

			if (userDetails != null && passwordEncoder().matches(userPassword, userDetails.getPassword())) {
				String newGeneratedToken = jwtUtil.generateToken(userDetails);
				AppUser user = userRepo.findById(newUserName).get();
				return new JwtResponse(user, newGeneratedToken);
			}
		} catch (Exception ex) {
			return new JwtResponse("Invalid Credentials !");
		}

		return new JwtResponse("Invalid Credentials !");
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		AppUser user = userRepo.findById(username).get();

		if (user != null) {
			return new User(user.getUserName(), user.getUserPassword(), getAuthorities(user));
		} else {
			throw new UsernameNotFoundException("Username is not valid");
		}
	}

	private Set getAuthorities(AppUser user) {
		Set authorities = new HashSet();

		user.getRole().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRoleName()));
		});

		return authorities;
	}

	private ResponseEntity<?> authenticate(String userName, String userPassword) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, userPassword));
			return ResponseEntity.ok("Authentication successful");
		} catch (BadCredentialsException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("BAD CREDENTIALS");
		}
	}

}
