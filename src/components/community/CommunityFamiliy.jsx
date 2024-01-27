import { useEffect, useState } from "react";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import ErrorMessage from "../messages/ErrorMessage";
import Button from "../button/Button";
import SpinnerDark from "../Spinner/SpinnerDark";
import { FaEdit, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { FamilyCommunityForm } from "./FamilyCommunityForm";
import { FamilyCommunityFormStepTwo } from "./FamilyCommunityFormStepTwo";
import axios from "axios";



const CommunityFamily = ({fetchData, response, loading, error}) => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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
    }, [responseCreate, responseDelete, responsePatch, responseUpdate]);

  // function toggleForm() {
  //   setIsFormOpen(prev => !prev)
  // }
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
  function closeEditForm(id){
    setCurrentUserId(null)
    setIsFormOpen(prev => !prev)
  }
  const baseURL = "http://localhost:3200/api/v1/family"
  // const baseURL = "https://558f-186-92-40-5.ngrok-free.app/api/v1/family"

  const postMethod = async (body) => {
    console.log(body)
    try {
      setIsLoadingCreate(true)
      const { data } = await axios
      .post(`${baseURL}`, {
        data: {
          name: body.name,
          n_address: body.direccion,
          n_house: body.casa,
          phone: body.telefono,
          personIds: body.selectedIds,
          cars: body.cars
        }
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
        .delete(`${baseURL}/${id}`)
        console.log("hola", data)
        setResponseDelete(data)
      } catch (error) {
        console.log("delete error", error)
        setErrorDelete(error)
      }finally{
        setIsLoadingDelete(false)
      }
     
    };

    const updateMethod = async (id, body) => {
      try {
        setIsLoadingDelete(true)
        const { data } = await axios
        .put(`${baseURL}/${id}`, {
          data: {
            name: body.name,
            n_address: body.direccion,
            n_house: body.casa,
            phone: body.telefono,
            personIds: body.selectedIds,
            cars: body.cars
          }
         
        })
        console.log("hola", data)
        setResponseDelete(data)
      } catch (error) {
        setErrorDelete(error)
      }finally{
        setIsLoadingDelete(false)
      }
     
    };

    const patchMethod = async (id, body) => {
      try {
        setIsLoadingPatch(true)
        console.log("body", body)
        const { data } = await axios
        .patch(`${baseURL}/${id}`, {
          newData: {
            name: body.name,
            n_address: body.direccion,
            n_house: body.casa,
            phone: body.telefono,
            personIds: body.selectedIds,
            cars: body.cars
          }
         
        })
        console.log("hola", data)
        setResponsePatch(data)
      } catch (error) {
        setErrorDelete(error)
      }finally{
        setIsLoadingPatch(false)
      }
     
    };

    useEffect(() => {
        console.log(response, error, loading)

    }, [response, error])
  
    const fetchDataUsers = async () => {
      try {
       
        const request = await fetch("http://localhost:3200/api/v1/person",{})
        const data = await request.json();
  
        return data;
      } catch (error) {
        console.log(error)
      }
     
    };

    async function usersSelect() {
      const { people } = await fetchDataUsers();
        setUsers([...people])
    }
  
    async function toggleForm() {
        setIsFormOpen(prev => !prev);
        setCurrentUserId(null)
        const { people } = await fetchDataUsers();
        setUsers([...people])
      }
  
    return (
      <section className="w-[100%] mt-10 flex flex-col">
      
        {isDeleteOpen && <ErrorMessage msg={"¿Estás seguro que quieres eliminar?"} btnMsg={"Eliminar"} close={closeDeleteModal} action={deleteMethod} id={currentUserId}/>}
        {isFormOpen && <FamilyCommunityForm users={users} usersSelect={usersSelect} setId={setCurrentUserId} id={currentUserId} toggleForm={toggleForm} edit={updateMethod} patch={patchMethod} create={postMethod} />}
          <button onClick={toggleForm}  className="font-medium bg-[#522b5b] hover:bg-purple-600 text-white flex items-center self-end p-1 rounded shadow-sm mb-2">
              Crear
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
                            Familia
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dirección
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Casa n°
                        </th>
                        <th scope="col" class="px-6 py-3">
                            teléfono
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
               
                  {
                    loading ? 
                    <div class="px-6 py-20 w-full  flex justify-center items-center">
                                    <SpinnerDark />  
                    </div>
                    : 
                    <tbody className="border-purple-600">
                        {
                            response?.families?.map((user) =>{
                                return(
                                  <>
                                    <tr class="bg-white border-b text-gray-700 dark:border-purple-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {user.id}
                                    </th>
                                    <td class="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.n_address}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.n_house}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.phone}
                                    </td>
                                   
                                    <td class="px-6 py-4 flex items-center gap-3">
                                      <button onClick={() => openEditForm(user.uuid)} className="font-medium bg-blue-600 p-1 rounded text-white hover:bg-blue-400 flex items-center">
                                        <FaEdit className="w-4 h-4 mr-2" />
                                          Editar
                                      </button>
                                      <button onClick={() => openDeleteModal(user.uuid)} className="font-medium p-1 rounded bg-red-600 text-white  hover:bg-red-400 flex items-center">
                                          <FaTrashAlt className="w-4 h-4 mr-2 " />
                                          Borrar
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
   
  export default CommunityFamily