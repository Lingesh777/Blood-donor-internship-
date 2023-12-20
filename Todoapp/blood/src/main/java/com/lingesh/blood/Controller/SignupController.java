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

import com.lingesh.blood.Model.SignupModel;
import com.lingesh.blood.Service.SignupService;

@CrossOrigin("*")
@RestController
public class SignupController {
     @Autowired
    public SignupService ss;

    @GetMapping("/viewsignup")
    public List<SignupModel> get(){
        return ss.getuser();
    }
    @GetMapping("/viewbyemailandpass/{email}/{password}")
    public List<SignupModel> getbyeandp(@PathVariable String email,@PathVariable String password){
        return ss.getemailandpass(email, password);
    }

    @GetMapping("/viewsignupid/{uid}")
    public Optional<SignupModel> getbyid(@PathVariable int uid){
        return ss.getbyid(uid);
    }

    @PostMapping("/addsignup")
    public String add(@RequestBody SignupModel bm){
        return ss.postuser(bm);
    }

    @PutMapping("/updatesignup/{uid}")
    public String update(@RequestBody SignupModel bm,@PathVariable int uid){
        bm.setUid(uid);
        return ss.edituser(bm);
    }

    @DeleteMapping("/deletesignup/{uid}")
    public String delete(@PathVariable int uid){
        return ss.deleteuser(uid);
    }
}
