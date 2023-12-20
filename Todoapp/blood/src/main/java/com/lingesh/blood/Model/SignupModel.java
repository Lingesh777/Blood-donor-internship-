package com.lingesh.blood.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="signupdata")
public class SignupModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int uid;
    private String name;
    private String email;
    public String password;
    private String mobile;
    private String district;
    private String bloodgroup;
    private String gender;
    private String role;
}
