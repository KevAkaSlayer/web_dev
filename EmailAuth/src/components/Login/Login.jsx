import { signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase.init';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
    const emailRef = useRef();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.name.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                if(!userCredential.user.emailVerified){
                    setError('Please verify your email');
                    return;
                }
                else{
                    console.log('Email verified');
                }

            })
            .catch(error => {
                console.log(error);
            })
    }
    const forgetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            setError('Please enter a valid email');
            return;
        }
        else {
            sendPasswordResetEmail(auth,email)
            .then(() => {
                alert('Password reset email sent');
            })
            .catch(e => {
                console.log(e);
            })
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='name' ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label onClick={forgetPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>New to this platform please <Link to='/signUp'>signUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;