import imageMock from '../../assets/preview.png'
import PlateNotFound from '../messages/PlateNotFound'
const SectionInfo = () => {
  return (
    <section className="h-[700px] mt-4 bg-[#522b5b] pb-6 rounded-l w-1/2">
        <div className="bg-white rounded w-[250px] mx-auto mt-4">
            <img className="h-[200px] w-[220px] mx-auto" src={imageMock} alt="imagen de vista" srcSet="preview image" />

        </div>
        <div className="flex justify-evenly flex-col items-center mt-4 mx-4 gap-2">
            <button className="bg-white hover:bg-green-500 hover:text-white transition-all w-1/2 rounded-lg text-[#522b5b] font-medium py-1">Verificar</button>


        </div>

        <section className="bg-white h-2/4 w-[550px] mx-auto mt-8 p-5">
         <PlateNotFound/>
        </section>

      
    </section>
  )
}

export default SectionInfo