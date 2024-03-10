package com.swiftrecharge.backend.dto;

import com.swiftrecharge.backend.entity.AppUser;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtResponse {

	public JwtResponse() {
	}

	public JwtResponse(AppUser user, String jwtToken) {
		super();
		this.user = user;
		this.jwtToken = jwtToken;
	}

	public JwtResponse(String string) {
		this.jwtToken = "Error: " + string;
	}

	private AppUser user;
	private String jwtToken;

	public AppUser getUser() {
		return user;
	}

	public void setUser(AppUser user) {
		this.user = user;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

}
