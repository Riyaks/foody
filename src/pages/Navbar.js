
import React, { useEffect, useState } from 'react'
import './styleone.css'
//import 'bootstrap/dist/css/bootstrap.css';
import {FaSearch, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from './authSlice';
import ShowOnLogin from './hiddenLink';
function Navbar() {
    const [uname, setUname] = useState("");
    const dispatch=useDispatch()
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
        // console.log(user)
       if(user.displayName == null){
        const u1=user.email.slice(0,-10);
        const uName=u1.charAt(0).toUpperCase()+u1.slice(1);
       // console.log(uName)
        setUname(uName)
       }else{
        setUname(user.displayName)
       }
  
      
  
       dispatch(SET_ACTIVE_USER({
       email:user.email,
       userName:user.displayName ? user.displayName : uname,
       userId:user.uid
  
       }))
          
        } else {
          setUname("");
          dispatch(REMOVE_ACTIVE_USER())
         
        }
      });
  
    },[]);
  
    const Navigate = useNavigate()
    const logoutUser=(e)=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.removeItem("pwd")
        toast.success("Logout successfully..")
       Navigate('/Oneone')
      }).catch((error) => {
        // An error happened.
        toast.error(error.message)
      });
    }
    const foodlogin=(e)=>{
     Navigate("/Foods")
    }
    const contacts=(e)=>{
      Navigate("/Contacts")
     }
     const carts=(e)=>{
      Navigate("/Cart")
     }
     const oneone=(e)=>{
      Navigate("/Oneone")
     }
     const home=(e)=>{
      Navigate("/")
     }
  return (

<>
<ToastContainer/>
<head>
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <title>Ecommerce Navbar Design</title>

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="style.css"/>
</head>
<div class="main-navbar shadow-sm sticky-top ">
        <div class="top-navbar " style={{backgroundColor:"orange"}}>
            <div class="container-fluid">
                <div class="row">
                 
   <div class="col-md-5  my-auto">
                        <ul class="nav justify-content-end">
                        <div class="kkk">
                       <a onClick={home}> <img src='./images/icon.png' class="brand-name rounded-circle stylenav"  style={{width:"60px",height:"60px",cursor:"pointer"}}/></a>

                    </div>
                        <li class="nav-item">
                                <a class="nav-link" onClick={foodlogin} style={{cursor:"pointer",marginLeft:"50px"}}>
                                    <i class="fa "></i> Order now
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={contacts} >
                                    <i class="fa "></i> Contacts
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={carts} >
                                    <i class="fa fa-shopping-cart"></i> Cart 
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={oneone}>
                                    <i class="fa fa-key"></i> Login
                                </a>
                            </li>
                           </ul>
                           </div>
                           <div class="col-md-5  my-auto">
                            <ul class="nav justify-content-end">
                            <li class="nav-item ">
                            <a class="nav-link " href="#" role="button"  style={{color:"black"}}>
                            <FaUserCircle size={20} style={{color:"white",marginRight:"8px"}}/>{uname}
                                </a>
                             
                            </li>
                           
                            <li class="nav-item">
                            <a className='nav-link' onClick={logoutUser}><FaSignOutAlt class="loguser" style={{fontSize:"30px",cursor:"pointer"}}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>

    



    </>
  )
}

export default Navbar