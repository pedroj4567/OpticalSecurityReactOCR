import InputField from "../input/InputField"
import Button from "../button/Button"
import { Link } from "react-router-dom";

const Login = () => {

  const handleSubmit = async  e =>{
    e.preventDefault();
  }

  return (
    <div className="mx-auto w-[600px] h-screen flex flex-col justify-center items-center">
        <form 
           className=" shadow-lg h-1/2  bg-white items-center py-12 border w-[500px] rounded-md flex flex-col justify-evenly"
           onSubmit={handleSubmit}   
        >
            <div className="text-center mb-2 text-3xl">
                <h2 className="mb-4 text-gray-700">Bienvenido a <span className="text-[#61366b] font-semibold">OptiShield</span></h2>
                <hr />
            </div>
            <InputField
                type="email"
                label="Ingrese su correo"
                idInput="email"
                
            />
            <InputField
                type="password"
                label="Ingrese su contraseña"
                idInput="password"

            />
            <Button/>

            <div className=" w-[320px] text-center py-10">
                <Link to={"/verify"}>¿Olvido su contraseña?</Link>
            </div>
        </form>
    </div>
  )
}

export default Login
