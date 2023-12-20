package com.lingesh.blood.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.lingesh.blood.Model.SignupModel;

@Repository
public interface SignupRepo extends JpaRepository<SignupModel,Integer> {
    public List<SignupModel> findByEmailAndPassword(String email,String password);
}
