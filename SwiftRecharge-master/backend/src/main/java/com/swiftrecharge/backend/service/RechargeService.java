package com.swiftrecharge.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.swiftrecharge.backend.entity.Recharge;

public interface RechargeService {

    List<Recharge> getAllRecharges();

    Recharge getRechargeById(Long id);

    ResponseEntity<String> createRecharge(String userName, Recharge recharge);

    Recharge updateRecharge(Long id, Recharge recharge);

    void deleteRecharge(Long id);
    
}
