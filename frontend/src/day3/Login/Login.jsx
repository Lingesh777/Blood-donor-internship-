import React, { useState } from 'react'
import './Login.css'
import { viewemailandpass } from '../../day2/Service/api'
import { useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export const Login = () => {
    const navigate=useNavigate();
    const [log,setLog]=useState({
        email:'',password:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setLog({...log,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(log)=>{
        const res=await viewemailandpass(log.email,log.password)
        // console.log(res.status);
        if(res.status===200){
        setLog({email:'',password:''})
        const ro=res.data[0].role;
        if(res.data[0].role==='Admin'){
            navigate('/view')
        }
        else{
            navigate(`/viewuser/${res.data[0].uid}`)
        }
    }else{
        navigate('/signup')
    }
    }
  return (
    <div className='loginbody'>
        <div className="loginleft">
            <img src='https://www.shutterstock.com/image-vector/blood-collection-transfusion-icon-donor-600nw-2129911235.jpg'
            style={{height:'50vh',marginLeft:'-30px',width:'35vw'}}></img>
        </div>
        <div className='loginright'>
            {/* <h3>Spread your Blood</h3> */}
            <h3 style={{marginLeft:'150px'}}>Save Lives !.. Start Donate !..</h3>
            <div className="emaillog">
                <input type="email" className="emaillogin" placeholder='Email' id='email' onChange={handleChange} value={log.email}/>
            </div>
            <div className="passlog">
                <input type="password" className="passslogin" placeholder='Password' id='password' onChange={handleChange} value={log.password}/>
            </div>
            <div className="loginbut">
                <button onClick={()=>{handleSubmit(log)}}>Login</button>
            </div>
            <h4 style={{marginLeft:'100px'}}> Are u a new Donor ? <span onClick={()=>{navigate('/signup')}} style={{cursor:'pointer',color:'red'}}>Register</span></h4>
        </div>
    </div>
  )
}
