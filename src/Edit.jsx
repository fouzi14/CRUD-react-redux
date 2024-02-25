import React, { useState } from 'react'
import './create.css'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, edituser } from './redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit () {
    const {id}=useParams() ;
    const data =useSelector(state=>state.users);
    
    const exissting = data.filter(da=>da.id == id);
    
    const {name,email}  = exissting[0]
    console.log("hhhhhhhhh",exissting[0])
    const [uname , setName]= useState(name)
    const [uemail , setMail]= useState(email)
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const updateuser = (e)=>{
        dispatch(edituser({id , uname , uemail}))
        navigate('/')
    }
  

  return (

    <div className='creat'>
        <div className="creatcontaint">
            <form >
                <input type="text" placeholder='update Enter Name' 
                value={uname} onChange={e=>setName(e.target.value)}/>
                <input type="email" placeholder='update Enter Email' 
                value={uemail} onChange={e=>setMail(e.target.value)}/>
                <input type="button" value="Update" onClick={updateuser}/>
                
            </form>
        </div>
    </div>
  )
}
