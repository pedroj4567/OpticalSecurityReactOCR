import { useEffect } from "react";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import ErrorMessage from "../messages/ErrorMessage";
import Button from "../button/Button";
import SpinnerDark from "../Spinner/SpinnerDark";

const TableVisits = () => {

    const usersData = [
      {
        owner: "Jose Perez",
        plate: "3lk344",
        vehicle: "Car",
        color_vehicle: "#ffffff",
        model: "Fiat one"
      },
      {
        owner: "Jose Perez",
        plate: "3lk344",
        vehicle: "Car",
        color_vehicle: "#ffffff",
        model: "Fiat one"
      },
      {
        owner: "Jose Perez",
        plate: "3lk344",
        vehicle: "Car",
        color_vehicle: "#ffffff",
        model: "Fiat one"
      }
    ]
  
    const { isLoading, completed, hasError, closeError, simulateRequest } = useSimulatedRequest();
  
    useEffect(() => {
      simulateRequest()
    }, [])
  
    return (
      <section className="w-[90%] mx-auto  ">
        <h1 className="py-5 text-3xl font-bold">Visitas</h1>
          {/* {hasError && <ErrorMessage msg={`Error message`} btnMsg="Agregar cómo visita" close={closeError}/>} */}
  
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
                            Acciones
                        </th>
                    </tr>
                </thead>
               
                  {
                    isLoading ? 
                    <div class="px-6 py-20 w-full  flex justify-center items-center">
                                    <SpinnerDark />  
                    </div>
                    : completed && hasError == false && usersData.length > 0 &&
                    <tbody className="border-purple-600">
                        {
                            usersData.map((user) =>{
                                return(
                                  <>
                                    <tr class="bg-white border-b text-gray-700 dark:border-purple-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {user.owner}
                                    </th>
                                    <td class="px-6 py-4">
                                        {user.vehicle}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.plate}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.color_vehicle}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.model}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                    </tr>
                                </>
                                )
                              })
                        }
                    </tbody>
                     ? completed && hasError == true : 
                     <div class="px-6 py-20 w-full  flex justify-center items-center">
                        <button className="border w-[60%] h-[45px] rounded-lg bg-[#522b5b] hover:bg-[#6d3978] transition-all text-[#FFFFFF]">Error, Reload</button> 
                    </div>
                 
                    
                  }
                 
                    
            </table>
        </div>
      </section>
    )
  }
   
  export default TableVisits
  