import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <img src="https://i.ibb.co.com/9TbfDcr/vector-illustration-man-running-his-goal-cartoon-scene-with-confident-male-leader-suit-briefcase-sil.jpg" alt="" />
            <NavLink to='/' className='btn bg-cyan-800 text-white mt-2'>Go Back</NavLink>
        </div>
    );
};

export default NotFound;