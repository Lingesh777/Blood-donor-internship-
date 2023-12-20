import React from 'react'
import './Home.css'
import { useState } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { deleteuser, getUser, postuser, updateuser } from '../Redux/Redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    username:'',email:'',mobile:''
  });

  const dispatch=useDispatch();

  const handleChange=(e)=>{
    e.preventDefault();
    setUser({...user,[e.target.id]:e.target.value})
  }
  const adduser=(user)=>{
    console.log(user);
    if(user.username!==''||user.email!==''||user.mobile!==''||user.bloodgroup!=='')
    {
      dispatch(postuser(user));
      setUser({username:'',email:'',mobile:'',bloodgroup:''});
    }
  }
  const deluser=(user)=>{
    dispatch(deleteuser(user.username));
  }
  const edituser=(user)=>{
    // dispatch(updateuser(user.username));
    localStorage.setItem('username',user.username);
    navigate('/edit');
  }
  const person=useSelector(getUser);

  return (
    <>
    <h1>Blood Donor Junction</h1>
    <h2>Save Life </h2>
    <div className="homeimg">
      <img src='https://images.pexels.com/photos/3786166/pexels-photo-3786166.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'30vw'}}></img>
    </div>
    <div className='todobody'>
       <div className='namein'><input type="text" className="username" id='username' placeholder='Username'  onChange={handleChange} value={user.username}/></div>
       <div className='emailin'><input type="email" className="email" id='email' placeholder='Email'  onChange={handleChange} value={user.email}/></div>
      <div className='mobilein'> <input type="number" className="mobile" id='mobile' placeholder='Mobile Number' onChange={handleChange} value={user.mobile}/></div>
      <div className='bloodin'>  <select className='bloodgroup' id='bloodgroup' onChange={handleChange} value={user.bloodgroup}>
            <option value=''>Select Blood Group</option>
            <option value='A+'>A+</option>
            <option value='A-'>A-</option>
            <option value='B+'>B+</option>
            <option value='B-'>B-</option>
            <option value='O+'>O+</option>
          </select></div>
       <div className="button"><button onClick={()=>{adduser(user)}} > Add User</button></div>
    </div>

    <div className="userdetails">
      <tr style={{color:'white',backgroundColor:'red'}}>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Blood Group</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
      {person.map((per)=>(
        <tr>
          <td>{per.username}</td>
          <td>{per.email}</td>
          <td>{per.mobile}</td>
          <td>{per.bloodgroup}</td>
          <td onClick={()=>{deluser(per)}} style={{cursor:'pointer'}}><DeleteIcon/></td>
          <td onClick={()=>{edituser(per)}} style={{cursor:'pointer'}}><EditIcon/></td>
        </tr>
      ))}
    </div>
    </>
  )
}
