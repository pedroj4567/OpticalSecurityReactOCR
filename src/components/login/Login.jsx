import InputField from "../input/InputField";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { decodeToken } from "../../utils/decodeToken";
import { checkAuth } from "../../utils/checkAuth";
import useAxios from "../../utils/axios/useAxios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [responseAuth, setResponseAuth] = useState();
  const [errorAuth, setErrorAuth] = useState();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { createData, data, error, loading } = useAxios();

  // const baseURL = "http://localhost:3200/api/v1/auth/login"

  // const baseURL = "https://558f-186-92-40-5.ngrok-free.app/api/v1/auth/login"

  const authMethod = async (body) => {
    setIsLoadingAuth(true);
    try {
      const { email, password } = body;
      await createData("/auth/login", {
        data: {
          email,
          password,
        },
      });

      if (error) {
        console.log("fucniono");
        setIsLoadingAuth(false);

        const { data } = error.response;
        toast.error(data.msg);
        return;
      }

      if (data.token) {
        // Save the token to local storage
        localStorage.setItem("authToken", data.token);
        setResponseAuth(data);
      }
    } catch (error) {
      setErrorAuth(error);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const decodedToken = decodeToken(token);

    if (checkAuth()) {
      // Check if authentication is successful
      // console.log("Authentication successful");
      // console.log("Decoded token", decodedToken);

      // Conditional navigation based on the role in the decoded token
      if (
        decodedToken &&
        decodedToken.roleOptions &&
        decodedToken.roleOptions.name
      ) {
        window.location.reload(true);
        navigate(`/${decodedToken.roleOptions.name.toLowerCase()}`);
      }
    } else {
      // Handle unsuccessful authentication (optional)
    }
  }, [responseAuth]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const decodedToken = decodeToken(token);
  }, [responseAuth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*\d).{8,}$/;

    const isPasswordValid = passwordRegex.test(formData.password);

    let currentErrors = {};

    if (!formData.email.trim()) {
      currentErrors.email = "El email es requerido";
    }
   
    if (!formData.password.trim()) {
      toast.error("Contraseña es requerida");
      return;
    }

    if(!isPasswordValid)  {
      toast.error("La contraseña debe ser de 8 carácteres y al menos un número");
      return;
    }
    // Handle form submission logic here (e.g., send data to backend)
    authMethod(formData);
  };

  return (
    <div className="mx-auto w-[600px] h-screen flex flex-col justify-center items-center">
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          className: "",
          duration: 1300,
          style: {
            background: "#522b5b",
            color: "#fff",
          },
        }}
      />
      <form
        className=" shadow-lg h-3/4  bg-white items-center py-12 border w-[500px] rounded-md flex flex-col justify-evenly"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-2 text-3xl">
          <h2 className="mb-4 text-gray-700">
            Bienvenido a{" "}
            <span className="text-[#61366b] font-semibold">OptiShield</span>
          </h2>
          <hr />
        </div>
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
        <Button loading={isLoadingAuth} />

        <div className=" w-[90%] flex flex-col items-center gap-7 py-10">
          {/* <Link to={"/register"}>¿No tienes cuenta? Registrate</Link> */}
          <Link to={"/verify"}>¿Olvido su contraseña?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
