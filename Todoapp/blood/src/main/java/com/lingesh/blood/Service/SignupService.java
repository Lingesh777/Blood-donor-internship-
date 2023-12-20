package com.lingesh.blood.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingesh.blood.Model.SignupModel;
import com.lingesh.blood.Repository.SignupRepo;

@Service
public class SignupService {
     @Autowired
    public SignupRepo sr;

    public List<SignupModel> getuser(){
        return sr.findAll();
    }

    public List<SignupModel> getemailandpass(String email,String password){
        return sr.findByEmailAndPassword(email,password);
    }

    public Optional<SignupModel> getbyid(int uid){
        return sr.findById(uid);
    }

    public String postuser(SignupModel bm){
        sr.save(bm);
        return "added";
    }
    
    public String edituser(SignupModel bm){
        sr.save(bm);
        return "updated";
    }

    public String deleteuser(int uid){
        sr.deleteById(uid);
        return "deleted";
    }
}
