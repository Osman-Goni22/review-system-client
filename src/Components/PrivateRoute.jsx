import React, { useContext } from 'react';
import { AuthContext } from './Auth_Provider/AUthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loading, user} =useContext(AuthContext)

    if(loading){
        return <h1>Loading................</h1>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to='/signin'></Navigate>
    );
};

export default PrivateRoute;