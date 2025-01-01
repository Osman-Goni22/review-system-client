import React, { useContext } from 'react';
import { MdReviews } from "react-icons/md";
import { NavLink , Link} from 'react-router-dom';
import { AuthContext } from './Components/Auth_Provider/AUthProvider';
import { toast } from 'react-toastify';
import './index.css'
const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const links =<div className='flex gap-5'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='/signin'>Sign In</NavLink>
        <NavLink to='/services'>Services</NavLink>
        {
            user&& <div className='flex gap-5'>
             <NavLink to='/addservice'>Add Service</NavLink>
             <NavLink to={`/myReview`}>My Reviews</NavLink>
             <NavLink to='/myservices'>My Service</NavLink>
            </div>
        }
    </div>
    console.log(user);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            toast('Logged Out successfully');
        })
    }
    return (
        <div className="navbar md:max-w-6xl mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><MdReviews className='text-green-800 text-2xl'></MdReviews></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className='navbar-end'>
              {
                user? <div>
                    <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL} />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                           {user?.displayName}
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a onClick={handleLogOut}>Logout</a></li>
                </ul>
            </div>
                </div>:
               <Link to='/signin'>
                Login
               </Link>
              }
            </div>
        </div>
    );
};

export default NavBar;