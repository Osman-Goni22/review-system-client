import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Auth_Provider/AUthProvider';
import Service from './Service';
import NavBar from '../NavBar';

const MyServices = () => {
    const {user}= useContext(AuthContext)
    const [services, setServices]= useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/myservices?email=${user.email}`)
        .then(res=>{
            setServices(res.data);
            console.log(res.data);
        })
    },[])
    return (
       <div className='max-w-6xl mx-auto'>
        <NavBar></NavBar>
         <div className='grid grid-cols-3 gap-5'>
            {
                services.map(service=><Service service={service} key={service._id}></Service>)
            }
        </div>
       </div>
    );
};

export default MyServices;