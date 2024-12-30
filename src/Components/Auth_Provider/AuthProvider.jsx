import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase_init/Firebase_init';
import { FaBullseye } from 'react-icons/fa6';
export  const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
 const [user, setUser]=useState(null)
  const [loading, setLoading]=useState(true);

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
       setLoading(false)
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
        socialLogin

    }
    return (
       <AuthContext.Provider value={AuthInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;