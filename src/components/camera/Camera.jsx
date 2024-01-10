import  Webcam  from "react-webcam";


const Camera = ({setScreenShot}) => {
  const videoConstraints = {
    width: 1024,
    height: 720,
    facingMode: "user",
  };

  return (
    <div className="w-full flex h-1/2 items-center justify-center  mx-auto relative " >
    


      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"

        className=" rounded-md h-[100%] w-full  object-cover relative"
      >
        {(e) => (
            <div className="  flex justify-center mt-8 absolute bottom-0 mb-5  rounded-md p-1 border-2">
                <button className="  px-12 py-2 rounded-lg bg-[#522b5b] text-white hover:bg-[#652e72] transition-all"
                  onClick={()=>{
                    const { getScreenshot } = e;
                    const imagen = getScreenshot();
                    
                    setScreenShot(imagen)
                    
                  }}
                >
                  Capturar Imagen
                </button>
            </div>
        )}
      </Webcam>
    </div>
  );
};

export default Camera;
