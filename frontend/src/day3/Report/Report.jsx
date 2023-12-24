import React, { useEffect, useState } from 'react'
import { Topbar } from '../../day2/Topbar/Topbar'
import './Report.css'
import { viewsign } from '../../day2/Service/api';

export const Report = () => {

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

    const apos=user.filter((u)=>u.bloodgroup==='A+')
    const bpos=user.filter((u)=>u.bloodgroup==='B+')
    const opos=user.filter((u)=>u.bloodgroup==='O+')
    const aneg=user.filter((u)=>u.bloodgroup==='A-')
    const bneg=user.filter((u)=>u.bloodgroup==='B-')
    const oneg=user.filter((u)=>u.bloodgroup==='O-')


  return (
    <>
    <Topbar/>
        <div className="reptot">
            <h2>Total Donors : {user.length}</h2>
        </div>
    <div className='reportbody'>
        <div className="repbox">
            <h2>A+ve  donors : {apos.length}</h2>
        </div>
        <div className="repbox">
            <h2>A-ve  donors : {aneg.length}</h2>
        </div>
        <div className="repbox">
            <h2>B+ve  donors : {bpos.length}</h2>
        </div>
        <div className="repbox">
            <h2>B-ve  donors : {bneg.length}</h2>
        </div>
        <div className="repbox">
            <h2>O+ve  donors : {opos.length}</h2>
        </div>
        <div className="repbox">
            <h2>O-ve  donors : {oneg.length}</h2>
        </div>
        
    </div>
    </>
  )
}
