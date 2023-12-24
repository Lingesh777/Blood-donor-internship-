import React, { useEffect, useState } from 'react'
import { Topbar } from '../Topbar/Topbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteblooduser, getBlooduser } from '../../Redux/Redux'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './View.css'
import { useNavigate } from 'react-router-dom';
import { viewuser,deluser, viewsign, delsign } from '../Service/api';

export const View = () => {
    const navigate=useNavigate();
    const users=useSelector(getBlooduser);
    const dispatch=useDispatch();

    const[user,setUser]=useState([]);
    const fetchuser=async()=>{
      try{
          const res=await viewsign();
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
        fetchuser();
       }
    }
    const edituser=(u)=>{
        navigate(`/edit/${u.uid}`)
    }

  return (
    <>
    <Topbar/>
        <h2 style={{marginTop:'50px'}}>Donors , Friends To Support</h2>
            <div className='viewbody'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>District</th>
                    <th>Bloodgroup</th>
                    <th>Gender</th>
                    {/* <th>Role</th> */}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                  {user.map((u)=>(
                     <tr>
                        <td>{u.uid}</td>
                        <td>{u.name}</td>
                        <td>{u.mobile}</td>
                        <td>{u.email}</td>
                        <td>{u.district}</td>
                        <td>{u.bloodgroup}</td>
                        <td>{u.gender}</td>
                        {/* <td>{u.role}</td> */}
                        <td onClick={()=>{edituser(u)}} style={{cursor:'pointer'}} ><EditIcon/></td>
                        <td onClick={()=>{deleuser(u)}} style={{cursor:'pointer'}}><DeleteIcon/></td>

                     </tr>
                    ))}
            </div>
    </>
  )
}
