import { Button } from '@mui/material'
import React from 'react'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDroplet} from '@fortawesome/free-solid-svg-icons';

export const TopbarUser = () => {
    const navigate=useNavigate();
  return (
    <div className='topbar' style={{display:"flex",alignItems:"center",boxShadow:' rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
        <div className="icon" style={{marginLeft:'10px'}}>
        <FontAwesomeIcon icon={faHandHoldingDroplet} style={{color: "#fb0909",fontSize:'40px'}} />
        </div>
        <h4 style={{marginLeft:'20px',fontSize:'20px'}}>Blood Donor Junction</h4>
        <div className="topbut" style={{marginLeft:'43%'}}>
            <Button style={{color:'black',fontWeight:'bold'}} onClick={()=>{navigate('/viewuser')}}>Donors</Button>
            <Button style={{color:'black',fontWeight:'bold',width:'15vw'}} onClick={()=>{navigate('/main')}}>Blood request</Button>
            <Button style={{color:'black',fontWeight:'bold'}} onClick={()=>{navigate('/edituser')}}>Edit</Button>
            <Button style={{color:'black',fontWeight:'bold',width:'8vw'}} onClick={()=>{navigate('/login')}}>Signout</Button>
        </div>
    </div>
  )
}
