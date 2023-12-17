import MenuIcon from '../icons/MenuIcon';

const ButtonNavside = ({menuIsOpen,setMenuIsOpen}) => {
  return (
    <div className={`cursor-pointer absolute top-8 border-2 border-[#61366b] hover:border-[#ae4bc4] p-1.5  hover:text-[#ae4bc4]  transition-all  rounded-lg text-[#61366b]  ${ menuIsOpen ? " translate-x-[250px]" : "translate-x-[120px]"} z-50 delay-100 transition-all `} id='pointer' onClick={()=>{setMenuIsOpen(!menuIsOpen)}}>
           <MenuIcon/>
    </div>
  )
}

export default ButtonNavside
