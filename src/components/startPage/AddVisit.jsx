import { useEffect, useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";

export const AddVisitForm = ({id, setId, toggleForm, plate}) => {

    const [isVisible, setIsVisible] = useState(false);
   
    
    const [formData, setFormData] = useState({
      name: '',
      lastName: '',
      licensePlate: plate,
      brandVehicle: "",
      modelVehicle: '',
      colorVehicle: '',
      fechaAdmision: ""
    });
  
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
  
    useEffect(() => {
      if(id){
          console.log("Buscar por id", id)
      }
    }, [])
  
    const handleSubmit = (e) => {
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
        setFormData({
            name: '',
            lastName: '',
            licensePlate: '',
            brandVehicle: "",
            modelVehicle: '',
            colorVehicle: '',
            fechaAdmision: ""
        })
        toggleForm()
      } else {
        setErrors(currentErrors);
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
            fechaAdmision: ""
        })
        toggleForm()
        setId(null)
  
  
      } else {
        setErrors(currentErrors);
      }
    };
  
    return (
      <>
   <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
         
          <form 
          onSubmit={id ? handleEditSubmit : handleSubmit}
             className={`shadow-lg h-5/6  relative bg-white items-center py-12 px-6 border w-[400px] rounded-md flex flex-col justify-evenly overflow-hidden ${isVisible ? 'transform translate-y-0 transition-transform duration-500' : 'transform translate-y-[-300%]'}`}
          >
            <FaClosedCaptioning onClick={toggleForm} className="top-4 absolute right-4"/>
              <div className="text-center mb-2 text-2xl">
                  {id ? 
                  <h2 className="mb-4 text-gray-700">Editar <span className="text-[#61366b] font-semibold">visita</span></h2>
                  :
                  <h2 className="mb-4 text-gray-700">Añadir nueva <span className="text-[#61366b] font-semibold">visita</span></h2>}
                  <hr />
              </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.name} onChange={handleChange} name="name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.lastName} onChange={handleChange} name="lastName" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.licensePlate} onChange={handleChange} name="licensePlate" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.licensePlate && <p className="text-red-500 text-xs mt-1">{errors.licensePlate}</p>}
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.modelVehicle} onChange={handleChange} name="modelVehicle" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.modelVehicle && <p className="text-red-500 text-xs mt-1">{errors.modelVehicle}</p>}
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.brandVehicle} onChange={handleChange} name="brandVehicle" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.brandVehicle && <p className="text-red-500 text-xs mt-1">{errors.brandVehicle}</p>}
                  <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" value={formData.colorVehicle} onChange={handleChange} name="colorVehicle" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                  {errors.colorVehicle && <p className="text-red-500 text-xs mt-1">{errors.colorVehicle}</p>}
                  <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>

              
              <button type="submit" class="text-white  bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Agregar</button>
              
          </form>
        
          
      </div>
      </>
    )
  }
  
