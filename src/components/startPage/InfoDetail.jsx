import React from 'react'

export const InfoDetail = () => {
  return (

<div className=' bg-white shadow-md h-full'>
  <div class="px-4 sm:px-0 mx-3">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Placa Info</h3>
    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">placa: h304jflhs</p>
  </div>
  <div class="mt-1 border-t border-gray-100 mx-3">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Modelo:</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fiat</dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Marca</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Brand</dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Color</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Rojo</dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Familia</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Perez</dd>
      </div>
     
      
    </dl>
  </div>
</div>
    
  )
}
