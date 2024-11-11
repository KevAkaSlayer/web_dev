import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';



export const AuthContext = React.createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser] = React.useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (CUser) => {
            setUser(CUser);   
          })
        return unSubscribe;
    },[])
    

    const authInfo = {
        name:'hello',
        createUser,
        signIn,
        user,
        signOutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;