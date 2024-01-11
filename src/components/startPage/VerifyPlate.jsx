import React, { useEffect } from 'react'
import imageMock from '../../assets/preview.png'
import SpinnerTemporal from '../Spinner/SpinnerTemporal'
import SpinnerTemporal2 from '../Spinner/SpinnerTemporal2'


export const VerifyPlate = ({screenShot, getPlate, isLoading, error}) => {
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading])
  return (
    <div className='h-full bg-white shadow-md rounded relative'>
      <SpinnerTemporal />
      {
        isLoading ?
        <SpinnerTemporal2 />
        :
        <div className='flex flex-col justify-between w-full h-full p-3 gap-2'>
          <img className="w-[100%] h-[270px] rounded object-cover mx-auto" src={screenShot ? screenShot : imageMock} alt="imagen de vista" srcSet="preview image" />
          <button onClick={getPlate} class="text-white bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm px-5 py-3.5  text-center ">Verificar</button>
        </div>
      }
    </div>
  )
}
