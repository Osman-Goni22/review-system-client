import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase_init/Firebase_init';
import { FaBullseye } from 'react-icons/fa6';
import axios from 'axios';
export  const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
 const [user, setUser]=useState(null)
  const [loading, setLoading]=useState(true);

  let users=[];
  const createUser= (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email, password )=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(()=>{
    const subscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)

        if(currentUser?.email){
          const user={
            email:currentUser.email
          }

          if(!users.includes(currentUser.email)){
            users.push(currentUser.email)
          }

          axios.post('https://service-system-reviews-server.vercel.app/jwt', user, {withCredentials:true})
          .then(res=>{
            console.log('login token',res.data);
            setLoading(false)
          })
        }
        else{
          
          axios.post('https://service-system-reviews-server.vercel.app/logout', {}, {withCredentials:true})
          .then(res=>{
            console.log('logout token:',res.data);
            setLoading(false)
          })
        }

       
    })
    return ()=>{
        subscribe();
    }
},[])


  const logOut =()=>{
   return signOut(auth);
   setLoading(true)
  }

  const provider = new GoogleAuthProvider();

  const socialLogin =()=>
  {
    return signInWithPopup(auth, provider )
  }


    

    const AuthInfo ={
        createUser,
        loading,
        signIn,
        user, 
        setUser,
        logOut,
        socialLogin,
        users

    }
    return (
       <AuthContext.Provider value={AuthInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;