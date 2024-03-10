package com.swiftrecharge.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

@Data
@Entity
public class Role {

	@Id
	private String roleName;
	
	private String roleDescription;

}
