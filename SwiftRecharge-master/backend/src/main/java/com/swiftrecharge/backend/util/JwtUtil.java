package com.swiftrecharge.backend.util;

import java.util.Date;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {

	private static final String SECRET_KEY = "SRINI";
	
	private static final int TOKEN_VALIDITY = 3600 * 5;

	public String getUserNameFromToken(String token) {
		return getClaimsFromToken(token, Claims::getSubject);
	}

	private <T> T getClaimsFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}

	private Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
	}

	public boolean validatetoken(String token, UserDetails userDetails) {
		String userName = getUserNameFromToken(token);
		return (userName.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}

	private boolean isTokenExpired(String token) {
		final Date expirationDate = getExpirationDateFromToken(token);
		return expirationDate.before(new Date());
	}

	private Date getExpirationDateFromToken(String token) {
		return getClaimsFromToken(token, Claims::getExpiration);
	}
	
	public String generateToken(UserDetails userDetails){
		
		JwtBuilder builder = Jwts.builder();

		builder.setSubject(userDetails.getUsername())
		.setIssuedAt(new Date())
		.setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000))
		.signWith(SignatureAlgorithm.HS512, SECRET_KEY);

		return builder.compact();
	}
}
