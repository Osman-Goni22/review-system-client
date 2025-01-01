import React, { useContext } from 'react';
import NavBar from '../NavBar';
import { toast } from 'react-toastify';
import { AuthContext } from './Auth_Provider/AUthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from './Firebase_init/Firebase_init';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const Register = () => {
    const { signIn, createUser } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast("Invalid password");
            return;
        }
        else {
            createUser(email, password)
                .then(res => {
                    console.log(res.user);
                    toast("User registered successfully");
                    const profile = {
                        displayName: name,
                        photoURL: photo

                    }
                    const user = auth.currentUser;
                    updateProfile(user, profile)
                        .then(() => {
                            console.log('User profile updated');
                        })
                }
                )
        }
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an account? <Link to='/signin' className='text-red-500'>Login</Link></p>
                </form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Register;