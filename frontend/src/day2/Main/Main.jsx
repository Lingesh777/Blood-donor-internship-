import React, { useState } from 'react'
import './Main.css'
import { Topbar } from '../Topbar/Topbar'
import { useDispatch } from 'react-redux'
import { adduser } from '../Service/api'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const [add,setAdd]=useState({
        uid:'',name:'',email:'',district:'',mobile:'',bloodgroup:'',gender:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setAdd({...add,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(add)=>{
        // const uid=new Date().getTime().toString();
        // dispatch(adduser({ ...add, uid }));
        const res=await adduser(add)
        console.log(res.data)
        setAdd({name:'',email:'',mobile:'',district:'',bloodgroup:'',gender:''})
    }
  return (
    <>
    <Topbar/>
    <div className='mainbody'>
        <div className="namein">
            <input type="text" className="namemain" placeholder='Name' id='name' onChange={handleChange} value={add.name}/>
        </div>
        <div className="emailin">
            <input type="email" className="emailmain" placeholder='Email' id='email' onChange={handleChange} value={add.email}/>
        </div>
        <div className="mobilein">
            <input type="number" className="mobilemain" placeholder='Mobile' id='mobile' onChange={handleChange} value={add.mobile}/>
        </div>
        <div className="districtin">
            <input type="text" className="districtmain" placeholder='District' id='district' onChange={handleChange} value={add.district}/>
        </div>
        <div className="bloodin">
            <select className='bloodmain' id='bloodgroup' onChange={handleChange} value={add.bloodgroup}>
                <option value=''>Select Blood Group</option>
                <option value='A+'>A+</option>
                <option value='A-'>A-</option>
                <option value='B+'>B+</option>
                <option value='B-'>B-</option>
                <option value='O+'>O+</option>
            </select>
        </div>
        <div className="namein">
        <select className='gendermain' id='gender' onChange={handleChange} value={add.gender}>
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
            </select>
        </div>
        <div className="mainbut">
            <button onClick={()=>{handleSubmit(add)}}>Add me</button>
        </div>
    </div>
    </>
  )
}
