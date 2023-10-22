import React,{useEffect,useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"


function Table() {

    const [data,setData]=useState([])
const fetchData=async()=>{
    const getData=await axios.get("http://localhost:8000/user")
    setData(getData.data.users)
}
    useEffect(()=>{
      fetchData();
    },[])
    const deleteData=async(id)=>{
      try {
        await axios.delete(`http://localhost:8000/user/${id}`);
        window.location.reload(true);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
    const updateData=async(id)=>{
      try {
        await axios.put(`http://localhost:8000/user/${id}`,data);
        window.location.reload(true);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Delete User</th>
      <th scope="col">Update User</th>

    </tr>
  </thead>
  {data.map((item)=>{
    return(
    <tbody>
    <tr>
      <th scope="row">{item._id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.age}</td>
      <td><button onClick={()=>deleteData(item._id)}>Delete</button></td>
      <td><Link to={`/edit/${item._id}`}>Update</Link></td>

    </tr>
   
  </tbody>
    )
  })}
  
</table>
    </div>
  )
}

export default Table
