import React, { useEffect, useState } from 'react'
import SpinnerTemporal2 from '../Spinner/SpinnerTemporal2'
import { IoMdCloseCircle } from 'react-icons/io'
import List from 'rc-virtual-list';
import { v4 as uuidv4 } from 'uuid';
import { Toaster } from 'react-hot-toast';
import useAxios from '../../utils/axios/useAxios';
import { FaArrowAltCircleLeft } from "react-icons/fa";



export const FamilyCommunityFormStepTwo = ({setFormData, toggle, handleEditSubmit, handleSubmit, toggleForm, id, isLoading, isVisible, cars, setCars}) => {

    const [plateIsValid, setPlateIsValid] = useState(false)
    const {createData, data, loading, error} = useAxios()

    const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const isValid = cars.every(car => validateLicensePlate(car.licencePlate));
    setFormIsValid(isValid);
  }, [cars]);

    useEffect(() => {
      console.log("data", data)
      console.log("error", error)
      console.log("loading", loading)

    }, [data, loading, error])

    const validateLicensePlate = (value) => {
      // Add your validation logic here
      const isValid = value.length >= 5 && value.length <= 8;
      setPlateIsValid(isValid)
      return isValid;
    };

    

      const handleAddCar = () => {
        setCars([...cars,  { brand: '', model: '', licencePlate: '', color: '' },]);
       
      };
    
      const handleInputChange = (index, field, value) => {
        const newCars = [...cars];
        newCars[index][field] = value;

        validateLicensePlate(value)

        if (field === 'licencePlate' && index === newCars.length - 1) {
          const data =   {
            plate: value
          }
          // Make the API call with the new licensePlate value
          createData(
          "/car/verify", {
            plate: value?.toLowerCase()
          }
          );
        }
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
        <FaArrowAltCircleLeft size={40} onClick={toggle} color='#61366b' className='absolute top-4 left-4 cursor-pointer'/>
        {/* <IoMdCloseCircle onClick={toggleForm} className='absolute top-4 right-4'/> */}
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

  <div className="container w-full h-[800px] flex flex-col mx-auto my-8 overflow-x-auto relative">
     <button
      onClick={handleAddCar}
      className="bg-[#6d3978] mb-2 self-end text-white py-2 px-4 rounded"
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
                required
              />
            </td>
            <td className="w-[100px] border py-2 px-3">
              <input
                type="text"
                placeholder="Model"
                value={car.model}
                onChange={(event) => handleInputChange(index, 'model', event.target.value)}
                className="w-full border rounded py-1 px-2"
                required
              />
            </td>
            <td className="w-[100px] border py-2 px-3">
              <input
                type="text"
                placeholder="Placa"
                value={car.licencePlate?.toUpperCase()}
                onChange={(event) => handleInputChange(index, 'licencePlate', event.target.value)}
                
                className="w-full border rounded py-1 px-2"
                required
              />
              {car.licencePlate.length >= 5 && car.licencePlate.length <= 8 ? null : <p className='text-gray-700 text-[10px]'>entre 5 y 8 caracteres maximo</p>}
              {!data?.success && <p className='text-red-500 text-[10px]'>{data?.msg}</p>}
            </td>
            <td className="w-[100px] border py-2 px-3">
              <input
                type="text"
                placeholder="Color"
                value={car.color}
                onChange={(event) => handleInputChange(index, 'color', event.target.value)}
                className="w-full border rounded py-1 px-2"
                maxLength={8}
                minLength={5}
                required
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
{cars.length > 0 && <button onClick={handleSubmit}  disabled={!formIsValid} class="text-white  bg-[#522b5b] my-2 hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center left-0 bottom-0 absolute">Agregar</button>}
</div>
        )}
      </div>
    </div>
  </>

  


  )
}
