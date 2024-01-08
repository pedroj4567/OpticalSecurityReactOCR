import { useEffect } from "react";
import ErrorMessage from "../../components/messages/ErrorMessage";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import Spinner from "../../components/Spinner/Spinner";
import TableVisits from "../../components/table/TableVisits";
import SpinnerDark from "../../components/Spinner/SpinnerDark.jsx";
import useAxios from "../../utils/hooks/useAxios.jsx";

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

  
  const { response, loading, error } = useAxios({
    method: 'post',
    url: '/recognition/upload',
    headers: JSON.stringify({ accept: '*/*' }),
    body: JSON.stringify({
        upload: 'Sample text',
    }),
    // body: JSON.stringify({
    //     upload: 'Sample text',
    // }),
});
useEffect(() => {
    console.log(response, loading, error)
}, [response, loading, error])

  useEffect(() => {
    simulateRequest()
  }, [])

  return (
    <section className="w-[68%] mx-auto h-screen">
      <main>
        {isLoading ?
        <div className="w-full h-screen  flex justify-center items-center">
          <SpinnerDark />
        </div>
        :
        <div>
            <div className=" px-5 text-[#522b5b] mt-5">
              <h1 className="py-5 text-3xl font-semibold">Gestion de visitas</h1>
            </div>
            <TableVisits />
        </div>}
        
       
      </main>
    </section>
  )
}
 
export default VisitsPage
