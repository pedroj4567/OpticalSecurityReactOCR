import React, { useState } from 'react'
import SpinnerTemporal2 from '../Spinner/SpinnerTemporal2'
import { IoMdCloseCircle } from 'react-icons/io'
import List from 'rc-virtual-list';
import { v4 as uuidv4 } from 'uuid';
import { Toaster } from 'react-hot-toast';


export const FamilyCommunityFormStepTwo = ({setFormData, handleEditSubmit, handleSubmit, toggleForm, id, isLoading, isVisible, cars, setCars}) => {

  
    
      const handleAddCar = () => {
        setCars([...cars,  { brand: '', model: '', licencePlate: '', color: '' },]);
       
      };
    
      const handleInputChange = (index, field, value) => {
        const newCars = [...cars];
        newCars[index][field] = value;
        setCars(newCars);
        console.log(cars)
        
        setFormData((prev) => ({
          ...prev,
          cars,
        }));
      };
    
      const handleDeleteCar = (index) => {
        const newCars = [...cars];
        newCars.splice(index, 1);
        setCars(newCars);
      };
    
      const handleEditCar = (index) => {
        // Implement your edit logic here
      };
    
  return (
    <>
    <div className="fixed z-30 top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        className={`shadow-lg h-5/6 relative bg-white border w-3/4 items-center py-12 px-6 rounded-md flex flex-col justify-evenly `}
      >
        <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          className: '',
          duration: 1300,
          style: {
            background: '#522b5b',
            color: '#fff',
          }}}
      />
        <IoMdCloseCircle onClick={toggleForm} className='absolute top-4 right-4'/>
        <div className="text-center mb-2 text-2xl">
          {id ? (
            <h2 className="mb-4 text-gray-700">Editar <span className="text-[#61366b] font-semibold">Vehiculos</span></h2>
          ) : (
            <h2 className="mb-4 text-gray-700">Añadir nuevo <span className="text-[#61366b] font-semibold">Vehiculo</span></h2>
          )}
          <hr />
        </div>

        {isLoading ? (
          <SpinnerTemporal2 />
        ) : (

  <div className="container w-full h-[800px] flex flex-col mx-auto my-8 overflow-x-auto">
     <button
      onClick={handleAddCar}
      className="bg-green-500 mb-2 self-end text-white py-2 px-4 rounded"
    >
      Add Car
    </button>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-slate-100 uppercase  bg-[#522b5b]">
            <tr>
               
                <th scope="col" class="px-6 py-3">
                    Marca
                </th>
                <th scope="col" class="px-6 py-3">
                    Modelo
                </th>
                <th scope="col" class="px-6 py-3">
                    Placa
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Accion
                </th>
            </tr>
        </thead>
        <tbody>
        {cars.map((car, index) => (
                <tr class="bg-white border-b text-gray-700 dark:border-purple-600">
            <td className="w-[100px] border py-2 px-3">
              <input
                type="text"
                placeholder="Marca"
                value={car.brand}
                onChange={(event) => handleInputChange(index, 'brand', event.target.value)}
                className="w-full border rounded py-1 px-2"
              />
            </td>
            <td className="w-[100px] border py-2 px-3">
              <input
                type="text"
                placeholder="Model"
                value={car.model}
                onChange={(event) => handleInputChange(index, 'model', event.target.value)}
                className="w-full border rounded py-1 px-2"
              />
            </td>
            <td className="w-[100px] border py-2 px-3">
              <input
                type="text"
                placeholder="Placa"
                value={car.licencePlate}
                onChange={(event) => handleInputChange(index, 'licencePlate', event.target.value)}
                className="w-full border rounded py-1 px-2"
              />
            </td>
            <td className="w-[100px] border py-2 px-3">
              <input
                type="text"
                placeholder="Color"
                value={car.color}
                onChange={(event) => handleInputChange(index, 'color', event.target.value)}
                className="w-full border rounded py-1 px-2"
              />
            </td>
            <td className="w-[100px] border py-2 px-3">
              <button
                onClick={() => handleDeleteCar(index)}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Delete
              </button>
            </td>

            </tr>
        )) }
        </tbody>
    </table>
</div>
<button onClick={handleSubmit} class="text-white  bg-[#522b5b] my-2 hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Agregar</button>
</div>
        )}
      </div>
    </div>
  </>

  


  )
}
