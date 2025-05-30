import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {
    const {signIn , signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signIn(email,password)
        .then((userCredential) => {
            console.log(userCredential);
            e.target.reset();
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }


    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
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
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name= "password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <p className='ml-4 mb-4 '>New to this website? please <Link to='/register' className='text-blue-600'>Register</Link></p>
                    <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;