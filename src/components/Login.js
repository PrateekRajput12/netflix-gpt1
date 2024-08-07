import React, { useRef, useState } from 'react'
import Header from './Header'
import { auth } from '../utils/firebase';
import { checkValidData } from '../utils/validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const dispatch =useDispatch()
const navigate=useNavigate()
  const [errorMsg,seterrorMsg]=useState(null)
 const email=useRef(null)
 const password=useRef(null)
 const name=useRef(null)

 const [isSignInForm , setisSignInForm]=useState(true)

 const handleBTNClick=()=>{
// validate form 
// console.log(email);
// console.log(password.current.value

// );
const msg =checkValidData(email.current.value,password.current.value)
console.log(msg);
seterrorMsg(msg)

if(msg){
return
}
 

if(!isSignInForm){
  // sign up
  createUserWithEmailAndPassword(
    auth,
     email.current.value,
      password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;

      dispatch(
        addUser(
          {uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL
          }))
      
      // Profile updated!
      navigate("/browse")
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    
    });
    
    // .
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMsg(errorMessage +"  "+errorCode)
    // ..
  });


}
else{
  // sign in
  signInWithEmailAndPassword(auth,
     email.current.value, 
     password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMsg(errorMessage + "   "+errorCode)
  });

}


 } 


const toggleSignInForm=()=>{
  setisSignInForm(!isSignInForm)
}
  return (
    <div className=''>
       <Header/>
       <div>
<img
alt='bg w-screen'
className='absolute'
src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg'/>
</div>


<form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg' onSubmit={e => e.preventDefault()}  > 
  <h1 className='font-bold text-3xl py-4' >{isSignInForm?"Sign In":"Sign Up"}</h1>
{  !isSignInForm &&
    <input 
    ref={name}
  type='name' 
  placeholder='Full Name' 
   className='p-4 my-4 w-full bg-gray-700 '/>
  }
  <input 
  ref={email}
  type='email' 
  placeholder='Email Address' 
   className='p-4 my-4 w-full bg-gray-700 '/>
  <input type='password'
  ref={password}
   placeholder='Password' 
    className='p-3 px-6 my-3 w-full bg-gray-700'/>
    <p className=''>{errorMsg?errorMsg:" "}</p>
  <button
  onClick={handleBTNClick}
  className='bg-red-700  cursor-pointer p-4 my-6 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
  <p className='text-center'>{isSignInForm?"Already Have An Account ? ":"Don't have an account? " }<span onClick={toggleSignInForm} className='text-red-700 underline'>{isSignInForm?"Sign In":"Sign Up"}</span></p>
</form>

     
    </div>
  )
}

export default Login