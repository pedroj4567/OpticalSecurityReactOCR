import { useState } from "react"
import Spinner from "../Spinner/Spinner"
const Button = ({loading, action}) => {
  
  // const [loading, setLoading] = useState(true);


  return (
    <div className="w-full  h-[50px] flex justify-center mt-5">
      <button type="submit" className="border w-[340px] h-[45px] rounded-lg bg-[#522b5b] hover:bg-[#6d3978] transition-all text-[#FFFFFF]">{loading ? <Spinner/> : "Ingresar"}</button>
    </div>
  )
}

export default Button
