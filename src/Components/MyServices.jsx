import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Auth_Provider/AUthProvider';
import Service from './Service';
import NavBar from '../NavBar';
import Swal from 'sweetalert2'
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/myservices?email=${user.email}`, {withCredentials:true})
            .then(res => {
                setServices(res.data);
            
            })
    }, [user.email])

    const handleSearch = () => {
        const searchValue = document.getElementById('search').value;
        const regex = new RegExp(searchValue, 'i')
        const results = services.filter(service => regex.test(service.title))
       
        setServices(results)
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:3000/service/${id}`, {withCredentials:true})
                    .then(() => {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        axios.get(`http://localhost:3000/myservices?email=${user.email}`, {withCredentials:true})
                            .then(res => {
                                setServices(res.data);
                               
                            })


                    })


            }
        });
    }

    return (
        <div className=' mx-auto'>
            <NavBar></NavBar>

            <Helmet>
                <title>MyServices page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <section className='mx-auto my-5 md:w-1/3 lg:w-1/4'>
                <div className="join">
                    <input id='search' className="input input-bordered join-item" placeholder="Title" />
                    <button onClick={handleSearch} className="btn join-item rounded-r-full">Search</button>
                </div>
            </section>

            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Title</th>

                                <th>Company</th>
                                <th>Website</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                services.map((service, indx) => <tr>
                                    <th>
                                        {indx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={service.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{service.title}</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {service.company}


                                    </td>
                                    <td>
                                        {service.website}


                                    </td>
                                    <td>
                                        ${service.price}


                                    </td>
                                    <td>
                                        <Link to={`/update/${service._id}`} className='btn'>Update</Link>


                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(`${service._id}`)} className='btn'>Delete</button>


                                    </td>

                                </tr>)
                            }




                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyServices;