import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        signIn(email,password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }


    return (
        <div>
            <NavBar />
            <h2 className='text-3xl font-bold text-center'>Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto mb-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-ghost">Login</button>
                </div>
            </form>
            <p className='text-center'>Don't have an account?<Link to='/register' className='text-md font-bold'>Register</Link> </p>
        </div>
    );
};

export default Login;