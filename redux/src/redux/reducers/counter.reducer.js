import { FETCH_PRODUCT_FAILED, FETCH_PRODUCT_LOADING, FETCH_PRODUCT_SUCCESS,ADD_TO_CART } from "../types/type";


const initialState = {
    count: 0,
    data:null,
    loading:false,
    error:false,
    cart:[]
  }
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1
        };
        case "RESET":
        return {
          ...state,
          count: 0
        };
        case FETCH_PRODUCT_LOADING:
            return {...state,data:null,loading:true,error:false}
            case FETCH_PRODUCT_SUCCESS:
               
                return {...state,data:action.payload,loading:false,error:false}
                case FETCH_PRODUCT_FAILED:
                    return {...state,data:null,loading:false,error:true}
        case ADD_TO_CART:
        return {...state,cart:action.payload}
      default:
        return state;
    };
  }
  
  export default counterReducer;