import ServiceContext from './ServiceContext'

const ServiceProvider = ({children}) =>{

    







    return (
       < ServiceContext.Provider value={{

       }}>
            {children}
       </ ServiceContext.Provider>
    )
}

export default ServiceProvider;