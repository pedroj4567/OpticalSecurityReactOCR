import { Link } from "react-router-dom";
import { useState } from "react";

import ButtonNavSide from "../button/ButtonNavside";

const Navside = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const hiddenLetters = () => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (!menuIsOpen) {
        link.querySelector(".text").style.display = "none";
      } else {
        link.querySelector(".text").style.display = "inline";
      }
    });
  };

  hiddenLetters();

  return (
    <aside className="absolute h-screen">
      <ButtonNavSide menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <nav
        className={`h-full ${
          menuIsOpen ? "opacity-100 w-[200px] " : "opacity-0 delay-75 w-[0px] "
        }  text-[#DAFFFB] delay-200 transition-all bg-[#522b5b] trasition-all flex flex-col justify-evenly shadow-xl shadow-slate-500`}
      >
        
        <div className="h-[150px]  flex items-center justify-center ">
          <p className="font-bold text-2xl">Optical<span className="text-black">Shield</span>  </p>
        </div>

        <div className="w-[95%] mx-auto bg-[#FFFFFF]  h-[0.5px] "></div>

        <div className=" h-full my-4">
          <ul className="py-8 flex flex-col text-white">
            <Link
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
            </Link>
          </ul>
        </div>

        <div className="w-[95%] mx-auto bg-[#FFFFFF]  h-[0.5px] "></div>

        <div className="h-1/6  flex justify-center items-center">
            <Link
              to="/"
              classNamE={`${menuIsOpen ? 'opacity-100' : "opacity-0"} hover:bg-[#FFFFFF]/75 rounded-md hover:text-[#001C30] transition-all py-2 px-4 text-lg flex text-white`}
            >
              <span className="text">Cerrar Sesion</span>
            </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Navside;
