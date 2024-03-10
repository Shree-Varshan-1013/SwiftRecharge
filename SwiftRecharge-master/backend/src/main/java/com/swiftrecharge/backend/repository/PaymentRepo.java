package com.swiftrecharge.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.swiftrecharge.backend.entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

    @Query(value = "SELECT u FROM Payment u WHERE u.user.userName = ?1")
    public List<Payment> getPaymentByUserName(String username);

    @Query("SELECT p FROM Payment p WHERE p.user.userName = ?1")
    List<Payment> findLatestRecordByUsername(String username);
    
}
