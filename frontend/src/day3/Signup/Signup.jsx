import React, { useState } from 'react'
import './Signup.css'
import { addsign } from '../../day2/Service/api'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
    const navigate=useNavigate();
    const [add,setAdd]=useState({
        uid:'',name:'',email:'',district:'',mobile:'',bloodgroup:'',gender:'',password:'',role:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setAdd({...add,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(add)=>{
        const res=await addsign(add)
        console.log(res.data)
        setAdd({name:'',email:'',password:'',mobile:'',district:'',bloodgroup:'',gender:'',role:''})
        navigate('/login')
    }
  return (
    <>
    <h3>Register, To donate blood</h3>
    <div className='signupbody'>
    <div className="signupleft">
    <img src='https://health.gov.tt/sites/default/files/styles/large/public/inline-images/Blood%20Bank%20logo%202022-03.png?itok=0H-a6QNb'
            style={{height:'70vh',width:'30vw'}}></img>
    </div>
    <div className='signupright'>
         <div className="names" >
            <input type="text" className="namesign" placeholder='Name' id='name' onChange={handleChange} style={{marginTop:'10px'}} value={add.name}/>
        </div>
        <div className="emails">
            <input type="email" className="emailsign" placeholder='Email' id='email' onChange={handleChange} value={add.email}/>
        </div>
        <div className="passs">
            <input type="password" className="passsign" placeholder='Password' id='password' onChange={handleChange} value={add.password} style={{width:"22vw"}}/>
        </div>
        <div className="mobiles">
            <input type="number" className="mobilesign" placeholder='Mobile' id='mobile' onChange={handleChange} value={add.mobile}/>
        </div>
        <div className="districts">
            <input type="text" className="districtsign" placeholder='District' id='district' onChange={handleChange} value={add.district}/>
        </div>
        <div className="bloods">
            <select className='bloodsign' id='bloodgroup' onChange={handleChange} value={add.bloodgroup}>
                <option value=''>Select Blood Group</option>
                <option value='A+'>A+</option>
                <option value='A-'>A-</option>
                <option value='B+'>B+</option>
                <option value='B-'>B-</option>
                <option value='O+'>O+</option>
                <option value='O-'>O-</option>
            </select>
        </div>
        <div className="genders">
        <select className='gendersign' id='gender' onChange={handleChange} value={add.gender}>
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
            </select>
        </div>
        <div className="roles">
        <select className='rolesign' id='role' onChange={handleChange} value={add.role}>
                <option value=''>Select Role</option>
                <option value='Admin'>Admin</option>
                <option value='User'>User</option>
            </select>
        </div>
        <div className="signbut">
            <button onClick={()=>{handleSubmit(add)}}>Register</button>
        </div>
        <h4 style={{marginBottom:'10px'}}>Already an user ? <span onClick={()=>{navigate('/login')}} style={{cursor:'pointer',color:'red'}}>Login</span></h4>
    </div>
    </div>
    </>
  )
}
