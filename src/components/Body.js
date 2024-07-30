import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch=useDispatch()
  const appRouter=createBrowserRouter([
    {path:"/",
      element:<Login/>
    },
    {path:"/Browse",
      element:<Browse/>
    },
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is ssigned in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        // ...
      
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
      
      }
    });
    
  },[])
  return (
    <div>
 <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body