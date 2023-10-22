import { Routes,Route } from "react-router-dom";
import Products from "./componenets/Products";
import ProductDescription from "./componenets/ProductDescription";
import Cart from "./componenets/Cart";

function App() {
 
  return (
    <>
    <Routes>
<Route path="/" element={<Products/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/product/:id" element={<ProductDescription/>}/>
</Routes>
</>
  );
}

export default App;
