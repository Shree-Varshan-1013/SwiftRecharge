package com.swiftrecharge.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Addon {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addonId;

    private String addonName;
	private String data;
    private double addonPrice;
    private String addonDetails;
    private String addonValidity;
	private String OperatorName;

}
