import React from 'react'
import imageMock from '../../assets/preview.png'
import SpinnerTemporal from '../Spinner/SpinnerTemporal'


export const VerifyPlate = ({screenShot}) => {
  return (
    <div className='h-full bg-white shadow-md rounded relative'>
      <SpinnerTemporal />
        <div className='flex flex-col justify-between w-full h-full p-2 gap-2'>
            <img className="w-[90%] h-[190px] rounded object-cover mx-auto" src={screenShot ? screenShot : imageMock} alt="imagen de vista" srcSet="preview image" />
            <button class="text-white  mx-4 bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm px-5 py-3.5  text-center ">Verificar</button>
        </div>
    </div>
  )
}
