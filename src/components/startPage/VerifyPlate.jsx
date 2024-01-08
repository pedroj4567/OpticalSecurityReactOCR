import React from 'react'
import imageMock from '../../assets/preview.png'


export const VerifyPlate = () => {
  return (
    <div className='h-full bg-white shadow-md rounded'>
        <div className='flex flex-col'>
            <img className=" w-[220px] mx-auto" src={imageMock} alt="imagen de vista" srcSet="preview image" />
            <button class="text-white  mx-4 bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm px-5 py-3.5 h-full text-center ">Verificar</button>
        </div>
    </div>
  )
}
