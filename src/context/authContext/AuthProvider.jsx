import { useState } from 'react';
import AuthContext from './AuthContext';


const AuthProvider = ({children}) =>{

    const [auth, setAuth] = useState("it works")

    return (
       < AuthContext.Provider value={{
        auth

       }}>
            {children}
       </ AuthContext.Provider>
    )
}

export default AuthProvider;