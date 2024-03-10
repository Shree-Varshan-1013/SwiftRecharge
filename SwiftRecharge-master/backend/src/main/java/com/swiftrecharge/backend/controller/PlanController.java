package com.swiftrecharge.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.swiftrecharge.backend.entity.Plan;
import com.swiftrecharge.backend.service.PlanServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.util.List;

@RestController
@RequestMapping("/api/v1/plans")
public class PlanController {

    @Autowired
    private PlanServiceImpl planService;

    @Operation(summary = "Get all plans", description = "Retrieve a list of all plans.")
    @GetMapping("/")
    public List<Plan> getAllPlans() {
        return planService.getAllPlans();
    }

    @Operation(summary = "Get plan by ID", description = "Retrieve a plan by its ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Plan found"),
            @ApiResponse(responseCode = "404", description = "Plan not found")
    })
    @GetMapping("/{id}")
    public Plan getPlanById(@Parameter(description = "Plan ID") @PathVariable Long id) {
        return planService.getPlanById(id);
    }

    @Operation(summary = "Create a new plan", description = "Create a new plan.")
    @PostMapping("/")
    public Plan createPlan(@RequestBody Plan plan) {
        return planService.createPlan(plan);
    }

    @Operation(summary = "Update a plan", description = "Update an existing plan by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Plan updated"),
            @ApiResponse(responseCode = "404", description = "Plan not found")
    })
    @PutMapping("/{id}")
    public Plan updatePlan(@Parameter(description = "Plan ID") @PathVariable Long id, @RequestBody Plan plan) {
        return planService.updatePlan(id, plan);
    }

    @Operation(summary = "Delete a plan", description = "Delete a plan by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Plan deleted"),
            @ApiResponse(responseCode = "404", description = "Plan not found")
    })
    @DeleteMapping("/{id}")
    public void deletePlan(@Parameter(description = "Plan ID") @PathVariable Long id) {
        planService.deletePlan(id);
    }
}
