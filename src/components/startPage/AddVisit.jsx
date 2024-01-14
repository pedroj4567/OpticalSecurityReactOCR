/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Select from 'react-select'
import { IoMdCloseCircle } from "react-icons/io";
import useAxios from "../../utils/hooks/useAxios";
import toast, { Toaster } from 'react-hot-toast';

import axios from "axios";

export const AddVisitForm = ({id, setId, toggleForm, plate, families}) => {

    const [isVisible, setIsVisible] = useState(false);
   
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState()
    const [error, setError] = useState()

    const [familyId, setFamilyId] = useState("")
    const [errors, setErrors] = useState({});

    const [isLoadingCreate, setIsLoadingCreate] = useState(false)
    const [responseCreate, setResponseCreate] = useState()
    const [errorCreate, setErrorCreate] = useState()

    const baseURL = "http://localhost:3200/api/v1/visit"

    const {isLoading: isLoadingVisit, response: responseVisit, error: errorVisit, fetchData} = useAxios({
      method: 'get',
      url: `visit/${id}`,
    })

    

    useEffect(() => {
      if(id){
        fetchData()
      }
    }, [])

    useEffect(() => {
      setFormData((prev) => ({
        name: responseVisit?.visit.name,
        lastName: responseVisit?.visit.lastname,
        licensePlate: plate.toUpperCase(),
        brandVehicle: responseVisit?.visit.brand_vehicle,
        modelVehicle: responseVisit?.visit.model,
        colorVehicle: responseVisit?.visit.color_vehicle,
        familyId: responseVisit?.visit.familyId
      }))
      
    },[responseVisit])

    useEffect(() => {
      console.log(responseVisit, isLoadingVisit, errorVisit)
    }, [])

    const [formData, setFormData] = useState({
      name: '',
      lastName: '',
      licensePlate: plate.toUpperCase(),
      brandVehicle: "",
      modelVehicle: '',
      colorVehicle: '',
      familyId: ""

    });
  
    const handleChange = (e) => {
      console.log(e.name, e.value)
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    useEffect(() =>{
      setFormData((prev) => ({
        ...prev,
        familyId: familyId
      }))
    }, [familyId])

      useEffect(() => {
          setTimeout(() => {
              setIsVisible(true);
          }, 50);
      }, [families]);

    const postMethod = async (body) => {
      try {
        setIsLoadingCreate(true)
        const { data } = await axios
        .post(`${baseURL}`, {
          data: {
            name: body.name,
            lastname: body.lastName,
            license_plate_number: body.licensePlate,
            brand_vehicle: body.brandVehicle,
            model_vehicle: body.modelVehicle,
            color_vehicle: body.colorVehicle,
            familyId: body.familyId
          }
        } )
        console.log("hola", data)
        setResponseCreate(data)
      } catch (error) {
        setErrorCreate(error)
      }finally{
        setIsLoadingCreate(false)
      }
    };

    const patchMethod = async (body, id) => {
      try {
        setIsLoadingCreate(true)
        const { data } = await axios
        .patch(`${baseURL}/${id}`, {
          data: {
            name: body.name,
            lastname: body.lastName,
            license_plate_number: body.licensePlate,
            brand_vehicle: body.brandVehicle,
            model_vehicle: body.modelVehicle,
            color_vehicle: body.colorVehicle,
            familyId: body.familyId
          }
        } )
        console.log("hola", data)
        setResponseCreate(data)
      } catch (error) {
        setErrorCreate(error)
      }finally{
        setIsLoadingCreate(false)
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      let currentErrors = {};
  
      if (!formData.name.trim()) {
        currentErrors.name = 'El nombre es requerido';
      }
      if (!formData.lastName.trim()) {
        currentErrors.lastName = 'El apellido es requerido';
      }
      if (!formData.licensePlate.trim()) {
        currentErrors.licensePlate = 'La placa es requerida';
      }
      if (!formData.brandVehicle.trim()) {
        currentErrors.brandVehicle = 'La marca es requerida';
      }
      if (!formData.modelVehicle.trim()) {
        currentErrors.modelVehicle = 'El modelo es requerido';
      }
      if (!formData.colorVehicle.trim()) {
        currentErrors.colorVehicle = 'El color del vehiculo es requerido';
      }
      if (!formData.familyId) {
        currentErrors.familyId = 'Debe seleccionar una familia';
      }
  
      if (Object.keys(currentErrors).length === 0) {
        // Handle form submission logic here (e.g., send data to backend)
        console.log('Form data:', formData);
        if(id){
          patchMethod(formData, responseVisit.visit.uuid)
        }else{
          postMethod(formData)
        }
        setFormData({
            name: '',
            lastName: '',
            licensePlate: '',
            brandVehicle: "",
            modelVehicle: '',
            colorVehicle: '',
            fechaAdmision: "",
            familyId: ""
        })

     toast.success('Visita registrada correctamente');

      setTimeout(()=>{
        toggleForm()
      },1500)
      } else {
        setErrors(currentErrors);
        toast.error('Visita No registrada, error del servidor');
      }
    };

    const handleEditSubmit = (e) => {
      e.preventDefault();
  
      let currentErrors = {};
  
      if (!formData.name.trim()) {
        currentErrors.name = 'El nombre es requerido';
      }
      if (!formData.lastName.trim()) {
        currentErrors.lastName = 'El apellido es requerido';
      }
      if (!formData.licensePlate.trim()) {
        currentErrors.licensePlate = 'La placa es requerida';
      }
      if (!formData.brandVehicle.trim()) {
        currentErrors.brandVehicle = 'La marca es requerida';
      }
      if (!formData.modelVehicle.trim()) {
        currentErrors.modelVehicle = 'El modelo es requerido';
      }
      if (!formData.colorVehicle.trim()) {
        currentErrors.colorVehicle = 'El color del vehiculo es requerido';
      }
      if (!formData.familyId) {
        currentErrors.familyId = 'Debe seleccionar una familia';
      }

      if (Object.keys(currentErrors).length === 0) {
        // Handle form submission logic here (e.g., send data to backend)
        console.log('Form data:', formData);
        setFormData({
            name: '',
            lastName: '',
            licensePlate: '',
            brandVehicle: "",
            modelVehicle: '',
            colorVehicle: '',
            fechaAdmision: "",
            familyId: ""
        })
        // toggleForm()
        setId(null)
  
  
      } else {
        setErrors(currentErrors);
      }
    };

  //TODO: JOSE PROBAR EL ENDPOINT DE VISIT 

  // RUTA: /visits -> Post({Pasas el objeto de visitas})
  // PONER SPINNER ENTRE LAS PAGINAS. 
  
  // const baseURL = "http://localhost:3200/api/v1/"
  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true)
  //     const { data } = await axios
  //     .post(baseURL, {
  //       upload: screenShot
  //     })
  //     console.log("hola", data)
  //     setResponse(data)
  //   } catch (error) {
  //     setError(error)
  //   }finally{
  //     setIsLoading(false)
  //   }
   
  // };
  

  const transformData = ()=>{
    return families.map((f)=>{
      return { value: f.uuid, label:f.name, name: "familyId" }
    })
  }
 const options = transformData();
 
//  console.log(formData)
  
  
    return (
      <>
   <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center">
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
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
         
          <form 
          onSubmit={handleSubmit}
             className={`shadow-lg h-5/6  relative bg-white items-center py-12 px-6 border w-[500px] rounded-md flex flex-col justify-evenly overflow-hidden ${isVisible ? 'transform translate-y-0 transition-transform duration-500' : 'transform translate-y-[-300%]'}`}
          >
                    <IoMdCloseCircle onClick={toggleForm} className='absolute top-4 right-4 cursor-pointer'/>
              <div className="text-center mb-2 text-2xl">
                  {id ? 
                  <h2 className="mb-4 text-gray-700">Editar <span className="text-[#61366b] font-semibold">visita</span></h2>
                  :
                  <h2 className="mb-4 text-gray-700">Añadir nueva <span className="text-[#61366b] font-semibold">visita</span></h2>}
                  <hr />
              </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.name} onChange={handleChange} name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.lastName} onChange={handleChange} name="lastName" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.licensePlate} readOnly onChange={handleChange} name="licensePlate" id="floating_email" className="block opacity-80 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" "  />
                  {errors.licensePlate && <p className="text-red-500 text-xs mt-1">{errors.licensePlate}</p>}
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Placa del vehículo</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.modelVehicle} onChange={handleChange} name="modelVehicle" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.modelVehicle && <p className="text-red-500 text-xs mt-1">{errors.modelVehicle}</p>}
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca del vehículo</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.brandVehicle} onChange={handleChange} name="brandVehicle" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.brandVehicle && <p className="text-red-500 text-xs mt-1">{errors.brandVehicle}</p>}
                  <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modelo</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.colorVehicle} onChange={handleChange} name="colorVehicle" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.colorVehicle && <p className="text-red-500 text-xs mt-1">{errors.colorVehicle}</p>}
                  <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
              </div>
              <div className="relative z-0 w-full mb-5 group ">
                
                 <div className="">
                   <Select options={options} placeholder="Seleccione una familia" onChange={(e) => {
                      setFamilyId(e.value)
                   }}/>
                 </div>
              </div>

              
              <button type="submit" className="text-white transition-all  bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Agregar</button>
              
          </form>
        
          
      </div>
      </>
    )
  }
  
