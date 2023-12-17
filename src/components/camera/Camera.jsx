import  Webcam  from "react-webcam";


const Camera = ({setIsloadingImg,setImg}) => {
  const videoConstraints = {
    width: 2100,
    height: 1024,
    facingMode: "user",
  };

  return (
    <div className="relative" >
      <Webcam
        audio={false}
  
        screenshotFormat="image/jpeg"
      
        // videoConstraints={videoConstraints}
        className=" rounded-xl mx-auto w-1/2"
      >
        {(e) => (
            <div className="absolute rounded-xl w-1/2 mx-auto top-0 right-0 left-0 h-full hover:bg-white/50  cursor-pointer  transition-all ">
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
                <button className="w-full border mt-2">
                  Tomar Foto
                </button>
            </div>
        )}
      </Webcam>
    </div>
  );
};

export default Camera;
