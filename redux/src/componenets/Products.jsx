import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/counter.action";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

function Products() {
    const data=useSelector((state)=>state.data)
  
    const dispatch=useDispatch();
  
    useEffect(()=>{
  dispatch(fetchData())
    },[dispatch])
  return (
    <>
      {
        data?.map((item)=>{
            return(
                <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <Link to={`/product/${item.id}`} class="btn btn-primary">{item.price}</Link>
  </div>
</div>
            )
        })
      }  
    </>
    
  )
}

export default Products
