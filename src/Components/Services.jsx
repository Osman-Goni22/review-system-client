import React, { useEffect, useRef, useState } from 'react';
import NavBar from './../NavBar';
import axios from 'axios';
import Service from './Service';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Services = () => {
    const [services, setServices] = useState([])

    const [realServices, setRealServices] = useState([])
    console.log(realServices);
    const handleSearch = (e) => {
        e.preventDefault();
        const category = e.target.category?.value;
        console.log(category);

        if (category === 'ALL') {
            setServices(realServices)
        }
        else {
            const selectedServices = realServices.filter(service => (service.category === category));

            setServices(selectedServices);
        }

    }

    





    useEffect(() => {
        axios.get('https://service-system-reviews-server.vercel.app/services', {withCredentials:true})
            .then(res => {
                setServices(res.data);
                setRealServices(res.data)
            })
    }, [])

    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>

            <Helmet>
                <title>Service Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            
            <p className=' text-2xl font-bold my-5 text-center'>Select a Service</p>
            <div className='flex justify-center items-center gap-10'>
           
                <form className='w-[300px] mt-5' action="" onSubmit={handleSearch}>
               

                    <select name="category" id="" className='input input-bordered w-[300px] mx-auto'>
                        <option className='text-center border' value="ALL" >All</option>
                        <option className='text-center' value="Car Dealer">Car Dealer</option>
                        <option className='text-center' value="Bank">Bank</option>
                        <option className='text-center' value="Travel Insurance Company">Travel Insurance Company</option>
                        <option className='text-center' value="Furniture Store">Furniture Store</option>
                        <option className='text-center' value="Jewelry Store">Jewelry Store</option>
                        <option className='text-center' value="Women's Clothing Store">Women's Clothing Store</option>
                        <option className='text-center' value="Fitness and Nutrition Service">Fitness and Nutrition Service</option>

                    </select>
                    <br />

                    <input type="submit" className='input input-bordered flex justify-center mt-2 w-full bg-orange-400 text-white' value="Search" />

                </form>

            </div>


            <div className='grid grid-cols-3 gap-5'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Services;