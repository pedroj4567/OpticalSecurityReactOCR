import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useSession from "../../utils/hooks/useSession";
import ButtonNavSide from "../button/ButtonNavside";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";



const NavsideAdmin = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cleanStorage } = useSession();
  const [isCommunityOpen, setIsCommunityOpen] = useState(false)

  const toggleCommunity = () => {
    setIsCommunityOpen(prev => !prev)
  }
  
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
      link: "/Admin",
    },
    {
      title: "Visitas",
      link: "/Admin/visits",
    },
    // {
    //   title: "Comunidad",
    //   link: "/Admin/community",
    // }
  ]
  const handlerSession = () =>{
    cleanStorage();
    navigate('/')
  }

  const renderNavLinks = () => {
    return navLinks.map((link, index) => (
      <Link
        key={index}
        to={link.link}
        className="hover:bg-[#FFFFFF]/75 rounded-md hover:text-[#001C30] transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4"
      >
        {' '}
        <span className="text">{link.title}</span>
      </Link>
    ));
  };

  const renderCommunityLinks = () => {
    return (
      <>
        <Link
          to="/Admin/peoples"
          className="hover:bg-[#FFFFFF]/75 rounded-md bg-[#46234e] hover:text-[#001C30] transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4"
        >
          {''}
          <span className="text">Habitantes</span>
        </Link>
        <Link
          to="/Admin/family"
          className="hover:bg-[#FFFFFF]/75 rounded-md bg-[#46234e] hover:text-[#001C30] transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4"
        >
          {''}
          <span className="text">Familias</span>
        </Link>
      </>
    );
  };

  return (
    <>
      {/* Small devices (e.g., mobile) */}
      <nav className="lg:hidden w-full fixed">
        {/* Render a top navigation bar for small devices */}
        <div className="bg-[#522b5b] text-[#DAFFFB] flex justify-between items-center p-4 w-full">
          <p className="font-bold text-2xl">Optical<span className="text-slate-300">Shield</span></p>
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="text-white focus:outline-none"
          >
            {menuIsOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Render navigation links or menu based on menuIsOpen state */}
        {/* {menuIsOpen ? (
          <div className="bg-[#522b5b] text-[#DAFFFB] flex flex-col">
            {renderNavLinks()}
            <div
              onClick={toggleCommunity}
              className="hover:bg-[#FFFFFF]/75 rounded-md hover:text-[#001C30] transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4"
            >
              <div className="w-full flex items-center justify-between mr-4">
                <span className="text">Comunidades</span>
                {isCommunityOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
            {isCommunityOpen && renderCommunityLinks()}
          </div>
        ) : null} */}
      </nav>

      {/* Large devices (e.g., desktop) */}
      <aside className="hidden lg:flex flex-col h-screen fixed">
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
      <li onClick={toggleCommunity} className="hover:bg-[#FFFFFF]/75 rounded-md  hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 ">
        <div className="w-full flex items-center justify-between mr-4">
          <span className="text">Comunidades</span>
          {
            isCommunityOpen ?
            <MdKeyboardArrowUp />:
            <MdKeyboardArrowDown />
          }
          
        </div>
      </li>
      {isCommunityOpen && 
      <>
        <Link
          to={"/Admin/peoples"}
          className=" hover:bg-[#FFFFFF]/75 rounded-md bg-[#46234e] hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 "
          >
          {""}
          <span className="text">Habitantes</span>
        </Link>
        <Link
          to={"/Admin/family"}
          className=" hover:bg-[#FFFFFF]/75 rounded-md bg-[#46234e] hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 "
          >
          {""}
          <span className="text">Familias</span>
        </Link>
      </>
      }
   
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
    </>
  );
};


//   return (
//     <aside className="fixed h-screen">
//       <ButtonNavSide menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

//       <nav
//         className={`h-full ${
//           menuIsOpen ? "opacity-100 w-[200px] " : "opacity-0 delay-75 w-[0px] "
//         }  text-[#DAFFFB] delay-200 transition-all bg-[#522b5b] trasition-all flex flex-col justify-evenly shadow-xl shadow-slate-500`}
//       >
        
//         <div className="h-[150px]  flex items-center justify-center ">
//           <p className="font-bold text-2xl text-white">Optical<span className="text-slate-300">Shield</span>  </p>
//         </div>

//         <div className="w-[95%] mx-auto bg-[#FFFFFF]  h-[0.5px] "></div>

//         <div className=" h-full my-4">
//           <ul className="py-8 flex flex-col text-white">
//             {
//               navLinks.map((link,index) => (
//                 <Link
//                 key={index}
//                 to={link.link}
//                 className=" hover:bg-[#FFFFFF]/75 rounded-md  hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 "
//               >
//                 {" "}
//                 <span className="text">{link.title}</span>
//               </Link>
//               ))
//             }
//             <li onClick={toggleCommunity} className="hover:bg-[#FFFFFF]/75 rounded-md  hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 ">
//               <div className="w-full flex items-center justify-between mr-4">
//                 <span className="text">Comunidades</span>
//                 {
//                   isCommunityOpen ?
//                   <MdKeyboardArrowUp />:
//                   <MdKeyboardArrowDown />
//                 }
                
//               </div>
//             </li>
//             {isCommunityOpen && 
//             <>
//               <Link
//                 to={"/Admin/peoples"}
//                 className=" hover:bg-[#FFFFFF]/75 rounded-md bg-[#46234e] hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 "
//                 >
//                 {""}
//                 <span className="text">Habitantes</span>
//               </Link>
//               <Link
//                 to={"/Admin/family"}
//                 className=" hover:bg-[#FFFFFF]/75 rounded-md bg-[#46234e] hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 "
//                 >
//                 {""}
//                 <span className="text">Familias</span>
//               </Link>
//             </>
//             }
         
//           </ul>
//         </div>

//         <div className="w-[95%] mx-auto bg-[#FFFFFF]  h-[0.5px] "></div>

//         <div className="h-1/6  flex justify-center items-center">
//             <span  
//               className={`${menuIsOpen ? 'opacity-100' : "opacity-0"} hover:bg-[#FFFFFF]/75 rounded-md hover:text-[#001C30] cursor-pointer transition-all py-2 px-4 text-lg flex text-white`}
//               onClick={handlerSession}
//             >
//               Cerrar Sesión
//             </span>
//         </div>
//       </nav>
//     </aside>
//   );
// };

export default NavsideAdmin;
