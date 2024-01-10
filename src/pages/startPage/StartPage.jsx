import { useEffect, useState } from "react";
import { Camera,SectionInfo, Spinner } from "../../components" 
import { InfoDetail } from "../../components/startPage/InfoDetail";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import SpinnerDisappear from "../../components/Spinner/SpinnerDissapear";
import { VerifyPlate } from "../../components/startPage/VerifyPlate";
import SpinnerDark from "../../components/Spinner/SpinnerDark";
import useAxios from "../../utils/hooks/useAxios";
import axios from "axios";
const StartPage = () => {

  const { isLoading, completed, hasError, closeError, simulateRequest } = useSimulatedRequest();
  const [screenShot, setScreenShot] = useState(null)

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

  function getPlate(){
     const { response, loading, error } = useAxios({
    method: 'post',
    url: '/recognition/upload',
    headers: JSON.stringify({ accept: '*/*' }),
    body: JSON.stringify({
        upload: "ñdjsd"
    }),
});
  }

 



  useEffect(() => {
    console.log(screenShot)
  }, [screenShot])


  return (
    <section className="w-4/6 mx-auto h-screen p-9 flex flex-col ">
      
     
     <SpinnerDisappear />

        <>
          <div className=" w-full h-[44px] flex justify-between px-4 items-center ">
                <div>
                    <h1 className="text-[32px] text-[#522b5b] font-medium ">Bienvenido Usuario</h1>
                </div>
                <div>
                    <p className="text-xl text-[#522b5b]" >Fecha : <span className="font-bold">23/02/12</span>  Hora: <span className="font-bold">12:00pm</span></p>
                </div>
            </div>

            
              <Camera setScreenShot={setScreenShot}/>
             
              <div className="flex flex-1 h-full gap-2">
               {screenShot !== null ?
               <>
                  <div className="flex-1 border rounded">
                    <VerifyPlate />
                  </div>
                  <div className="flex-1 ">
                    <InfoDetail />
                  </div>
               </> :
               <div className="flex flex-1 h-full justify-center items-center">
                  <SpinnerDark/>
                </div>
               
                }
              </div>
        </>
        

       
    </section>
  )
}

export default StartPage
