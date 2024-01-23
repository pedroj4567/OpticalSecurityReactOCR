import { useEffect, useState } from "react";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import ErrorMessage from "../messages/ErrorMessage";
import Button from "../button/Button";
import SpinnerDark from "../Spinner/SpinnerDark";
import { FaEdit, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { UserCommunityForm } from "./UserCommunityForm";
import axios from "axios";


const CommunityUsers = ({fetchData, response, loading, error}) => {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const [currentUserId, setCurrentUserId] = useState(null)

  const [isLoadingCreate, setIsLoadingCreate] = useState(false)
  const [responseCreate, setResponseCreate] = useState()
  const [errorCreate, setErrorCreate] = useState()

  const [isLoadingDelete, setIsLoadingDelete] = useState(false)
  const [responseDelete, setResponseDelete] = useState()
  const [errorDelete, setErrorDelete] = useState()

  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  const [responseUpdate, setResponseUpdate] = useState()
  const [errorUpdate, setErrorUpdate] = useState()

  const [isLoadingPatch, setIsLoadingPatch] = useState(false)
  const [responsePatch, setResponsePatch] = useState()
  const [errorPatch, setErrorPatch] = useState()

  useEffect(() => {
    fetchData()
  }, []);
  useEffect(() => {
    console.log(response)
  }, [response]);

  function toggleForm() {
    setIsFormOpen(prev => !prev)
  }
  function closeDeleteModal(){
    setIsDeleteOpen(prev => !prev)
    setCurrentUserId(null)
  }
  function openDeleteModal(id){
    setCurrentUserId(id)
    setIsDeleteOpen(prev => !prev)
  }
  function openEditForm(id){
    setCurrentUserId(id)
    setIsFormOpen(prev => !prev)
  }

  const baseURL = "http://localhost:3200/api/v1/person"
  // const baseURL = "https://558f-186-92-40-5.ngrok-free.app/api/v1/person"

  const postMethod = async (body) => {
    console.log("executing")
    console.log(body)
    try {
      setIsLoadingCreate(true)
      const { data } = await axios
      .post(`${baseURL}`, {
        dataUser: body
      })
      console.log("hola", data)
      setResponseCreate(data)
    } catch (error) {
      setErrorCreate(error)
    }finally{
      setIsLoadingCreate(false)
    }
   
  };

    const deleteMethod = async (id) => {
      try {
        setIsLoadingDelete(true)
        const { data } = await axios
        .post(`${baseURL}/${id}`)
        console.log("hola", data)
        setResponseDelete(data)
      } catch (error) {
        setErrorDelete(error)
      }finally{
        setIsLoadingDelete(false)
      }
     
    };

    const updateMethod = async (id, body) => {
      try {
        setIsLoadingUpdate(true)
        const { data } = await axios
        .post(`${baseURL}/${id}`, body)
        console.log("hola", data)
        setResponseUpdate(data)
      } catch (error) {
        setErrorDelete(error)
      }finally{
        setIsLoadingUpdate(false)
      }
     
    };

    const patchMethod = async (id, body) => {
      try {
        setIsLoadingPatch(true)
        const { data } = await axios
        .post(`${baseURL}/${id}`, body)
        console.log("hola", data)
        setResponsePatch(data)
      } catch (error) {
        setErrorDelete(error)
      }finally{
        setIsLoadingPatch(false)
      }
     
    };

    useEffect(() => {
      console.log(responseCreate)
    }, [responseCreate])

  
 
  
    const { isLoading, completed, hasError, closeError, simulateRequest } = useSimulatedRequest();
  
    useEffect(() => {
      simulateRequest()
    }, [])
  
    return (
      <section className="w-[100%] mt-10 flex flex-col">
        {isFormOpen && <UserCommunityForm setId={setCurrentUserId} id={currentUserId} toggleForm={toggleForm} edit={updateMethod} patch={patchMethod} create={postMethod} />}
        {isDeleteOpen && <ErrorMessage msg={"¿Estás seguro que quieres eliminar?"} btnMsg={"Eliminar"} close={closeDeleteModal} action={deleteMethod} id={currentUserId}/>}

        {/* <h1 className="py-5 text-3xl font-bold">Visitas</h1> */}
          {/* {hasError && <ErrorMessage msg={`Error message`} btnMsg="Agregar cómo visita" close={closeError}/>} */}
          <button onClick={toggleForm} className="font-medium bg-[#522b5b] hover:bg-purple-600 text-white flex items-center self-end p-1 rounded shadow-sm mb-2">
              Create
              <FaPlusCircle className="w-4 h-4 ml-2" />
          </button>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg border-purple-600">
            <table class="w-full text-sm text-left rtl:text-right border-[#522b5b] text-white ">
                <thead class="text-xs text-slate-100 uppercase  bg-[#522b5b] ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            telefono
                        </th>
                        <th scope="col" class="px-6 py-3">
                            cedula
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Asignado a familia
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
               
                  {
                    isLoading ? 
                    <div class="px-6 py-20 w-full  flex justify-center items-center">
                                    <SpinnerDark />  
                    </div>
                    : 
                    <tbody className="border-purple-600">
                        {
                            response?.people.map((user) =>{
                                return(
                                  <>
                                    <tr class="bg-white border-b text-gray-700 dark:border-purple-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {user.id}
                                    </th>
                                    <td class="px-6 py-4">
                                        `${user.name} ${user.lastname}`
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.n_phone}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.identification}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.isFamily}
                                    </td>
                                    <td class="px-6 py-4 flex items-center gap-3">
                                    <button onClick={() => openEditForm(user.id)} className="font-medium bg-blue-600 p-1 rounded text-white hover:bg-blue-400 flex items-center">
                                        <FaEdit className="w-4 h-4 mr-2" />
                                          Edit
                                      </button>
                                      <button onClick={() => openDeleteModal(user.id)} className="font-medium p-1 rounded bg-red-600 text-white  hover:bg-red-400 flex items-center">
                                          <FaTrashAlt className="w-4 h-4 mr-2 " />
                                          Delete
                                      </button>
                                    </td>
                                    </tr>
                                </>
                                )
                              })
                        }
                    </tbody>
                    
                 
                    
                  }
                 
                    
            </table>
        </div>
      </section>
    )
  }
   
  export default CommunityUsers