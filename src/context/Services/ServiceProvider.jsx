import { useState } from 'react';
import ServiceContext from './ServiceContext'
import AuthContext from '../authContext/AuthContext';
import FamilyContext from '../familyContext/FamilyContext';

const ServiceProvider = ({children}) =>{

    const [text, setText] = useState("it works")

    return (
        <AuthContext.Provider>
        <FamilyContext.Provider >
        <ServiceContext.Provider value={{ text }}>
          {children}
        </ServiceContext.Provider>
      </FamilyContext.Provider>
    </AuthContext.Provider>
      );
}

export default ServiceProvider;