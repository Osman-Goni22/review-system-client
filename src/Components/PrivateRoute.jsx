import React, { useContext } from 'react';
import { AuthContext } from './Auth_Provider/AUthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext)

    const location = useLocation();

    if (loading) {
        return <div className='w-[400px] mx-auto mt-20'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/signin'></Navigate>
    );
};

export default PrivateRoute;