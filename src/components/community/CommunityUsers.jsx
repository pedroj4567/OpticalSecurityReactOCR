import { useEffect } from "react";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import ErrorMessage from "../messages/ErrorMessage";
import Button from "../button/Button";
import SpinnerDark from "../Spinner/SpinnerDark";
import { FaEdit, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';


const CommunityUsers = ({fetchData, response, loading, error}) => {

  console.log(response)
    const usersData = [
      {
       id: 1,
       email: "valero@gmail.com",
       password: "glhlhl"
      },
      {
        id: 2,
        email: "valero@gmail.com",
        password: "glhlhl"
       },
       {
        id: 3,
        email: "valero@gmail.com",
        password: "glhlhl"
       },
    ]
  
    const { isLoading, completed, hasError, closeError, simulateRequest } = useSimulatedRequest();
  
    useEffect(() => {
      simulateRequest()
    }, [])
  
    return (
      <section className="w-[100%] mt-10 flex flex-col">
        {/* <h1 className="py-5 text-3xl font-bold">Visitas</h1> */}
          {/* {hasError && <ErrorMessage msg={`Error message`} btnMsg="Agregar cómo visita" close={closeError}/>} */}
          <button className="font-medium bg-[#522b5b] hover:bg-purple-600 text-white flex items-center self-end p-1 rounded shadow-sm mb-2">
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
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Password
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
                            usersData.map((user) =>{
                                return(
                                  <>
                                    <tr class="bg-white border-b text-gray-700 dark:border-purple-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {user.id}
                                    </th>
                                    <td class="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.password}
                                    </td>
                                   
                                    <td class="px-6 py-4">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center">
                                        <FaEdit className="w-4 h-4 mr-2" />
                                          Edit
                                      </button>
                                      <button className="font-medium text-red-600 dark:text-red-500 hover:underline flex items-center">
                                          <FaTrashAlt className="w-4 h-4 mr-2" />
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