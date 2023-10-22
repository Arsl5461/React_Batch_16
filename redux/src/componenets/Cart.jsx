import React from 'react'
import { useSelector } from 'react-redux'



function Cart() {
    const data=useSelector((state)=>state.data)
    const localProducts=localStorage.setItem("products",JSON.stringify(data))
const products=JSON.parse(localStorage.getItem("products"));
console.log(products.title)
  return (
    <div>
      <h1>{products?.title}</h1>
      <img src={products.image}/>
    </div>
  )
}

export default Cart
