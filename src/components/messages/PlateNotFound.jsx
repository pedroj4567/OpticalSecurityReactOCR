const PlateNotFound = () => {
  return (
    <div className='w-full border flex flex-col items-center justify-center h-full'>
        <p className='text-xl mb-3'>El numero de placa no pertenece a ninguna familia</p>
        <button className="bg-white border border-[#522b5b] hover:bg-purple-600 hover:text-white transition-all w-1/2 rounded-lg text-[#522b5b] font-medium py-1">Agregar como visita</button>
    </div>
  )
}

export default PlateNotFound