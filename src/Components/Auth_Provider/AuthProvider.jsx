import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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


    

    const AuthInfo ={
        createUser,
        loading,
        signIn,
        user, 
        setUser,
        logOut

    }
    return (
       <AuthContext.Provider value={AuthInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;