import { useEffect, useState } from "react";
import { Camera,SectionInfo, Spinner } from "../../components" 
import { InfoDetail } from "../../components/startPage/InfoDetail";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import SpinnerDisappear from "../../components/Spinner/SpinnerDissapear";
import { VerifyPlate } from "../../components/startPage/VerifyPlate";
import SpinnerDark from "../../components/Spinner/SpinnerDark";
import useAxios from "../../utils/hooks/useAxios";
import axios, { Axios } from "axios";
import { GridNavigation } from "../../components/gridNavigation/GridNavigation";
import SpinnerTemporal2 from "../../components/Spinner/SpinnerTemporal2";
import Clock from "../../components/clock/Clock.jsx";
import useSession from "../../utils/hooks/useSession.jsx";

import { getFormattedDate } from '../../utils/helpers.js'
const StartPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [screenShot, setScreenShot] = useState(null)
  const [screenShotIsLoading, setScreenShotIsLoading] = useState(false)
  // const { getSessionInfo } = useSession();
  // const { userName } = getSessionInfo();
  const baseURL = "http://localhost:3200/api/v1/recognition/upload"
  // const baseURL = "https://558f-186-92-40-5.ngrok-free.app/api/v1/recognition/upload"
  
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios
      .post(baseURL, {
        upload: screenShot
      })
      console.log("hola", data)
      setResponse(data)
    } catch (error) {
      setError(error)
    }finally{
      setIsLoading(false)
    }
   
  };

  useEffect(() =>{
    setScreenShotIsLoading(true)
    setResponse(null)
      setTimeout(() => {
        setScreenShotIsLoading(false)
      }, 1000)
      
  }, [screenShot])

 useEffect(() =>{
  console.log(response)
 },[response])

 useEffect(() => {
  console.log(isLoading);
  console.log(error);
}, [error, isLoading])


  useEffect(() => {
    console.log(screenShot)
  }, [screenShot])


  return (
    <section className="w-4/6 mx-auto h-screen p-9 flex flex-col gap-2">
    
    <SpinnerDisappear />

       <>
         <div className=" w-full h-[44px] flex justify-between px-4 items-center">
               <div>
                   {/* <h1 className="text-[32px] text-[#522b5b] font-medium ">Bienvenido {userName === undefined ? "Usuario" : userName}</h1> */}
               </div>
               <div>
                   <p className="text-xl text-[#522b5b]" >Fecha : <span className="font-bold">{getFormattedDate()}</span>  Hora: <Clock/></p>
               </div>
           </div>

           
             <Camera setScreenShot={setScreenShot}/>
            
             <div className="flex flex-1 h-full gap-2">
              {screenShot !== null &&
              <>
                 <div className="flex-1 border rounded">
                   <VerifyPlate getPlate={fetchData} isLoading={screenShotIsLoading} error={error} screenShot={screenShot} data={response}/>
                 </div>
                 <div className="flex-1 ">
              
                    <InfoDetail data={response} isLoading={isLoading} />
                    
                  
                 </div>
              </> 
               }
             </div>
       </>
       

      
   </section>
  )
}

export default StartPage
