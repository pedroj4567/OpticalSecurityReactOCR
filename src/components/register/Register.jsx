import InputField from "../input/InputField"
import Button from "../button/Button"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {

    const [isLoadingAuth, setIsLoadingAuth] = useState(false)
    const [responseAuth, setResponseAuth] = useState()
    const [errorAuth, setErrorAuth] = useState()
  
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
  
    const baseURL = "https://a550-186-92-101-134.ngrok-free.app/api/v1/auth/signup"  
    const authMethod = async (body) => {
      console.log(body)
      try {
        setIsLoadingAuth(true)
        const { data } = await axios
        .post(`${baseURL}`, {
          userData: {
            username: formData.username,
            email: formData.email,
            password: formData.password
          }
         
        })
        console.log("hola", data)
        setResponseAuth(data)
      } catch (error) {
        setErrorAuth(error)
      }finally{
        setIsLoadingAuth(false)
      }
     
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      console.log(formData)
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      let currentErrors = {};
  
      if (!formData.email.trim()) {
        currentErrors.email = 'El email es requerido';
      }
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
      // if (!formData.password.trim()) {
      //   currentErrors.password = 'Password is required';
      // } else if (!passwordRegex.test(formData.password)) {
      //   currentErrors.password = 'La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números';
      // }
    
  
      if (Object.keys(currentErrors).length === 0) {
        // Handle form submission logic here (e.g., send data to backend)
        console.log('Form data:', formData);
        authMethod(formData)
        setFormData({
            username: "",
          email: '',
          password: '',
        })
       
      } else {
        setErrors(currentErrors);
      }
    };
  
    return (
      <div className="mx-auto w-[600px] h-screen flex flex-col justify-center items-center">
          <form 
             className=" shadow-lg h-3/4  bg-white items-center py-12 border w-[500px] rounded-md flex flex-col justify-evenly"
             onSubmit={handleSubmit}   
          >
              <div className="text-center mb-2 text-3xl">
                  <h2 className="mb-4 text-gray-700">Registrate en <span className="text-[#61366b] font-semibold">OptiShield</span></h2>
                  <hr />
              </div>
              <InputField
                  type="text"
                  label="Ingrese un nombre de usuario"
                  idInput="username"
                  name="username"
                  onChange={handleChange}
              />
              <InputField
                  type="email"
                  label="Ingrese su correo"
                  idInput="email"
                  name="email"
                  onChange={handleChange}
              />
              <InputField
                  type="password"
                  label="Ingrese su contraseña"
                  idInput="password"
                  name="password"
                  onChange={handleChange}
              />
              <Button loading={isLoadingAuth}/>
  
          
          </form>
      </div>
    )
  }
  
  export default Register
  