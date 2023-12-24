import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { delsign, viewsign, viewsignbyid } from '../Service/api';
import { Topbar } from '../Topbar/Topbar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TopbarUser } from '../Topbar/TopbarUser';

export const Viewuser = () => {
    const navigate=useNavigate();
    // const{id}=useParams();

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
        navigate('/signup')
       }
    }
    const edituser=(u)=>{
        navigate(`/edituser/${u.uid}`)
    }
  return (
    <>
    <TopbarUser/>
        <h2>Donors , Friends to support</h2>
            <div className='viewbody' style={{marginLeft:"20%"}}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>District</th>
                    <th>Bloodgroup</th>
                    <th>Gender</th>
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

                     </tr>
                    ))}
            </div>
    </>
  )
}
