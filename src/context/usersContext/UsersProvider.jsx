import { useState } from 'react';
import UsersContext from './UsersContext';


const UsersProvider = ({children}) =>{

    const [users, setUsers] = useState("it works")

    return (
       <UsersContext.Provider value={{
        users

       }}>
            {children}
       </UsersContext.Provider>
    )
}

export { UsersProvider, UsersContext };