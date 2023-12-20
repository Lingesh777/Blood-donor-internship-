package com.lingesh.blood.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingesh.blood.Model.BloodModel;
import com.lingesh.blood.Repository.BloodRepo;

@Service
public class BloodService {
    @Autowired
    public BloodRepo br;

    public List<BloodModel> getuser(){
        return br.findAll();
    }

    public Optional<BloodModel> getbyid(int uid){
        return br.findById(uid);
    }

    public String postuser(BloodModel bm){
        br.save(bm);
        return "added";
    }
    
    public String edituser(BloodModel bm){
        br.save(bm);
        return "updated";
    }

    public String deleteuser(int uid){
        br.deleteById(uid);
        return "deleted";
    }
}
