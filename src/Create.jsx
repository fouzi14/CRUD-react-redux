import React, { useState } from 'react'
import './create.css'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from './redux'
import { useNavigate } from 'react-router-dom'

export default function Create () {
  const [name , setName]=useState('')
  const [email , setMail]=useState('')
  const data =useSelector(state=>state.users);
  const dispatch=useDispatch();
  const navigate = useNavigate()
  const addusers=(e)=>{

    dispatch(adduser({id:data[data.length -1].id+1,name,email}))
    navigate('/')
  }
  return (

    <div className='creat'>
        <div className="creatcontaint">
            <form >
                <input type="text" placeholder='Enter Name' 
                onChange={e=>setName(e.target.value)}/>
                <input type="email" placeholder='Enter Email' 
                onChange={e=>setMail(e.target.value)}/>
                <input type="button" value="save" onClick={addusers}/>
                
            </form>
        </div>
    </div>
  )
}
