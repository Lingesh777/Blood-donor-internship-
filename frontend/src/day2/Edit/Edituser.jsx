import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { editsign, edituser, viewbyid, viewsignbyid } from '../Service/api';
import './Edit.css'
import { Topbar } from '../Topbar/Topbar';
import { TopbarUser } from '../Topbar/TopbarUser';

export const Edituser = () => {
    
const id=localStorage.getItem('uid')
const navigate=useNavigate()
const[per,setPer]=useState({
    uid:'',name:'',email:'',mobile:'',district:'',gender:'',bloodgroup:'',role:''
})

const fetchbyid=async()=>{
    try{
        const res=await viewsignbyid(id);
        setPer(res.data)
    }
    catch(error){
        console.log("error")
    }
}
useEffect(()=>{
    fetchbyid()
},[])

const handleChange=(e)=>{
    e.preventDefault();
    setPer({...per,[e.target.id]:e.target.value})
}

const handleSubmit=async(per)=>{
    localStorage.setItem('name',per.name)
    localStorage.setItem('email',per.email)
    const ed=await editsign(per,per.uid)
    console.log(ed);
    navigate(`/viewuser`)
}

  return (
    <>
    <TopbarUser/>
    <div className='editbody'>
             <div className="namein">
            <input type="text" className="namemain" placeholder='Name' id='name' value={per?.name} onChange={handleChange} />
        </div>
        <div className="emailin">
            <input type="email" className="emailmain" placeholder='Email' id='email' value={per?.email} onChange={handleChange} />
        </div>
        <div className="mobilein">
            <input type="number" className="mobilemain" placeholder='Mobile' id='mobile'  value={per?.mobile} onChange={handleChange} />
        </div>
        <div className="districtin">
            <input type="text" className="districtmain" placeholder='District' id='district'  value={per?.district} onChange={handleChange} />
        </div>
        <div className="bloodin">
            <select className='bloodmain' id='bloodgroup' value={per?.bloodgroup} onChange={handleChange} style={{marginTop:'10px'}} >
                <option value=''>Select Blood Group</option>
                <option value='A+'>A+</option>
                <option value='A-'>A-</option>
                <option value='B+'>B+</option>
                <option value='B-'>B-</option>
                <option value='O+'>O+</option>
                <option value='O-'>O-</option>
            </select>
        </div>
        <div className="namein">
        <select className='gendermain' id='gender'  value={per?.gender} onChange={handleChange} >
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
            </select>
        </div>
        <div className="roles">
        <select className='rolesign' id='role' onChange={handleChange} value={per?.role}>
                <option value=''>Select Role</option>
                <option value='Admin'>Admin</option>
                <option value='User'>User</option>
            </select>
        </div>
        <div className="mainbut">
            <button onClick={()=>{handleSubmit(per)}}>Save</button>
            <button onClick={()=>{navigate('/viewuser')}} style={{backgroundColor:'red',color:'white',marginLeft:'10px'}}>Cancel</button>
        </div>
    </div>
    </>
  )
}
