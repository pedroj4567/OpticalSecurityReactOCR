import { useState } from 'react';
import VisitsContext from './VisitsContext';
import useAxios from '../../utils/axios/useAxios';


const VisitsProvider = ({children}) =>{

    const [visit, setVisit] = useState("it works")
    const {createData, data, loading, error} = useAxios()

    return (
       <VisitsContext.Provider value={{
        visit

       }}>
            {children}
       </VisitsContext.Provider>
    )
}

export { VisitsProvider, VisitsContext };