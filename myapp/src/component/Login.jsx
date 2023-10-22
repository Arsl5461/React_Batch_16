import React,{useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [login,setLogin]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate();
    const onSubmit=async(e)=>{
        e.preventDefault();
        const storeData=await axios.post("http://localhost:8000/user/login",login)
        localStorage.setItem("token",storeData.data.token)
        if(storeData.data.status===403){
          toast.warning(storeData.data.message)
        }
        else{
          navigate("/dashboard")

        }
        setLogin({
            email:"",
            password:""   
        })
     
    }
    const handleChange=(e)=>{
        setLogin((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
          }));
    }
    const {email,password}=login;
  return (
    <div>
      <h1 className='text-center' style={{color:"red"}}>Login</h1>
      <form onSubmit={onSubmit} className='d-flex flex-column justify-center align-items-center'>
      <label>Email:</label>
      <input type="email" name="email" value={email} onChange={handleChange}/>
      <label>Password:</label>
      <input type="password" name="password" value={password} onChange={handleChange}/>
      <button className='btn btn-primary mt-3'>Submit</button>
      </form>
    </div>
  )
}

export default Login
