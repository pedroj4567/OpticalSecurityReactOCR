import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useSession from "../../utils/hooks/useSession";

import ButtonNavSide from "../button/ButtonNavside";

const Navside = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cleanStorage } = useSession();

  const hiddenLetters = () => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (!menuIsOpen) {
        link.classList.toggle("hide")
      } else {
        link.classList.toggle("inline");
      }
    });
  };

  hiddenLetters();

  const navLinks = [
    {
      title: "Inicio",
      link: "/officer",
    },
    {
      title: "Visita",
      link: "/officer/visits",
    },
    // {
    //   title: "Visita",
    //   link: "/officer/visits",
    // },
    // {
    //   title: "Comunidad",
    //   link: "/officer/community",
    // }
  ]
  const handlerSession = () =>{
    cleanStorage();
    navigate('/')
    // window.location.reload(true);

  }
  return (
    <aside className="fixed h-screen">
      <ButtonNavSide menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <nav
        className={`h-full ${
          menuIsOpen ? "opacity-100 w-[200px] " : "opacity-0 delay-75 w-[0px] "
        }  text-[#DAFFFB] delay-200 transition-all bg-[#522b5b] trasition-all flex flex-col justify-evenly shadow-xl shadow-slate-500`}
      >
        
        <div className="h-[150px]  flex items-center justify-center ">
          <p className="font-bold text-2xl text-white">Optical<span className="text-slate-300">Shield</span>  </p>
        </div>

        <div className="w-[95%] mx-auto bg-[#FFFFFF]  h-[0.5px] "></div>

        <div className=" h-full my-4">
          <ul className="py-8 flex flex-col text-white">
            {
              navLinks.map((link,index) => (
                <Link
                key={index}
                to={link.link}
                className=" hover:bg-[#FFFFFF]/75 rounded-md  hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 "
              >
                {" "}
                <span className="text">{link.title}</span>
              </Link>
              ))
            }
            {/* <Link
              to="/officer"
              className=" hover:bg-[#FFFFFF]/75 rounded-md  hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 "
            >
              {" "}
              <span className="text">Inicio</span>
            </Link>
            <Link
              to="/officer/visits"
              className=" hover:bg-[#FFFFFF]/75 rounded-md hover:text-[#001C30] transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4"
            >
              <span className="text">Visita</span>
            </Link> */}
          </ul>
        </div>

        <div className="w-[95%] mx-auto bg-[#FFFFFF]  h-[0.5px] "></div>

        <div className="h-1/6  flex justify-center items-center">
            <span  
              className={`${menuIsOpen ? 'opacity-100' : "opacity-0"} hover:bg-[#FFFFFF]/75 rounded-md hover:text-[#001C30] cursor-pointer transition-all py-2 px-4 text-lg flex text-white`}
              onClick={handlerSession}
            >
              Cerrar Sesión
            </span>
        </div>
      </nav>
    </aside>
  );
};

export default Navside;
