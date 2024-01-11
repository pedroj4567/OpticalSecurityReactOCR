import React, { useEffect, useState } from 'react'
import SpinnerTemporal2 from '../Spinner/SpinnerTemporal2'
import PlateNotFound from '../messages/PlateNotFound'
import { MdErrorOutline } from 'react-icons/md'
import { AddVisitForm } from './AddVisit'

export const InfoDetail = ({data, isLoading}) => {
  useEffect(() =>{
    console.log("data", data)
  }, [data])

  const [isFormOpen, setIsFormOpen] = useState(false)
  function toggleForm() {
      setIsFormOpen(prev => !prev)
    }
 
  return (
<>
{isFormOpen && <AddVisitForm toggleForm={toggleForm} plate={data?.plate}/>}
{
  isLoading ? (
    <div className='h-full bg-white shadow-md rounded relative'>
      <SpinnerTemporal2/>
    </div>
  ) : data?.notPlate ? (
    <div className='bg-white shadow-md h-full w-full'>
      <div className={`flex flex-col w-full h-full justify-center items-center border-[#522b5b] bg-white z-20 p-5 rounded overflow-hidden`}>
        <MdErrorOutline color="#522b5b" size={'80'} />
        <p className='text-xl mb-3'>{data?.msg}</p>
      </div>
    </div>
  ) : data?.dataCar ? (
    <div className=' bg-white shadow-md h-full'>
      <div className="px-4 sm:px-0 mx-3">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Info</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">placa: {data?.plate} </p>
      </div>
      <div className="mt-1 border-t border-gray-100 mx-3">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Modelo</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.dataCar.model}</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Marca</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.dataCar.brand}</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Color</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.dataCar.color}</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Familia</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Perez</dd>
          </div>
        </dl>
      </div>
    </div>
  ) : data ? (
    <div className='bg-white shadow-md h-full w-full'>
      <div className={`flex flex-col items-center h-full justify-center border-[#522b5b] bg-white z-20 p-5 rounded overflow-hidden w-full`}>
        <MdErrorOutline color="#522b5b" size={'80'} />
        <p className='text-xl mb-3'>{data?.msg}</p>
        <button onClick={toggleForm} className="bg-white border border-[#522b5b] hover:bg-purple-600 hover:text-white transition-all w-1/2 rounded-lg text-[#522b5b] font-medium py-1">Agregar visita</button>
      </div>
    </div>
  ) : null
}

</>

    
  )
}
