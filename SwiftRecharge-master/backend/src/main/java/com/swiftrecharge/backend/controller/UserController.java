package com.swiftrecharge.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.swiftrecharge.backend.entity.Addon;
import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.entity.Payment;
import com.swiftrecharge.backend.entity.Plan;
import com.swiftrecharge.backend.entity.Recharge;
import com.swiftrecharge.backend.service.AddonServiceImpl;
import com.swiftrecharge.backend.service.RechargeServiceImpl;
import com.swiftrecharge.backend.service.UserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/customer")
@RequiredArgsConstructor
public class UserController {

	private final UserServiceImpl userService;
	private final AddonServiceImpl addonService;
	private final RechargeServiceImpl rechargeService;
	// @PostConstruct
	// public void initRolesAndUSer() {
	// userService.initRolesAndUser();
	// }

	@Operation(summary = "Admin route", description = "Accessible only by admin roles.")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	@GetMapping("/forAdmin")
	public String adminRoute() {
		return "Admin Routes";
	}

	@Operation(summary = "View plans by operator name", description = "View plans by operator name.")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/plan/{operatorName}")
	public List<Plan> viewPlan(@Parameter(description = "Operator name") @PathVariable String operatorName) {
		return userService.findPlansByOperator(operatorName);
	}

	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/{username}")
	public AppUser viewCustomerDetails(@Parameter(description = "Username") @PathVariable String username) {
		return userService.finduserByUsername(username);
	}

	@Operation(summary = "Get addons by operator name", description = "Get addons by operator name.")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/getAddons/{operatorName}")
	public List<Addon> getAddons(@Parameter(description = "Operator name") @PathVariable String operatorName) {
		return addonService.getAddOnByOperatorName(operatorName);
	}

	@Operation(summary = "Make recharge", description = "Make recharge for Customers")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@PostMapping("/make-recharge/{username}")
	public ResponseEntity<String> makeRecharge(@Parameter(description = "username") @PathVariable String username,
			@RequestBody Recharge recharge) {
		return rechargeService.createRecharge(username, recharge);
	}

	@Operation(summary = "View Payments", description = "View all payment records")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/get-payments/{username}")
	public List<Payment> getAllPaymentByUsername(@Parameter(description = "username") @PathVariable String username) {
		return userService.getAllPaymentByUsername(username);
	}

	@Operation(summary = "Get latest payment", description = "View latest payment of the particular user")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/get-latest-plan/{username}")
	public Plan getLatest(@Parameter(description = "username") @PathVariable String username) {
		return userService.getLatestReord(username);
	}
}
