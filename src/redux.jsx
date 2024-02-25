import { createSlice } from "@reduxjs/toolkit";
import { datalist } from "./data";

const userslice=createSlice({
    name:"users",
    initialState:datalist,
    reducers:{
        adduser:(state,action)=>{
            console.log(action.payload)
            state.push(action.payload)
        },
        edituser:(state,action)=>{
            const {id , uname , uemail} = action.payload
            const uuser = state.find(user=>user.id ==id)
            if (uuser){
                uuser.name=uname;
                uuser.email=uemail;
            }
        
        },
        deletuser:(state,action)=>{
            const {id } = action.payload
            const uuser = state.find(user=>user.id ==id)
            if (uuser){
                return state.filter(u=>u.id !== id)
            }
        
        }
    }
})
export const {adduser ,  edituser , deletuser} = userslice.actions
export default userslice.reducer