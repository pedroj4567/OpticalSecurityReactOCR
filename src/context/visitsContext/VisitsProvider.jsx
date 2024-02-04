import { useState } from 'react';
import VisitsContext from './VisitsContext';
import useAxios from '../../utils/axios/useAxios';


const VisitsProvider = ({children}) =>{

    const [visit, setVisit] = useState("it works")
    const {createData, data: dataPost, loading: loadingPost, error: errorPost} = useAxios()
    const {updateData, data: dataPatch, loading: loadingPatch, error: errorPatch} = useAxios()
    const {deleteData, data: dataDelete, loading: loadingDelete, error: errorDelete} = useAxios()
    const {fetchData: fetchDataSingle, data: dataSingle, loading: loadingSingle, error: errorSingle} = useAxios()
    const {fetchData, data, loading, error} = useAxios()

    return (
       <VisitsContext.Provider value={{
        data,
        dataPost,
        dataDelete,
        dataPatch,
        dataSingle,
        loading,
        loadingPost,
        loadingDelete,
        loadingPatch,
        loadingSingle,
        error,
        errorPost,
        errorDelete,
        errorPatch,
        errorSingle,
        createData,
        updateData,
        deleteData,
        fetchDataSingle,
        fetchData
       }}>
            {children}
       </VisitsContext.Provider>
    )
}

export { VisitsProvider, VisitsContext };