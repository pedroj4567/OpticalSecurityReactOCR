import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import MenuItems from './menuItem/MenuItems';
import { useState } from 'react';


const Navside = () => {
  const [menuIsOpen ,setMenuIsOpen] = useState(true);
  
  const hiddenLetters = () =>{
    const links = document.querySelectorAll('a')
    links.forEach((link)=>{
      if(!menuIsOpen){
        link.querySelector('.text').style.display = 'none';
       
      }else{
        link.querySelector('.text').style.display = 'inline';
      }
      
    })

  }

  hiddenLetters()
 

  return (
    <aside className="">
        <nav className= {`h-screen ${menuIsOpen ? "w-[230px]" : "w-[100px]"} text-[#DAFFFB]  transition-all bg-[#016A70] flex flex-col justify-evenly`}>

            <div className="h-[240px] flex flex-col justify-center items-center rounded-lg border-b-slate-950 relative">

                {/* <div className={`cursor-pointer absolute top-2 right-4 ${ menuIsOpen ? "" : "rotate-180"}  delay-100 transition-all `} id='pointer' onClick={()=>{setMenuIsOpen(!menuIsOpen)}}>
                  <ArrowBackIosNewIcon/>
                </div> */}

                <div className={`${!menuIsOpen ? "py-0" : "py-4"}`}>
                    <Avatar
                      variant="rounded"
                    />
                </div>

                <div className={`${!menuIsOpen ? "hidden fade" : ""}`}>
                  <p className='text-[#FFFFFF] font-semibold px-4  rounded-xl'>{"Pedro Acosta"}</p>
                </div>
            </div>

            <div className='w-[95%] mx-auto bg-[#DAFFFB]  h-[0.5px] '></div>
            
            <div className=" h-full my-4">
              <ul className="py-8 flex flex-col">
                <Link to="/officer" className=' hover:bg-[#DAFFFB]  hover:text-[#001C30]  transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4 '> <HomeIcon className='mr-2' /> <span className='text'>Inicio</span></Link>
                <Link to="/officer/visits" className=' hover:bg-[#DAFFFB] hover:text-[#001C30] transition-all py-2 mx-2 mb-3 text-lg flex items-center justify-start pl-4'> <DirectionsCarIcon className='mr-2' />  <span className='text'>Visita</span></Link>
              </ul>
            </div>
            <div className='w-[95%] mx-auto bg-[#DAFFFB]  h-[0.5px] '></div>

            <div className="h-1/6  flex justify-center items-center">
                <MenuItems/>
            </div>
        </nav>
    </aside>
  )
}

export default Navside
