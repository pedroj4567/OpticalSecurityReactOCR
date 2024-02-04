import { useState } from 'react';
import FamilyContext from './FamilyContext'

const FamilyProvider = ({children}) =>{

    const [family, setFamily] = useState("it works")

    return (
       < FamilyContext.Provider value={{
        family

       }}>
            {children}
       </ FamilyContext.Provider>
    )
}

export { FamilyProvider, FamilyContext };