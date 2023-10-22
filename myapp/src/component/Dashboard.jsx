import React,{useEffect, useState} from 'react'
import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom'


function Dashboard() {
  const userToken=localStorage.getItem("token")
  const user = jwt(userToken)
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div>
      <h1 className='text-center'>Welcome user {user?.name}</h1>
      <button className='btn btn-danger' onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
