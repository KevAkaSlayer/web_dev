import React from 'react';


export const AuthContext = React.createContext(null);


const AuthProvider = ({children}) => {
    const authInfo = {
        name:'hello'
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;