import  Webcam  from "react-webcam";


const Camera = ({}) => {
  const videoConstraints = {
    width: 2100,
    height: 1024,
    facingMode: "user",
  };

  return (
    <div className=" flex flex-col items-center justify-center mt-4" >
    


      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
        className=" rounded-xl w-2/3"
      >
        {(e) => (
            <div className="  flex justify-center mt-8 ">
                <button className=" px-12 py-2 rounded-lg bg-[#522b5b] text-white hover:bg-[#652e72] transition-all"
                  onClick={()=>{
                    const { getScreenshot } = e;
                    const imagen = getScreenshot();
                    console.log(imagen)
                    
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
