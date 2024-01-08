import React, { useState } from 'react'
import Button from '../button/Button'
import InputField from '../input/InputField'
import { v4 as uuidv4 } from 'uuid';


export const UserCommunityForm = ({handleChange, formData, setformData}) => {
  const [errors, setErrors] = useState({});

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
      setformData({
        email: '',
        password: '',
      })
    } else {
      setErrors(currentErrors);
    }
  };
  return (
    <>
 <div className="flex-1 mt-10">
        <form 
        onSubmit={handleSubmit}
           className=" shadow-lg h-1/2  bg-white items-center py-12 px-6 border  rounded-md flex flex-col justify-evenly"
        >
            <div className="text-center mb-2 text-2xl">
                <h2 className="mb-4 text-gray-700">Añadir nuevo <span className="text-[#61366b] font-semibold">usuario</span></h2>
                <hr />
            </div>
              <div class="relative z-0 w-full mb-5 group">
                <input type="email" value={formData.email} onChange={handleChange} name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="password" value={formData.password} onChange={handleChange} name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button type="submit" class="text-white w-full bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Agregar</button>
            
        </form>
    </div>
    </>
  )
}
