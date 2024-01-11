import React, { useEffect } from 'react'
import SpinnerTemporal2 from '../Spinner/SpinnerTemporal2'
import PlateNotFound from '../messages/PlateNotFound'

export const InfoDetail = ({data, isLoading}) => {
  useEffect(() =>{
    console.log("data", data)
  }, [data])
 
  return (
<>
{
  isLoading ?
  <div className='h-full bg-white shadow-md rounded relative'>
    <SpinnerTemporal2/>
  </div>
    
  : data ?
  <div className=' bg-white shadow-md h-full'>
  <div class="px-4 sm:px-0 mx-3">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Info</h3>
    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">placa: </p>
  </div>
  <div class="mt-1 border-t border-gray-100 mx-3">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Modelo</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Marca</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Color</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Familia</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Perez</dd>
      </div>
     
      
    </dl>
  </div>
</div>
:
<PlateNotFound plateFound={data}/>
}

</>

    
  )
}
