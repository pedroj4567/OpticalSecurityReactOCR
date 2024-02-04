import { useState } from 'react';
import FamilyContext from './FamilyContext'
import useAxios from '../../utils/axios/useAxios';

const FamilyProvider = ({children}) =>{

    const [family, setFamily] = useState("it works")
    const {createData, data: dataPost, loading: loadingPost, error: errorPost} = useAxios()
    const {updateData, data: dataPatch, loading: loadingPatch, error: errorPatch} = useAxios()
    const {deleteData, data: dataDelete, loading: loadingDelete, error: errorDelete} = useAxios()
    const {fetchData: fetchDataSingle, data: dataSingle, loading: loadingSingle, error: errorSingle} = useAxios()
    const {fetchData, data, loading, error} = useAxios()

    return (
       < FamilyContext.Provider value={{
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
       </ FamilyContext.Provider>
    )
}

export { FamilyProvider, FamilyContext };