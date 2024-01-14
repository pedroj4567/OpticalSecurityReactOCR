import { useEffect, useState } from "react";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import ErrorMessage from "../messages/ErrorMessage";
import Button from "../button/Button";
import SpinnerDark from "../Spinner/SpinnerDark";
import useAxios from "../../utils/hooks/useAxios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AddVisitForm } from "../startPage/AddVisit";

const TableVisits = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [families, setFamilies] = useState([])
  const [currentUserId, setCurrentUserId] = useState(null)
  const [plate, setPlate] = useState("")

  const { response, loading, error, fetchData } = useAxios({
    method: 'get',
    url: '/visit',
  });
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
  function openEditForm(id, plate){
    setPlate(plate)
    setCurrentUserId(id)
    setIsFormOpen(prev => !prev)
  }
  const fetchDataFamilies = async () => {
    try {
     
      const request = await fetch(baseURL,{})
      const data = await request.json();

      return data;
    } catch (error) {
      console.log(error)
    }
   
  };

  async function toggleForm() {
      setIsFormOpen(prev => !prev);
      const { families } = await fetchDataFamilies();
      setFamilies([...families])
    }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(response)
  }, [response])
  
 
  
  
    return (
      <section className="w-[90%] mx-auto mt-10  ">
        {/* <h1 className="py-5 text-3xl font-bold">Visitas</h1> */}
          {/* {hasError && <ErrorMessage msg={`Error message`} btnMsg="Agregar cómo visita" close={closeError}/>} */}
          {isFormOpen && <AddVisitForm toggleForm={toggleForm} families={families}  plate={plate} id={currentUserId} />}

  
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg border-purple-600">
            <table class="w-full text-sm text-left rtl:text-right border-[#522b5b] text-white ">
                <thead class="text-xs text-slate-100 uppercase  bg-[#522b5b] ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Visitante
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Vehículo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Placa
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Modelo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fecha
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
                    : response &&
                    <tbody className="border-purple-600">
                        {
                            response.visits.map((user) =>{

                              const dateAdmission = new Date(user.date_admission);
                              const formattedDate = `${dateAdmission.getFullYear()}-${dateAdmission.getMonth() + 1}-${dateAdmission.getDate()}`;

                                return(
                                  <>
                                    <tr class="bg-white border-b text-gray-700 dark:border-purple-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {user.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {user.model_vehicle}
                                    </td>
                                    <td class="px-6 py-4 font-bold">
                                        {user.license_plate_number}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.color_vehicle}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.brand_vehicle}
                                    </td>
                                    <td class="px-6 py-4">
                                        {formattedDate}
                                    </td>
                                    <td class="px-6 py-4 flex items-center gap-3">
                                    <button onClick={() => openEditForm(user.uuid, user.licence_plate_number)} className="font-medium bg-blue-600 p-1 rounded text-white hover:bg-blue-400 flex items-center">
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
   
  export default TableVisits
  