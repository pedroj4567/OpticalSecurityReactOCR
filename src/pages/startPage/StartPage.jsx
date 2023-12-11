import { useState ,useEffect} from "react";
import { Camera, Spinner } from "../../components";


const StartPage = () => {
  const [isLoadingImg, setIsloadingImg] = useState(false);
  const [img, setImg] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(()=>{
      setIsLoading(false);
    },1500)
  }
 
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);





  return (
    <section className="w-full p-9 flex flex-row gap-3 justify-around flex-wrap sm:flex-nowrap">
       
        <div className="w-2/3 flex  gap-4 flex-col">

            <div className="  bg-[#0B666A] h-[450px] shadow-lg  rounded-xl p-5 "> 
                {isLoading ? (<Spinner/>) : 
                (<Camera
                  setIsloadingImg={setIsloadingImg}
                  setImg={setImg}
                />)}
            </div>

            <div className="  h-1/2  rounded-xl  bg-[#001C30]"> 

            </div>
        </div>

        <div className="w-1/3  rounded-xl  bg-[#64CCC5]">
            {isLoadingImg ? (<Spinner/>) : (<img src={img} className="mt-4 mx-auto rounded-xl w-4/5 h-[300px]"/>)}
        </div>
    </section>
  )
}

export default StartPage
