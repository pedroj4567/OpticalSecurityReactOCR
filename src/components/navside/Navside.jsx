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
    <aside className="realative">
      <ButtonNavSide menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <nav
        className={`h-screen ${
          menuIsOpen ? "opacity-100 w-[230px] " : "opacity-0 delay-75 w-[0px] "
        }  text-[#DAFFFB] delay-200 transition-all bg-[#016A70] flex flex-col justify-evenly`}
      >
        <div className="h-[240px] flex flex-col justify-center items-center rounded-lg border-b-slate-950 relative">
          <div
            className={`${!menuIsOpen ? "p-0" : "p-2"} transition-all`}
          ></div>

          <div className={`${!menuIsOpen ? "hidden fade" : ""}`}>
            <p className="text-[#FFFFFF] font-semibold px-4  rounded-xl">
              {"Pedro Acosta"}
            </p>
          </div>
        </div>

        <div className="w-[95%] mx-auto bg-[#DAFFFB]  h-[0.5px] "></div>

        <div className=" h-full my-4">
          <ul className="py-8 flex flex-col">
            <Link
              to="/officer"
              className=" hover:bg-[#DAFFFB]  hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 "
            >
              {" "}
              <span className="text">Inicio</span>
            </Link>
            <Link
              to="/officer/visits"
              className=" hover:bg-[#DAFFFB] hover:text-[#001C30] transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4"
            >
              <span className="text">Visita</span>
            </Link>
          </ul>
        </div>
        <div className="w-[95%] mx-auto bg-[#DAFFFB]  h-[0.5px] "></div>

        <div className="h-1/6  flex justify-center items-center">
          {/* <MenuItems/> */}
        </div>
      </nav>
    </aside>
  );
};

export default Navside;
