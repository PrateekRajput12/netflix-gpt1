import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

 const [isSignInForm , setisSignInForm]=useState(true)
const toggleSignInForm=()=>{
  setisSignInForm(!isSignInForm)
}
  return (
    <div className='flex justify-center items-center'>
       <Header/>
       <div>
<img
alt='bg w-screen'
className='bg w-screen'
src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg'/>
</div>


<form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg'>
  <h1 className='font-bold text-3xl py-4' >{isSignInForm?"Sign In":"Sign Up"}</h1>
{  !isSignInForm &&
    <input 
  type='name' 
  placeholder='Full Name' 
   className='p-4 my-4 w-full bg-gray-700 '/>
  }
  <input 
  type='email' 
  placeholder='Email Address' 
   className='p-4 my-4 w-full bg-gray-700 '/>
  <input type='password'
   placeholder='Password' 
    className='p-3 px-6 my-3 w-full bg-gray-700'/>
  <button className='bg-red-700  cursor-pointer p-4 my-6 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
  <p className='text-center'>{isSignInForm?"Already Have An Account ? ":"Don't have an account? " }<span onClick={toggleSignInForm} className='text-red-700 underline'>{isSignInForm?"Sign In":"Sign Up"}</span></p>
</form>

     
    </div>
  )
}

export default Login