import React, { useContext } from 'react';
import NavBar from '../NavBar';
import { useForm } from "react-hook-form"
import moment from 'moment'
import { AuthContext } from './Auth_Provider/AUthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from './Footer';

const AddService = () => {

    const {user} = useContext(AuthContext)
    
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) =>{
        console.log(data)
    
        
      

       let now = moment().format('LLLL');
       
       data.now=now;
       console.log(user);
       data.addedBy=user.email
       console.log(data);

       axios.post('http://localhost:3000/services', data)
       .then(res=>{
        console.log(res.data);
        toast('service added successfully');
       })
       .catch(err=>{
        toast('error occurred')
       })
   
    }

    /*
       Service Image
    Service Title
    Company Name
    Website
    Description
    Category
    Price
    Added date (Not as input)
    userEmail (from auth)
    
    */


    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <h2 className='text-center font-bold'>Add Service</h2>
            <form className='flex flex-col gap-5 md:w-1/2 lg:w-1/3 mx-auto shadow p-5' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label > Photo</label> <br />
                    <input
                        {...register("photo", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"} type='url' className='input input-bordered w-full'
                    />
                    {errors.photo?.type === "required" && (
                        <p role="alert">Photo  is required</p>
                    )}
                </div>


                <div>
                    <label >Service Title</label> <br />
                    <input
                        {...register("title", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.title?.type === "required" && (
                        <p role="alert">Title  is required</p>
                    )}
                </div>


                <div>
                    <label >Company Name</label> <br />
                    <input
                        {...register("company", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.company?.type === "required" && (
                        <p role="alert">Company  is required</p>
                    )}
                </div>

                <div>
                    <label >Website:</label> <br />
                    <input
                        {...register("website", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.website?.type === "required" && (
                        <p role="alert">Company  is required</p>
                    )}
                </div>
                <div>
                    <label >Description:</label> <br />
                    <input
                        {...register("description", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.description?.type === "required" && (
                        <p role="alert">Company  is required</p>
                    )}
                </div>
                <div>
                    <label >Category:</label> <br />
                    <input
                        {...register("category", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.price?.type === "required" && (
                        <p role="alert">Company  is required</p>
                    )}
                </div>
                <div>
                    <label >Price:</label> <br />
                    <input
                        {...register("price", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.price?.type === "required" && (
                        <p role="alert">Price is required</p>
                    )}
                </div>

               

                <input className='input input-bordered hover:bg-orange-500 hover:text-white' type="submit" />
            </form>

            <Footer></Footer>
        </div>

    )


};

export default AddService;