const InputField = ({label, type, idInput, error, value, onChange, name}) => {
  return (
    <div className="relative my-4 flex flex-col">
        <input type={type} id={idInput} onChange={onChange} name={name} className=" w-[370px]  px-2.5 pb-2.5 pt-5 text-sm text-[#000000]  border-0 border-b-2 border-gray-300 appearance-none dark:text--dark dark:border-[#893d9a] dark:focus:border-[#893d9a] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor={`${idInput}`}  className="absolute text-md  dark:text-[#893d9a] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#893d9a] peer-focus:dark:text-[#893d9a] peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{label}</label>
    </div>

  )
}

export default InputField;
