import React, { useContext } from 'react';
import NavBar from '../NavBar';
import { AuthContext } from './Auth_Provider/AUthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate()

const {signIn} = useContext(AuthContext)
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
      
        const email= form.email.value;
 
        const password= form.password.value;
        console.log( email, password);
        signIn(email, password)
        .then(res=>{
            console.log(res);
            toast('Logged in Successfully');
            navigate('/');
        })
    }

    return (
      
        
            <div className='max-w-6xl mx-auto'>
                <NavBar></NavBar>
                <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow">
                    <form onSubmit={handleLogin} className="card-body">
                  
    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                     
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    
    }

export default Login;