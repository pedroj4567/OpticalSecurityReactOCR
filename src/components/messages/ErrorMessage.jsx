import { MdErrorOutline } from "react-icons/md";
import { useEffect, useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

const ErrorMessage = ({ msg, close, action, btnMsg, isCompleted, id }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 50);
    }, []);
    // const baseURL = "http://localhost:3200/api/v1/recognition/upload"
    // const deleteMethod = async (id) => {
    //   try {
    //     setIsLoading(true)
    //     const { data } = await axios
    //     .post(`${baseURL}/${id}`, {
    //       upload: screenShot
    //     })
    //     console.log("hola", data)
    //     setResponse(data)
    //   } catch (error) {
    //     setError(error)
    //   }finally{
    //     setIsLoading(false)
    //   }
     
    // };

    function nextActionErrorMsg() {
        
            console.log("ejecutando")
            action(id);
       
    }

    return (
        <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className={`flex relative flex-col items-center w-1/3 border-[#522b5b] bg-white z-20 p-5 rounded overflow-hidden ${isVisible ? 'transform translate-y-0 transition-transform duration-500' : 'transform translate-y-[-300%]'}`}>
                <IoMdCloseCircle onClick={close} className='absolute top-4 right-4'/>
                <MdErrorOutline color="#522b5b" size={'80'} />
                <p className='text-xl mb-3'>{msg}</p>
                <button onClick={nextActionErrorMsg} className="bg-white border border-[#522b5b] hover:bg-purple-600 hover:text-white transition-all w-1/2 rounded-lg text-[#522b5b] font-medium py-1">{btnMsg}</button>
            </div>
        </div>
    );
}

export default ErrorMessage;