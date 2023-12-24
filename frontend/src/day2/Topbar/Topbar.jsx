import { Button } from '@mui/material'
import React from 'react'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDroplet} from '@fortawesome/free-solid-svg-icons';

export const Topbar = () => {
    const navigate=useNavigate();
  return (
    // <div className="topbody" style={{display:'flex',alignItems:'center'}}>
    <div className='topbar' style={{boxShadow:' rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',top:'0',left:'0',width:'100vw',height:'15vh',alignItems:'center',display:'flex',zIndex:'1000'}}>
        <div className="icon" style={{width:'80px'}}>
        <FontAwesomeIcon icon={faHandHoldingDroplet} style={{color: "#fb0909",fontSize:'40px',marginLeft:'50px'}} />
        </div>
        <h4 style={{marginLeft:'5px',fontSize:'20px',width:'270px'}}>Blood Donor Junction</h4>
        <div className="topbut" style={{marginLeft:'45%'}}>
            <Button style={{color:'black',fontWeight:'bold'}} className='viewbut' onClick={()=>{navigate('/view')}}>View donors</Button>
            <Button style={{color:'black',fontWeight:'bold'}} onClick={()=>{navigate('/report')}}>Report</Button>
            <Button style={{color:'black',fontWeight:'bold'}} onClick={()=>{navigate('/login')}}>Signout</Button>
        </div>
    </div>
    // </div>
  )
}
