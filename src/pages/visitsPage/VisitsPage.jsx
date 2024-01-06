import { useEffect } from "react";
import ErrorMessage from "../../components/messages/ErrorMessage";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import Spinner from "../../components/Spinner/Spinner";
import TableVisits from "../../components/table/TableVisits";
import SpinnerDark from "../../components/Spinner/SpinnerDark.jsx";

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
    <section className="w-[68%] mx-auto h-screen border">
      <main>
        {isLoading ?
        <div className="w-full h-screen flex justify-center items-center">
          <SpinnerDark />
        </div>
        :
        <div>
             <h1 className="py-5 text-3xl font-bold">Visitas</h1>
            <TableVisits />
        </div>}
        
       
      </main>
    </section>
  )
}
 
export default VisitsPage
