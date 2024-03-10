package com.swiftrecharge.backend.service;

import java.util.List;

import com.swiftrecharge.backend.entity.Addon;
import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.entity.Plan;

public interface AdminService {

    List<AppUser> getAllUsers();

    AppUser registerNewAdmin(AppUser user);

    List<AppUser> searchUsers(String searchTerm);

    List<Plan> findPlans();

    List<Addon> getAddOn();

    boolean addPlan(Plan plan);

    boolean addAddon(Addon addon);

}
