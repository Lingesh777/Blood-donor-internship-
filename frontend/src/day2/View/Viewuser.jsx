import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { delsign, viewsign, viewsignbyid } from '../Service/api';
import { Topbar } from '../Topbar/Topbar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Viewuser = () => {
    const navigate=useNavigate();
    const{id}=useParams();

    const[user,setUser]=useState([]);
    const fetchuser=async()=>{
      try{
          const res=await viewsignbyid(id);
          console.log(res.data)
          setUser(res.data)
      }
      catch(error){
        console.log("error")
      }
    }
    useEffect(()=>{
      fetchuser();
    },[])

    const deleuser=async(u)=>{
       const res=await delsign(u.uid)
       console.log(res.data)
       if(res.data==='deleted'){
        navigate('/signup')
       }
    }
    const edituser=(u)=>{
        navigate(`/edituser/${u.uid}`)
    }
  return (
    <>
    <Topbar/>
        <h2>My Details</h2>
            <div className='viewbody'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>District</th>
                    <th>Bloodgroup</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                     <tr>
                        <td>{user.uid}</td>
                        <td>{user.name}</td>
                        <td>{user.mobile}</td>
                        <td>{user.email}</td>
                        <td>{user.district}</td>
                        <td>{user.bloodgroup}</td>
                        <td>{user.gender}</td>
                        <td>{user.role}</td>
                        <td onClick={()=>{edituser(user)}} style={{cursor:'pointer'}} ><EditIcon/></td>
                        <td onClick={()=>{deleuser(user)}} style={{cursor:'pointer'}}><DeleteIcon/></td>

                     </tr>
            </div>
    </>
  )
}
