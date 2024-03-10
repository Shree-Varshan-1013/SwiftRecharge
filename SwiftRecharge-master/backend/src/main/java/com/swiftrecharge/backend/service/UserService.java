package com.swiftrecharge.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.entity.Payment;
import com.swiftrecharge.backend.entity.Plan;

public interface UserService {
	
	ResponseEntity<?> registerNewUser(AppUser user);

	AppUser findUserNameByEmail(String email);

	List<Plan> findPlansByOperator(String operatorName);

}
