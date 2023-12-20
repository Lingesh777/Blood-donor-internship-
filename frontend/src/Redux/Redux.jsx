import {createSlice} from '@reduxjs/toolkit';

const initialState={
admin:null,
user:[],
blooduser:[],
};

const Redux=createSlice({
    name:'admin',
    initialState,reducers:{
        SetAdmin:(state,action)=>{
            state.admin=action.payload
        },
        postuser:(state,action)=>{
            state.user.push(action.payload)
        },
        deleteuser:(state,action)=>{
            state.user=state.user.filter((person)=>person.username!==action.payload)
        },
        updateuser:(state,action)=>{
            const data=action.payload;
            const exist=state.user.filter((person)=>person.username===data.username)
           
                exist.username=data.username;
                exist.email=data.email;
                exist.mobile=data.mobile;
                exist.bloodgroup=data.bloodgroup;
        },
        adduser:(state,action)=>{
            state.blooduser.push(action.payload)
        },
        deleteblooduser:(state,action)=>{
            state.blooduser=state.blooduser.filter((u)=>u.uid!==action.payload)
        },
    }
});

export const {SetAdmin,postuser,deleteuser,updateuser,adduser,deleteblooduser}=Redux.actions;

export const getAdmin=(state)=>state.adminInfo.admin;
export const getUser=(state)=>state.adminInfo.user;
export const getBlooduser=(state)=>state.adminInfo.blooduser;

export default Redux.reducer;
