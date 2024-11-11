import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';



export const AuthContext = React.createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = React.useState(null);
    const [loading,setLoading] = React.useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (CUser) => {
            setUser(CUser);  
            setLoading(false); 
          })
        return unSubscribe;
    },[])
    

    const authInfo = {
        name:'hello',
        createUser,
        signIn,
        user,
        signOutUser,
        loading,
        signInWithGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;