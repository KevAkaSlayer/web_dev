import React from 'react';
import { createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/.firebase.config';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';





export const AuthContext = React.createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = React.useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect (()=>{
    const unSubscribe = onAuthStateChanged(auth,CurrentUser => {
            setUser(CurrentUser);
        });
        return unSubscribe
    },[]);

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;