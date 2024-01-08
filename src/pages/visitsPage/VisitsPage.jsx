import { useEffect, useState } from "react";
import ErrorMessage from "../../components/messages/ErrorMessage";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import Spinner from "../../components/Spinner/Spinner";
import TableVisits from "../../components/table/TableVisits";
import SpinnerDark from "../../components/Spinner/SpinnerDark.jsx";
import useAxios from "../../utils/hooks/useAxios.jsx";
import SpinnerDisappear from "../../components/Spinner/SpinnerDissapear.jsx";
import axios from "axios";

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

  const fetchData = () => {
    axios
        .post('/api/v1/recognition/upload',
        JSON.stringify(
          {
            upload: "dkasofk"
          }
        ))
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

useEffect(() => {
    fetchData();
}, []);
  
//   const { response, loading, error } = useAxios({
//     method: 'post',
//     url: '/recognition/upload',
//     headers: JSON.stringify({ accept: '*/*' }),
//     body: JSON.stringify({
//         userId: 1,
//         id: 19392,
//         title: 'title',
//         body: 'Sample text',
//     }),
// });
// const [data, setData] = useState([]);

// useEffect(() => {
//     if (response !== null) {
//       console.log("ñkdjsañd")
//         setData(response);
//     }
// }, [response]);
// useEffect(() => {
//     console.log(response, loading, error)
// }, [response])

//   useEffect(() => {
//     simulateRequest()
//   }, [])

  return (
    <section className="w-[68%] mx-auto h-screen">
      <main>
        <SpinnerDisappear />
            <div className=" px-5 text-[#522b5b] mt-5">
              <h1 className="py-5 text-3xl font-semibold">Gestion de visitas</h1>
            </div>
            <TableVisits />
        
        
       
      </main>
    </section>
  )
}
 
export default VisitsPage
