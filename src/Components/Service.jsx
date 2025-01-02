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
        
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
        
        >

        
        <div className="card bg-base-100 shadow relative hover:-z-40">
            <figure>
                <img
                    src={service.photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
            
                 {
                    service.title
                 }
                    <div className="badge badge-secondary">{service.price}$</div>
                </h2>
                <p>{service.description}</p>
                <div className="card-actions justify-center">
                    <NavLink className='btn bg-secondary' to={`/details/${service._id}`}>See Details</NavLink>
                </div>
            </div>
        </div>

        </motion.div>
    );
};

export default Service;