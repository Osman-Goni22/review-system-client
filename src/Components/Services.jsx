import React, { useEffect, useState } from 'react';
import NavBar from './../NavBar';
import axios from 'axios';
import Service from './Service';

const Services = () => {

    const [services, setServices]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/services', {withCredentials:true})
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
                services.map(service =><Service service={service} key={service._id}></Service>)
              }
            </div>
        </div>
    );
};

export default Services;