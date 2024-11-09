import {signInWithPopup, GoogleAuthProvider ,signOut,GithubAuthProvider } from "firebase/auth";
import  auth  from "../Firebase/firebase.init";
import { useState } from "react";




const Login = () => {
    
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    

    const  handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then (result => {
            setUser(result.user);
        })
        .catch(error => {
            console.log(error.message);
            setUser(null);
        });

    };
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign out successfully");
            setUser(null);
        }).catch((error) => {
            console.log(error.message);
        });

    };

    const handleGithubLogin = () => {
        signInWithPopup(auth, gitProvider)
        .then (result => {
            setUser(result.user);
        })
        .catch(error => {
            console.log(error.message);
            setUser(null);
        });
    }

    return (
        <div>
            <h1>Login</h1>
            {
                user ? <button onClick={handleSignOut} className="btn">Sign Out</button> : <div>
                    <button onClick={handleGoogleLogin} className="btn">login with google</button>
                    <button onClick={handleGithubLogin} className="btn">login with github</button>
                </div>
            }


            {
                user && <div>
                    <h2>{user.displayName}</h2>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />  
                </div>
            }
        </div>
    );
};

export default Login;