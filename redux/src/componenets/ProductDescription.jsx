import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, fetchSingleData } from '../redux/actions/counter.action';
import { useNavigate, useParams } from 'react-router-dom';


function ProductDescription() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {id}=useParams();
    const product=useSelector((state)=>state.data)
    useEffect(()=>{
dispatch(fetchSingleData(id))
    },[dispatch])
    const cart=()=>{
        dispatch(addToCart(product))
        console.log("Product added to cart!")
        navigate("/cart")
    }
  return (
    <>
     <div className="row">
        <div className="col-lg-6"><img src={product?.image} height={"500px"} width={"500px"} /></div>
        <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center align-items-center w-50">
                <h1>{product?.title}</h1>
                <p>{product?.description}</p>
                <h4>{product?.price}</h4>
                <button onClick={()=>cart()}>Add to Cart</button>
            </div>
        </div>
        </div> 
    </>
  )
}

export default ProductDescription
