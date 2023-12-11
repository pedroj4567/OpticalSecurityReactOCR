import  Webcam  from "react-webcam";
import { Button } from '@mui/material';


const Camera = ({setIsloadingImg,setImg}) => {
  const videoConstraints = {
    width: 1000,
    height: 400,
    facingMode: "user",
  };

  return (
    <div className="relative" >
      <Webcam
        audio={false}
        height={680}
        screenshotFormat="image/jpeg"
        width={1030}
        videoConstraints={videoConstraints}
        className=" rounded-xl"
      >
        {(e) => (
            <div className="absolute rounded-xl w-full h-full top-0 hover:bg-white/50  cursor-pointer  transition-all flex items-center justify-center">
                <button 
                  className=" text-transparent text-2xl font-semibold   w-full h-full rounded-lg hover:text-[#001C30]"
                  onClick={()=>{
                    const { getScreenshot } = e;
                    const imagen = getScreenshot();
                    if(imagen.length > 0){
                      setImg(imagen)
                    }
                    setIsloadingImg(true)
                    setTimeout(()=>{
                      setIsloadingImg(false)
                    },2000)
                    
                  }}
                  >
                  Capturar
                </button>
            </div>
        )}
      </Webcam>
    </div>
  );
};

export default Camera;
