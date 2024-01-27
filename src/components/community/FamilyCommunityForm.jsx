import React, { useEffect, useState } from 'react'
import Button from '../button/Button'
import InputField from '../input/InputField'
import { v4 as uuidv4 } from 'uuid';
import { IoMdCloseCircle } from "react-icons/io";
import useAxios from '../../utils/hooks/useAxios';
import SpinnerTemporal2 from '../Spinner/SpinnerTemporal2';
import Select from 'react-select'
import toast, { Toaster } from 'react-hot-toast';
import { FamilyCommunityFormStepTwo } from './FamilyCommunityFormStepTwo';

export const FamilyCommunityForm = ({id, setId, toggleForm, edit, patch, create, users}) => {

  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [cars, setCars] = useState([
    // { uuid: uuidv4(), brand: '', model: '', plate: '', color: '' },
   
  ]);
  const [formData, setFormData] = useState({
    name: '',
    direccion: '',
    casa: '',
    telefono: '',
    cars: [],
    personIds: []
    
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isStepTwoOpen, setIsStepTwoOpen] = useState(false)
  const { response: familyResponse, loading: familyLoading, error: familyError, fetchData: fetchFamilyData } = useAxios({
    method: 'get',
    url: `family/${id}`,
  });

  useEffect(() => {
    if(id){
      console.log("id",id)
      fetchFamilyData()
    }
  }, [id])

  useEffect(() => {
    if(familyResponse){
   
      console.log(familyResponse.family)
      setFormData(() => ({
        name : familyResponse.family.name,
        direccion : familyResponse.family.n_address,
        casa : familyResponse.family.n_house,
        telefono : familyResponse.family.phone,
        cars : familyResponse.family.Cars,
        personIds : familyResponse.family.People
      }))
      setCars(familyResponse.family.Cars)
    
      // formData.name = familyResponse.family.name
      // formData.direccion = familyResponse.family.n_address
      // formData.casa = familyResponse.family.n_house
      // formData.telefono = familyResponse.family.phone
      // formData.cars = familyResponse.family.Cars
      // formData.personIds = familyResponse.family.People

    }
  }, [familyResponse])


 

  const usersData = users.map((user) => {
    return { value: user.uuid, label:user.name}
  })

  


  function toggleStepTwo() {
    const telefonoIsValid = /^\d{8,}$/.test(formData.telefono);
    const usersIds = usersData.map((user) => (
      user.value
    ))
  
    if (
      !formData.name ||
      !formData.direccion ||
      !formData.telefono ||
      !formData.casa ||
      // selectedUserIds.length === 0 ||
      !telefonoIsValid
    ) {
      toast.error("Llena todos los campos correctamente");
    } else {
      setIsStepTwoOpen((prev) => !prev);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 50);
    }, []);
  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    

    let currentErrors = {};
  
    const carsIds = cars.map((car) => (
      car.uuid
    ))

    if (!formData.name.trim()) {
      currentErrors.name = 'El email es requerido';
    }
    if (!formData.direccion.trim()) {
      currentErrors.direccion = 'La direccion es requeridoa';
    }
    if (!formData.casa.trim()) {
      currentErrors.casa = 'El número de casa  es requerido';
    }
    if (!formData.telefono.trim()) {
      currentErrors.telefono = 'El telefono es requerido';
    }

    console.log("selected user Ids:", selectedUserIds)
    console.log("cars user Ids:", carsIds)

    // setFormData((prev) => ({
    //   ...prev,
    //   selectedUserIds,
    //   carsIds,
    // }));

    if(selectedUserIds){
      toast.error("Por favor añade a una persona")
    }

    if(cars.length === 0){
      toast.error("Por favor añade un vehículo")
    }

    const isAnyEmpty = cars.some(car => Object.values(car).some(value => value === ''));

    if (isAnyEmpty) {
      console.log("fix")
      toast.error("Por favor llena todo los campos de carro")
    }

    console.log(formData)
    console.log(selectedUserIds)

    if (Object.keys(currentErrors).length === 0 && cars.length > 0 && !isAnyEmpty && selectedUserIds.length > 0) {
      // Handle form submission logic here (e.g., send data to backend)
      console.log('Form data:', formData);
      create(formData)
      setFormData({
        name: '',
        direccion: '',
        casa: '',
        telefono: '',
      })
      toggleForm()
    } else {
      setErrors(currentErrors);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    let currentErrors = {};

    if (!formData.email.trim()) {
      currentErrors.email = 'El email es requerido';
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!formData.password.trim()) {
      currentErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      currentErrors.password = 'La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números';
    }
  

    if (Object.keys(currentErrors).length === 0) {
      // Handle form submission logic here (e.g., send data to backend)
      console.log('Form data:', formData);
      edit(id, formData)
      setFormData({
        name: '',
        direccion: '',
        casa: '',
        telefono: '',
      })
      toggleForm()
      setId(null)


    } else {
      setErrors(currentErrors);
    }
  };


  useEffect(() => {
    console.log("user options", usersData)
    console.log("users", users)
  }, [users, usersData])

  useEffect(() => {
    console.log("loading", familyLoading)
  }, [familyLoading])

  return (
    <>
    
 <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
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
    {isStepTwoOpen && <FamilyCommunityFormStepTwo setFormData={setFormData} handleEditSubmit={handleEditSubmit} handleSubmit={handleSubmit} cars={cars} setCars={setCars} id={id} isLoading={familyLoading} isVisible={isVisible} />}
        <div 
           className={`shadow-lg h-5/6 relative bg-white w-3/4 items-center py-12 px-6 border rounded-md flex flex-col justify-evenly overflow-hidden ${isVisible ? 'transform translate-y-0 transition-transform duration-500' : 'transform translate-y-[-300%]'}`}
        >
          <IoMdCloseCircle onClick={toggleForm} className='absolute top-4 right-4'/>
            <div className="text-center mb-2 text-2xl">
                {id ? 
                <h2 className="mb-4 text-gray-700">Editar <span className="text-[#61366b] font-semibold">usuario</span></h2>
                :
                <h2 className="mb-4 text-gray-700">Añadir nuevo <span className="text-[#61366b] font-semibold">usuario</span></h2>}
                <hr />
            </div>
            
            {familyLoading ?
            <SpinnerTemporal2 />
              :
              <>
              <div class="relative z-0 w-full mb-5 group">
                <input type="text" value={formData.name} onChange={handleChange} name="name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="text" value={formData.direccion} onChange={handleChange} name="direccion" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.direccion && <p className="text-red-500 text-xs mt-1">{errors.direccion}</p>}
                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="text" value={formData.casa} onChange={handleChange} name="casa" id="floating_casa" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.casa && <p className="text-red-500 text-xs mt-1">{errors.casa}</p>}
                <label for="floating_casa" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de casa</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="text" value={formData.telefono} onChange={handleChange} name="telefono" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
            </div>
            <Select
              defaultValue={[]}
              isMulti
              name="users"
              options={usersData}
              className="basic-multi-select w-full"
              classNamePrefix="select"
              onChange={(selectedOptions) => {
                const selectedIds = selectedOptions.map((option) => option.value);
                setSelectedUserIds(selectedIds);
                setFormData((prev) => ({
                  ...prev,
                  selectedIds,
                }));
              }}
            />
            <button onClick={toggleStepTwo} class="text-white  bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Agregar</button>
              </>
            }
        </div>

    </div>
    </>
  )
}


