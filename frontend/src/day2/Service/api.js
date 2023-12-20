import axios from 'axios';

const URI="http://localhost:8080";

const adduser=(user)=>axios.post(`${URI}/adduser`,user)
const viewuser=()=>axios.get(`${URI}/viewuser`)
const viewbyid=(uid)=>axios.get(`${URI}/viewbyid/${uid}`)
const edituser=(user,uid)=>axios.put(`${URI}/updateuser/${uid}`,user)
const deluser=(uid)=>axios.delete(`${URI}/deleteuser/${uid}`)

const addsign=(user)=>axios.post(`${URI}/addsignup`,user)
const viewsign=()=>axios.get(`${URI}/viewsignup`)
const viewsignbyid=(uid)=>axios.get(`${URI}/viewsignupid/${uid}`)
const viewemailandpass=(email,password)=>axios.get(`${URI}/viewbyemailandpass/${email}/${password}`)
const editsign=(user,uid)=>axios.put(`${URI}/updatesignup/${uid}`,user)
const delsign=(uid)=>axios.delete(`${URI}/deletesignup/${uid}`)


export {adduser,viewuser,edituser,deluser,viewbyid,addsign,viewsign,viewsignbyid,editsign,delsign,viewemailandpass}