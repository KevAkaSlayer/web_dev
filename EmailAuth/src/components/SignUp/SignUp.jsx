import React from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase.init';
import { useState } from 'react';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [error,setError]  = useState('');
    const [success,setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        const email = e.target.name.value;
        const password = e.target.password.value;
        console.log(email,password)
        setError('');
        setSuccess(false);

        if(password.length < 6){
            setError('Password must be at least 6 characters');
            return;
        }

        createUserWithEmailAndPassword (auth,email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
            setSuccess(true);

            sendEmailVerification(auth.currentUser)
            .then (()=> {
                
            })

        })
        .catch(e => {
            console.log(e);
            setError(e.message);
            setSuccess(false);
        })


    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h5 className="text-3xl font-bold ml-4 p-4">Sign up!</h5>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="name" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text':'password'} name='password' placeholder="password" className="input input-bordered" required />
                            <button onClick={()=>setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 top-12'>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p>Already have an account <Link to='/login'>login</Link></p>
                </div>
            </div>
            {
                error && <div className="alert alert-error mt-4">
                    <div className="flex-1">
                        <label>{error}</label>
                    </div>
                </div>
            }
            {
                success && <div className="alert alert-success mt-4">
                    <div className="flex-1">
                        <label>Success</label>
                    </div>
                </div>
            }
        </div>
    );
};

export default SignUp;