import React, { useState,useRef, useEffect } from 'react'
import './Main.css'
import { Topbar } from '../Topbar/Topbar'
import { useDispatch } from 'react-redux'
import { adduser, viewsign } from '../Service/api'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { TopbarUser } from '../Topbar/TopbarUser'

export const Main = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const form=useRef();
    const [add,setAdd]=useState({
        email:'',message:'',name:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setAdd({...add,[e.target.id]:e.target.value})
    }

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


    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     const emailArray=user.map((u)=> u.email)

    //     emailjs.sendForm('service_e8l32up', 'template_hlhy0ql', form.current, 'Ao6DAsfBzy69RGoAL',{toemail:emailArray.join(',')})
    //       .then((result) => {
    //           console.log(result.text);
    //           alert('Email Send');
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //     setAdd({name:'',email:'',message:''})
    //   };

    const sendEmail = async (e) => {
        e.preventDefault();
    
        for (const users of user) {
          const emailParams = {
            toemail: users.email,
            from_name: add.name,
            message: add.message
          };
    
          await emailjs.send('service_e8l32up', 'template_hlhy0ql', emailParams, 'Ao6DAsfBzy69RGoAL');
        }
    
        alert('Email Sucessfully sent to all');
    
        setAdd({message: '' });
        navigate('/viewuser')
      };

      const name=localStorage.getItem('name');
      const email=localStorage.getItem('email');

  return (
    <>
    <TopbarUser/>
    <div className='mainbody'>
    <form ref={form} onSubmit={sendEmail}>
        <div className="namein" style={{marginTop:'20px'}} >
            <input type="text" className="namemain" placeholder='Name' name="username" id='name' value={name}/>
        </div>
        <div className="emailin">
            <input type="email" className="emailmain" placeholder='Email' name='toemail' id='email' onChange={handleChange} value={email}/>
        </div>
        <div className="messin">
            <input type="text" className="messmain" placeholder='Message, mention blood group and contact no' name="message" id='message' onChange={handleChange} value={add.message} style={{height:'50px'}}/>
        </div>
        <div className="mainbut">
            <button onClick={sendEmail}>Send</button>
        </div>
    </form>
    </div>
    <h4>Note : The email will be sent to admin.</h4>
    </>
  )
}
