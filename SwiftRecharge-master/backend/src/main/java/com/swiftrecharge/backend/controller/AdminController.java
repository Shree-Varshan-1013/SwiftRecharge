package com.swiftrecharge.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.swiftrecharge.backend.entity.Addon;
import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.entity.Plan;
import com.swiftrecharge.backend.entity.Recharge;
import com.swiftrecharge.backend.service.AdminServiceImpl;
import com.swiftrecharge.backend.service.PlanServiceImpl;
import com.swiftrecharge.backend.service.RechargeServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
@RequestMapping("api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {

    private final AdminServiceImpl adminService;

    private final PlanServiceImpl planService;
    
    private final RechargeServiceImpl rechargeService;

    @Operation(summary = "Get all users", description = "Retrieve a list of all users.")
    @GetMapping("/get-all-users")
    public List<AppUser> getAllUsers() {
        return adminService.getAllUsers();
    }

    @Operation(summary = "Register a new admin", description = "Register a new admin user.")
    @PostMapping("/register-new-admin")
    public AppUser registerNewUser(@RequestBody AppUser user) {
        return adminService.registerNewAdmin(user);
    }

    @Operation(summary = "Search users", description = "Search users by a search term.")
    @GetMapping("/search/{searchTerm}")
    public List<AppUser> searchUsers(@Parameter(description = "Search term") @PathVariable String searchTerm) {
        return adminService.searchUsers(searchTerm);
    }

    @Operation(summary = "View plans", description = "View all available plans.")
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/plan")
    public List<Plan> viewPlan() {
        return adminService.findPlans();
    }

    @Operation(summary = "Get all addons", description = "Retrieve a list of all addons.")
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/getAddons")
    public List<Addon> getAddons() {
        return adminService.getAddOn();
    }

    @Operation(summary = "Get plan by ID", description = "Retrieve a plan by its ID.")
    @GetMapping("/plan/{id}")
    public Plan getPlanById(@Parameter(description = "Plan ID") @PathVariable Long id) {
        return adminService.getPlanById(id);
    }

    @Operation(summary = "Add plan", description = "Add a plan.")
    @PostMapping("/plan")
    public boolean addPlan(@RequestBody Plan plan) {
        return adminService.addPlan(plan);
    }

    @Operation(summary = "Delete plan by ID", description = "Delete a plan by its ID.")
    @DeleteMapping("/plan/{id}")
    public boolean deletePlanById(@Parameter(description = "Plan ID") @PathVariable Long id) {
        return adminService.deletePlanById(id);
    }

    @Operation(summary = "Update a plan", description = "Update an existing plan by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Plan updated"),
            @ApiResponse(responseCode = "404", description = "Plan not found")
    })
    @PutMapping("/plan/{id}")
    public Plan updatePlan(@Parameter(description = "Plan ID") @PathVariable Long id, @RequestBody Plan plan) {
        return planService.updatePlan(id, plan);
    }

    @Operation(summary = "Get addon by ID", description = "Retrieve an addon by its ID.")
    @GetMapping("/addon/{id}")
    public Addon getAddonById(@Parameter(description = "Addon ID") @PathVariable Long id) {
        return adminService.getAddonById(id);
    }

    @Operation(summary = "Get recharges by username", description = "Retrieve recharges by its username.")
    @GetMapping("/get-recharges/{username}")
    public List<Recharge> getRechargesByUserName(@Parameter(description = "User Name") @PathVariable String username) {
        return rechargeService.getRechargesByUserName(username);
    }

    @Operation(summary = "Get all customer recharges", description = "Retrieve all recharges")
    @GetMapping("/get-recharges")
    public List<Recharge> getAllRechargesByUserName() {
        return rechargeService.getAllRecharges();
    }
}
