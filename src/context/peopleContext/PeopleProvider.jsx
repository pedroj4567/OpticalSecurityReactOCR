import { useState } from 'react';
import PeopleContext from './PeopleContext';


const PeopleProvider = ({children}) =>{

    const [people, setPeople] = useState("it works")

    return (
       <PeopleContext.Provider value={{
        people

       }}>
            {children}
       </PeopleContext.Provider>
    )
}

export { PeopleProvider, PeopleContext };