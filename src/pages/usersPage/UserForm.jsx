import React, { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { IoMdCloseCircle } from 'react-icons/io';
import useAxios from '../../utils/hooks/useAxios';



export const UserForm = ({id, setId, toggleForm, edit, patch, create, formData, setFormData}) => {

  const [isVisible, setIsVisible] = useState(false);
  const { response: usersResponse, loading: usersLoading, error: usersError, fetchData: fetchUsersData } = useAxios({
    method: 'get',
    url: `user/${id}`,
  });

  useEffect(() => {
    if(id){
      fetchUsersData()
    }
  }, [id])
  

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
    console.log(usersResponse)
    if(usersResponse){
      setFormData((prev) => ({
        username: usersResponse?.person.name,
        email: usersResponse?.person.lastname,
        password: usersResponse?.person.n_phone,
      })
      )
    }
   }, [usersResponse])

  const handleSubmit = (e) => {
    e.preventDefault();

    let currentErrors = {};

    // if (!formData.username.trim()) {
    //   currentErrors.username = 'El username es requerido';
    // }
    
    // if (!formData.email.trim()) {
    //   currentErrors.email = 'El email es requerido';
    // }
    
    // if (!formData.password.trim()) {
    //   currentErrors.password = 'La contraseña es requerida';
    // }
    

    if (Object.keys(currentErrors).length === 0) {
      // Handle form submission logic here (e.g., send data to backend)
      console.log('Form data:', formData);
      if(id){
        patch(`/user/${id}`, formData)
      }else{
        create("/auth/signup", {
            userData: formData
        })
      }
      
      setFormData({
        userName: '',
        email: '',
        password: "",
      })
      toggleForm()
    } else {
      setErrors(currentErrors);
    }
  };

 

  return (
    <>
 <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>    
        <form 
        onSubmit={handleSubmit}
           className={`shadow-lg h-1/2 relative bg-white items-center py-12 px-6 border  rounded-md flex flex-col justify-evenly overflow-hidden ${isVisible ? 'transform translate-y-0 transition-transform duration-500' : 'transform translate-y-[-300%]'}`}
        >
                    <IoMdCloseCircle onClick={toggleForm} className='absolute top-4 right-4'/>

            <div className="text-center mb-2 text-2xl">
                {id ? 
                <h2 className="mb-4 text-gray-700">Editar <span className="text-[#61366b] font-semibold">usuario</span></h2>
                :
                <h2 className="mb-4 text-gray-700">Añadir nuevo <span className="text-[#61366b] font-semibold">usuario</span></h2>}
                <hr />
            </div>
              <div class="relative z-0 w-full mb-5 group">
                <input type="text" value={formData.username} onChange={handleChange} name="userName" id="floating_user" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                <label for="floating_user" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">username</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="email" value={formData.email} onChange={handleChange} name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="password" value={formData.password} onChange={handleChange} name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#61366b] focus:outline-none focus:ring-0 focus:border-[#61366b] peer" placeholder=" " required />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#61366b] peer-focus:dark:text-[#61366b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
            </div>
         
            <button type="submit" class="text-white w-full bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Agregar</button>
            
        </form>
      
        
    </div>
    </>
  )
}