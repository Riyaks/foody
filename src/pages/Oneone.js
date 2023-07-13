import React from 'react'
import './login.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from './firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Ending from './Ending';
function Oneone() {
  const navigate = useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const loginUser=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
     // const user = userCredential.user;
      toast.success("Login successful")
      localStorage.setItem("pwd",true);
     navigate('/Foods')
   
    })
    .catch((error) => {
      toast.error(error.message)
    });
 }




 //login with google
 const provider = new GoogleAuthProvider();
 const googleSignin=(e)=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    //const user = result.user;
    toast.success("Login successful")
    localStorage.setItem("pwd",true);
    navigate('/Foods')
    }).catch((error) => {
    toast.error(error.message)

  });
 }

  return (
    <>
    <ToastContainer/>
  <div className="container" style={{marginTop:"130px",marginLeft:"auto",marginRight:"auto",marginBottom:"50px"}}>
    <div className="row" >
      <div className=" col-12 col-md-6">
        <img src="/images/login-img.jpg" className='margins' style={{width:"300px",height:"400px",marginTop:"20px"}} ></img>
      </div>
      <div className="two card col-12 col-md-6" style={{width:"350px",height:"430px",border:"none",boxShadow:"0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)",background:"#f2f2f2"}}
      >
        <form>
          <h2 className='threelog'>Login</h2>
          <input type="text" placeholder='Email' required className='fourlog' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder='Password' required className='fourlog' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          <br></br>
          <button type='button' className='btn btn-primary ' style={{width:"250px",marginLeft:"38px",marginRight:"45px",marginTop:"25px"}} onClick={loginUser}>Login</button>
          <br></br>
          <a href='/reset' className="fivelog">Reset password</a><br></br>
          <p style={{marginLeft:"100px",marginTop:"12px"}}>---- or ----</p>
          <button type='button' className='btn btn-danger' style={{width:"250px",marginLeft:"38px",marginRight:"45px"}} onClick={googleSignin}><FaGoogle/>  Login with Google</button><br></br>
          <p style={{marginLeft:"40px"}}>don't have an account? <a href='/Register' style={{color:"red"}}>register</a> </p>
        </form>
        </div>
    </div>
  </div>
<Ending/>
    </>
  )
}

export default Oneone