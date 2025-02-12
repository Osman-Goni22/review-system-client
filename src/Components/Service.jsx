import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
const Service = ({ service }) => {
    return (
        <motion.div

            animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1000 }
            }}

            whileTap={{ scale: 0.96 }}


        >


            <div className="h-96 bg-base-100 shadow-xl flex flex-col">
                <figure>
                    <img
                        src={service.photo}
                        alt="Shoes" className='h-48 w-full' />
                </figure>
                <div className="flex flex-col flex-1">
                    <h2 className="text-2xl font-bold flex justify-between items-center">

                        {
                            service.title
                        }
                        <div className="badge badge-secondary">{service.price}$</div>
                    </h2>
                    <p className='flex-grow'>{service.description}</p>

                    <div className="flex justify-center mt-auto py-2 ">
                        <NavLink className='btn bg-secondary ' to={`/details/${service._id}`}>See Details</NavLink>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Service;