package com.lingesh.blood.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lingesh.blood.Model.BloodModel;

@Repository
public interface BloodRepo extends JpaRepository<BloodModel,Integer> {
    
}
