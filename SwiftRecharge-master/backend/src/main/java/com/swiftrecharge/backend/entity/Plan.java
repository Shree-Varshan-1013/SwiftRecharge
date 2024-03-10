package com.swiftrecharge.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

@Data
@Entity
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planId;

    private String planType;
    private String planName;
    private String planValidity;
    private String planData;
    private String planDetails;
    private double planPrice;
    private String OperatorName;

}
