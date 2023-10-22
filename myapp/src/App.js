 
import './App.css';
import Form from './component/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Create from "./component/Create"
import Login from "./component/Login"
import {Routes,Route,Navigate} from "react-router-dom"
import UpdateUser from './component/UpdateUser';
import Dashboard from './component/Dashboard';
import { useState,useEffect } from 'react';


async function isUserAuthenticated() {
  const token = await localStorage.getItem("token");
  return !!token;
}


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    isUserAuthenticated().then((result) => {
      setAuthenticated(result);
    });
  }, []);
  console.log(authenticated,"Auth")
  return (
    <>
    <Routes>
      <Route path="/" element={<Create/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/login" />}/>
      <Route path="/edit/:id" element={<UpdateUser/>}/>

  </Routes>
  <ToastContainer />
  </>
  );
}

export default App;
