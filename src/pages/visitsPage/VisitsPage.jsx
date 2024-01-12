import { useEffect, useState } from "react";
import ErrorMessage from "../../components/messages/ErrorMessage";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import Spinner from "../../components/Spinner/Spinner";
import TableVisits from "../../components/table/TableVisits";
import SpinnerDark from "../../components/Spinner/SpinnerDark.jsx";
import useAxios from "../../utils/hooks/useAxios.jsx";
import SpinnerDisappear from "../../components/Spinner/SpinnerDissapear.jsx";
import axios from "axios";

const VisitsPage = () => {

  return (
    <section className="w-[68%] mx-auto h-screen">
      <main>
        <SpinnerDisappear />
            <div className=" px-5 text-[#522b5b] mt-5">
              <h1 className="py-5 text-3xl font-semibold">Gestion de visitas</h1>
            </div>
            <TableVisits />
        
        
       
      </main>
    </section>
  )
}
 
export default VisitsPage
