package com.swiftrecharge.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swiftrecharge.backend.dto.JwtRequest;
import com.swiftrecharge.backend.dto.JwtResponse;
import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.service.JwtService;
import com.swiftrecharge.backend.service.UserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

	private final JwtService jwtService;
	
	private final UserServiceImpl userService;

	@Operation(summary = "Authenticate user", description = "This API creates a JWT token for user authentication.")
	@PostMapping("/login")
	public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		return jwtService.createJwtToken(jwtRequest);
	}

	@Operation(summary = "Register new user", description = "This API registers a new user.")
	@PostMapping("/register")
	public ResponseEntity<?> registerNewUser(@RequestBody AppUser user) {
		return userService.registerNewUser(user);
	}

	@Operation(summary = "Sample Test API ADMIN", description = "This is a sample API for ADMIN.")
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/test1")
	public String forAdmin() {
		return "This route is for only admin";
	}
	
	@Operation(summary = "Sample Test API CUSTOMER", description = "This is a sample API for CUSTOMER.")
	@PreAuthorize("hasRole('CUSTOMER')")
	@GetMapping("/test2")
	public String forUser() {
		return "This route is for only customer";
	}
}