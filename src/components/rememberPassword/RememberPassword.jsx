import InputField from "../input/InputField"
import Button from "../button/Button"
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";

const RememberPassword = () => {


  const { isLoading, completed, hasError, closeError, simulateRequest } = useSimulatedRequest();

  const handleSubmit = e =>{
    e.preventDefault();
    console.log("funciono")
    simulateRequest()
  }

  return (
    <div className="mx-auto w-[600px] h-screen flex flex-col justify-center items-center">
        <form 
           className=" shadow-lg h-1/2  bg-white items-center py-12 border w-[500px] rounded-md flex flex-col justify-evenly"   
        >
            <div className="text-center mb-2 text-3xl">
                <h2 className="mb-4 text-gray-700">Ingrese el email para cambiar su contraseña</h2>
                <hr />
            </div>
            <InputField
                type="email"
                label="Ingrese su correo"
                idInput="email"
            />
            <Button loading={isLoading} action={simulateRequest}/>
        </form>
    </div>
  )
}

export default RememberPassword 