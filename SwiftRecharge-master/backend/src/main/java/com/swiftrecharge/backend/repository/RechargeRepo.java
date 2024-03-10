package com.swiftrecharge.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.entity.Recharge;
import java.util.List;


public interface RechargeRepo extends JpaRepository<Recharge, Long> {

    @Query(value = "SELECT u FROM Recharge u WHERE u.app_user.userName = ?1")
    List<Recharge> findByApp_user(String username);

}
