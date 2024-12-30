import React, { useContext } from 'react';
import NavBar from '../NavBar';
import { AuthContext } from './Auth_Provider/AUthProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { auth } from './Firebase_init/Firebase_init';
const Login = () => {
    const navigate = useNavigate()


    const {signIn, socialLogin} = useContext(AuthContext)
    const handleSocialLogin = ()=>{
       socialLogin()
       .then(res=>{
        console.log(res);
        const profile= {
                        displayName:res.user.displayName,
                        photoURL:res.user.photoURL
                        
                    }
                  const user = auth.currentUser;
                    updateProfile(user, profile)
                    .then(()=>{
                    console.log('User profile updated');
                    toast('Logged in Successfully');
                    navigate('/');

                    })
                    }
                  )
                }
       
    

    
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
                        <p>New to this website? <Link to='/signup' className='text-red-500'>Register</Link></p>
                        <p className='btn text-center' onClick={handleSocialLogin}>LoginWithGoogle</p>
                    </form>
                </div>
            </div>
        );
    
    }

export default Login;