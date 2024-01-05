import { useEffect } from "react";
import ErrorMessage from "../../components/messages/ErrorMessage";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import Spinner from "../../components/Spinner/Spinner";

const VisitsPage = () => {

  const usersData = [
    // {
    //   owner: "Jose Perez",
    //   plate: "3lk344",
    //   vehicle: "Car",
    //   color_vehicle: "#ffffff",
    //   model: "Fiat one"
    // },
    // {
    //   owner: "Jose Perez",
    //   plate: "3lk344",
    //   vehicle: "Car",
    //   color_vehicle: "#ffffff",
    //   model: "Fiat one"
    // },
    // {
    //   owner: "Jose Perez",
    //   plate: "3lk344",
    //   vehicle: "Car",
    //   color_vehicle: "#ffffff",
    //   model: "Fiat one"
    // }
  ]

  const { isLoading, completed, hasError, closeError, simulateRequest } = useSimulatedRequest();

  useEffect(() => {
    simulateRequest()
  }, [])

  return (
    <section className="w-[68%] mx-auto  border">
      <h1 className="py-5 text-3xl font-bold">Visitas</h1>
        {hasError && <ErrorMessage msg={`Error message`} close={closeError}/>}

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <tbody>
                    <tr className="w-full h-[300] flex justify-center items-center">
                      <h1></h1>
                    </tr>
                  </tbody>
                  : completed && hasError == false && usersData.length > 0 &&
                  
                    usersData.map((user) =>{
                      return(
                        <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                    </tbody>
                      )
                    })
                  
                }
               
                  
          </table>
      </div>
    </section>
  )
}
 
export default VisitsPage
