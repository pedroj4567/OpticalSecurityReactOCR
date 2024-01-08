import React from 'react'

export const InfoDetail = () => {
  return (

<div className=' bg-white shadow-md h-full'>
  <div class="px-4 sm:px-0 mx-3">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Placa Info</h3>
    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Infomación Personal</p>
  </div>
  <div class="mt-1 border-t border-gray-100 mx-3">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
      </div>
      <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
      </div>
     
      
    </dl>
  </div>
</div>
    
  )
}
