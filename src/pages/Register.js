import React from 'react'
import './login.css'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Ending from './Ending';
function Register() {
    const navigate = useNavigate()
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [cpassword,setCpassword]=useState("")

const registerUser=(e)=>{
e.preventDefault()
if(password !==cpassword){
  toast.error("passwords donot match")
}else{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    toast.success("registration successful")
      navigate('/Oneone')
   
  })
  .catch((error) => {
    //const errorCode = error.code;
   // const errorMessage = error.message;
    toast.error(error.message)
  });
}
}

  return (
    <>
    <ToastContainer/>
      <div class="container" style={{marginTop:"130px",marginLeft:"auto",marginRight:"auto",marginBottom:"50px"}}>
    <div class="row" >
      <div class="twomargins card col-12 col-md-6" style={{width:"350px",height:"400px",border:"none",boxShadow:"0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)",background:"#f2f2f2"}}  >
        <form>
          <h2 className='threelog'>Register</h2>
          <input type="text" placeholder='Email' required className='fourlog' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder='Password' required className='fourlog' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder='Confirm Password' required className='fourlog' value={cpassword} onChange={(e)=>setCpassword(e.target.value)}></input>
          <br></br>
          <button type='button' className='btn btn-primary ' style={{width:"250px",marginLeft:"38px",marginRight:"45px",marginTop:"25px"}} onClick={registerUser}>Register</button>
          <br></br>
          <p style={{marginLeft:"40px"}}>Already have an account? <a href='/Oneone' style={{color:"blue"}}>Login</a> </p>
        </form>
        </div>
        <div className=" col-12 col-md-6">
        <img src="/images/phone.png" style={{width:"300px",height:"400px",marginTop:"20px",marginLeft:"150px"}} ></img>
      </div>
    </div>
  </div>

  <section>
<div class="gg container" style={{marginTop:"150px"}}>
<div class="row">
	<div class="col-lg-6 col-md-3">
		<img class="iiu" src="./images/phone.jpg" width={300}></img>
	</div>
	<div className='col-lg-6 col-md-3'>
		<p class="xcv"><span class="jhg">Download App</span><br></br><br></br>oalley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy ndustry's stans, when an unknown prstans, when an unknown printer took a galley of type and scrambled.oalley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy ndustry's stans, when an unknown prstans, when an unknown printer took a galley of type and scrambled</p>
		<br></br>
		<div class="hjkl0">
			<div class=" fdg">
			<p><span class="klm"><FaApple/></span>Download on App Store</p>
			</div>
			<div class="kdg">
			<p><span class="klm"><FaGooglePlay/></span>Available on Google Play</p>
			</div>
			
		</div>
	</div>
</div>
</div>
</section>
<Ending/>
    </>
  )
}

export default Register