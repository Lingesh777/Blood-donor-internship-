package com.lingesh.blood.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lingesh.blood.Model.BloodModel;
import com.lingesh.blood.Service.BloodService;

@CrossOrigin("*")
@RestController
public class BloodController {
     @Autowired
    public BloodService bs;

    @GetMapping("/viewuser")
    public List<BloodModel> get(){
        return bs.getuser();
    }
    @GetMapping("/viewbyid/{uid}")
    public Optional<BloodModel> getbyid(@PathVariable int uid){
        return bs.getbyid(uid);
    }

    @PostMapping("/adduser")
    public String add(@RequestBody BloodModel bm){
        return bs.postuser(bm);
    }

    @PutMapping("/updateuser/{uid}")
    public String update(@RequestBody BloodModel bm,@PathVariable int uid){
        bm.setUid(uid);
        return bs.edituser(bm);
    }

    @DeleteMapping("/deleteuser/{uid}")
    public String delete(@PathVariable int uid){
        return bs.deleteuser(uid);
    }
}
