import { useContext, useEffect, useState } from "react";
import ErrorMessage from "../../components/messages/ErrorMessage";
import useSimulatedRequest from "../../utils/hooks/useSimulatedRequest";
import Spinner from "../../components/Spinner/Spinner";
import TableVisits from "../../components/table/TableVisits";
import SpinnerDark from "../../components/Spinner/SpinnerDark.jsx";
import useAxios from "../../utils/hooks/useAxios.jsx";
import SpinnerDisappear from "../../components/Spinner/SpinnerDissapear.jsx";
import axios from "axios";
import TableComponent from "../../components/table/TableComponent.jsx";
import { VisitsContext } from "../../context/visitsContext/VisitsProvider.jsx";
import { transformToDataTable } from "../../utils/transformToDataTable.js";

const VisitsPage = () => {

  const { 
    data,
    dataPost, dataDelete, dataPatch, dataSingle, loading,loadingPost, loadingDelete,
    loadingPatch, loadingSingle, error, errorPost, errorDelete, errorPatch, errorSingle, 
    createData, updateData, deleteData, fetchDataSingle, fetchData
} = useContext(VisitsContext)

  useEffect(() => {
    fetchData("/visit")
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

const {data: tableData, columns} = transformToDataTable(data)
  // const data = [
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   { name: 'John', lastname: 'Doe', phone: '123-456-7890' },
  //   { name: 'Jane', lastname: 'Doe', phone: '987-654-3210' },
  //   // Add more data as needed
  // ];
  
  // const columns = [
  //   { Header: 'Name', accessor: 'name' },
  //   { Header: 'Lastname', accessor: 'lastname' },
  //   { Header: 'Phone', accessor: 'phone' },
  //   // Add more columns as needed
  // ];

  useEffect(() => {
    console.log(loading)
  }, [loading])

  return (
    <section className="w-[68%] mx-auto h-screen">
      <main>
        <SpinnerDisappear />
            <div className=" px-5 text-[#522b5b] mt-5">
              <h1 className="py-5 text-3xl font-semibold">Gestion de visitas</h1>
            </div>
            {/* <TableVisits /> */}
            <div className="mt-16"></div>
            <TableComponent data={tableData} columns={columns} loading={loading}/>
      </main>
    </section>
  )
}
 
export default VisitsPage
