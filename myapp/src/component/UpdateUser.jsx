import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function UpdateUser() {
    const {id}=useParams();
    const navigate=useNavigate();
    const fetchData=async()=>{
        const response=await axios.get(`http://localhost:8000/user/${id}`)
        setData(response.data.users)
    }
useEffect(()=>{
    fetchData();
},[])
    
    const [data,setData]=useState({
        id:"",
        name:"",
        email:"",
        age:""
    
      })
    const onSubmit=async(e)=>{
        e.preventDefault();
        const updatedData=await axios.put(`http://localhost:8000/user/${id}`,data)
toast.success("User Updated Successfully!")
navigate("/create")
        window.location.reload(true);
     
    }
    const handleChange=(e)=>{
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
          }));
    }
    const {name,email,age}=data;
    return (
        <div>
            <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <br/>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange}  />
        <br/> 
        <label>Age:</label>
        <input type="number" name="age" value={age} onChange={handleChange}  />
        <br/> 
        <button>Save</button>
        </form>
        </div>
      )
    }

export default UpdateUser
