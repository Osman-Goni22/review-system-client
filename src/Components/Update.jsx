import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import { AuthContext } from './Auth_Provider/AUthProvider';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Update = () => {
    const loadedService = useLoaderData()
  
   const navigate = useNavigate();
    
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

       axios.put(`http://localhost:3000/update/${loadedService._id}`, data)
       .then(res=>{
         if(res.data.modifiedCount>0){
            toast('Service Updated Successfully');
            navigate('/myservices')
         }
       })
   
    }
    return (
        <div>
            <NavBar></NavBar>
            <Helmet>
                <title>Update Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <form className='flex flex-col gap-5 md:w-1/2 lg:w-1/3 mx-auto shadow p-5' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label > Photo</label> <br />
                    <input
                        {...register("photo", { required: true })}
                       defaultValue={loadedService.photo} aria-invalid={errors.firstName ? "true" : "false"} type='url' className='input input-bordered w-full'
                    />
                    {errors.photo?.type === "required" && (
                        <p role="alert">Photo  is required</p>
                    )}
                </div>


                <div>
                    <label >Service Title</label> <br />
                    <input
                        {...register("title", { required: true })}
                        defaultValue={loadedService.title}  aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.title?.type === "required" && (
                        <p role="alert">Title  is required</p>
                    )}
                </div>


                <div>
                    <label >Company Name</label> <br />
                    <input
                        {...register("company", { required: true })}
                        defaultValue={loadedService.company} aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.company?.type === "required" && (
                        <p role="alert">Company  is required</p>
                    )}
                </div>

                <div>
                    <label >Website:</label> <br />
                    <input
                        {...register("website", { required: true })}
                        defaultValue={loadedService.website} aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.website?.type === "required" && (
                        <p role="alert">Company  is required</p>
                    )}
                </div>
                <div>
                    <label >Description:</label> <br />
                    <input
                        {...register("description", { required: true })}
                        defaultValue={loadedService.description} aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.description?.type === "required" && (
                        <p role="alert">Company  is required</p>
                    )}
                </div>
                <div>
                    <label >Category:</label> <br />
                    <input
                        defaultValue={loadedService.category}  {...register("category", { required: true })}
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
                        defaultValue={loadedService.price} aria-invalid={errors.firstName ? "true" : "false"} type='text' className='input input-bordered w-full'
                    />
                    {errors.price?.type === "required" && (
                        <p role="alert">Price is required</p>
                    )}
                </div>

               

                <input className='input input-bordered hover:bg-orange-500 hover:text-white' type="submit" />
            </form>
        </div>
    );
};

export default Update;