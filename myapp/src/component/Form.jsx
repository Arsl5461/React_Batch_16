import React,{useState} from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
function Form() {
  const [data,setData]=useState({
    id:"",
    name:"",
    email:"",
    password:"",

  })
const onSubmit=async(e)=>{
    e.preventDefault();
    const storeData=await axios.post("http://localhost:8000/user",data)
    if(storeData.data.status===409){
      toast.warning(storeData.data.message)
    }
    else{
      toast.success(storeData.data.message)
      window.location.reload(true);
    }
    setData({
        name:"",
        email:"",
        password:"",
        id:""

    })
 
}
const handleChange=(e)=>{
    setData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
}
const {name,email,password,id}=data;
return (
    <div>
        <form onSubmit={onSubmit}>
        <label>UserId:</label>
    <input type="text" name="id" value={id} onChange={handleChange} />
    <br/>
    <label>Name:</label>
    <input type="text" name="name" value={name} onChange={handleChange} />
    <br/>
    <label>Email:</label>
    <input type="email" name="email" value={email} onChange={handleChange}  />
    <br/> 
    <label>Password:</label>
    <input type="password" name="password" value={password} onChange={handleChange}  />
    <br/> 
    <button>Save</button>
    </form>
    </div>
  )
}

export default Form
