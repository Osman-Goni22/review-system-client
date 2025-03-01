import React, { useEffect, useRef, useState } from 'react';
import NavBar from './../NavBar';
import axios from 'axios';
import Service from './Service';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    const handleSort = (services) => {
        const sortedServices = services?.sort((a, b) => {
            return parseFloat( a.price) -parseFloat( b.price);
        })

        console.log(sortedServices);

        setServices(sortedServices);

    }

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
        axios.get('https://service-system-reviews-server.vercel.app/services', { withCredentials: true })
            .then(res => {
                setServices(res.data);
                setRealServices(res.data)
            })
    }, [])

    return (
        <div className=' mx-auto'>
            <NavBar></NavBar>

            <Helmet>
                <title>Service Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>


            <div className='flex justify-center gap-4 items-center '>
                <p className=' text-2xl font-bold my-5 text-center'>Search by Category</p>
               

            </div>
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


            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Services;