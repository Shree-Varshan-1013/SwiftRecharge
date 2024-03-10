package com.swiftrecharge.backend.configuration;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.swiftrecharge.backend.service.JwtService;
import com.swiftrecharge.backend.util.JwtUtil;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter{
	
	private final JwtUtil jwtUtil;
	
	private final JwtService jwtService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		final String header = request.getHeader("Authorization");
		
		String jwtToken = null;
		String userName = null;
		
		if(header != null && header.startsWith("Bearer ")) {
			jwtToken = header.substring(7);
			
			try {
				userName = jwtUtil.getUserNameFromToken(jwtToken);
			}catch(IllegalArgumentException e) {
				System.out.println("Unable to get JWT Token !");
			}catch(ExpiredJwtException e) {
				System.out.println("JWT is Expired !");
			}
		}
		else {
			System.out.println("The token doesn't starts with Bearer");
		}
		
		if(userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = jwtService.loadUserByUsername(userName);
			
			if(jwtUtil.validatetoken(jwtToken, userDetails)) {
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
		}
		
		filterChain.doFilter(request, response);
		
	}
	
}
