package com.swiftrecharge.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.swiftrecharge.backend.entity.AppUser;

public interface AppUserRepo extends JpaRepository<AppUser, String> {
    public AppUser findByEmail(String email);

    // public List<AppUser> findByEmail(String email);

    public AppUser findByUserName(String userName);

    @Query(value = "SELECT u FROM app_user u JOIN u.app_user_role r ON r.role_id = ?1", nativeQuery = true)
    public List<AppUser> findByRole(String roleId);

}
