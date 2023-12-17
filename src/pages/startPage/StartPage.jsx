import { Camera } from "../../components" 
const StartPage = () => {
  return (
    <section className="w-4/6 mx-auto h-screen  p-9 flex flex-col ">
        <div className=" w-full h-[44px] flex justify-between px-4 items-center ">
            <div>
                <h1 className="text-[32px] text-[#522b5b] font-medium ">Bienvenido Usuario</h1>
            </div>
            <div>
                <p className="text-xl text-[#522b5b]" >23/02/12</p>
            </div>
        </div>

        <div className=" mt-10 h-1/2 ">
            <Camera/>
        </div>
    </section>
  )
}

export default StartPage
