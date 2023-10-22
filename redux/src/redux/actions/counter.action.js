import { FETCH_PRODUCT_LOADING,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILED, ADD_TO_CART } from "../types/type";

export const increment = {
    type: "INCREMENT"
  };
  
  export const decrement = {
    type: "DECREMENT"
  };

  export const reset = {
    type: "RESET"
  };

  export const fetchData=()=>{
    return async (dispatch) => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
  
          dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: FETCH_PRODUCT_FAILED,
            payload: error.message,
          });
        }
      };
  }


  export const fetchSingleData=(id)=>{
    return async (dispatch) => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
  
          dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: FETCH_PRODUCT_FAILED,
            payload: error.message,
          });
        }
      };
  }


  export const addToCart=(product)=>{
    return async (dispatch) => {
      dispatch({
        type: ADD_TO_CART,
        payload: product,
      });
      }
    };