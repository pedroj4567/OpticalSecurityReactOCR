const ErrorMessage = ({msg, close}) => {
    return (
        <div className="w-screen h-screen fixed z-10 top-0 left-0">
            <div className="w-screen h-screen absolute top-0 left-0 bg-black opacity-[0.3]"></div>
            <div className='w-full border flex flex-col items-center justify-center h-full'>
                <div className="flex flex-col items-center w-1/3 h-[400] border-[#522b5b] bg-white z-20 p-5 rounded">
                    <p className='text-xl mb-3'>{msg}</p>
                    <button onClick={close} className="bg-white border border-[#522b5b] hover:bg-purple-600 hover:text-white transition-all w-1/2 rounded-lg text-[#522b5b] font-medium py-1">Agregar como visita</button>
                </div>
            </div>
        </div>
      
    )
  }
  
  export default ErrorMessage