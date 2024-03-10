package com.swiftrecharge.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swiftrecharge.backend.entity.Addon;
import com.swiftrecharge.backend.service.AddonServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.util.List;

@RestController
@RequestMapping("/api/v1/addons")
public class AddonController {

    @Autowired
    private AddonServiceImpl addonService;

    @Operation(summary = "Get all addons", description = "Retrieve a list of all addons.")
    @GetMapping("/")
    public List<Addon> getAllAddons() {
        return addonService.getAllAddons();
    }

    @Operation(summary = "Get addon by ID", description = "Retrieve an addon by its ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Addon found"),
            @ApiResponse(responseCode = "404", description = "Addon not found")
    })
    @GetMapping("/{id}")
    public Addon getAddonById(@Parameter(description = "Addon ID") @PathVariable Long id) {
        return addonService.getAddonById(id);
    }

    @Operation(summary = "Get addons by operator", description = "Retrieve addons by operator name.")
    @GetMapping("/getAddOns/{operatorName}")
    public List<Addon> getAddonByOperator(@Parameter(description = "Operator Name") @PathVariable String operatorName) {
        return addonService.getAddOnByOperatorName(operatorName);
    }

    @Operation(summary = "Create a new addon", description = "Create a new addon.")
    @PostMapping("/")
    public Addon createAddon(@RequestBody Addon addon) {
        return addonService.createAddon(addon);
    }

    @Operation(summary = "Partial Update an addon", description = "Partially Update an existing addon by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Addon Partially updated"),
            @ApiResponse(responseCode = "404", description = "Addon not found")
    })
    @PatchMapping("/{id}")
    public Addon updateAddon(@Parameter(description = "Addon ID") @PathVariable Long id, @RequestBody Addon addon) {
        return addonService.patchUpdateAddon(id, addon);
    }

    @Operation(summary = "Delete an addon", description = "Delete an addon by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Addon deleted"),
            @ApiResponse(responseCode = "404", description = "Addon not found")
    })
    @DeleteMapping("/{id}")
    public void deleteAddon(@Parameter(description = "Addon ID") @PathVariable Long id) {
        addonService.deleteAddon(id);
    }
    
}
