import { useContext, useEffect, useState } from "react"
import UsersContext from "../../context/usersContext/UsersContext"
import { transformToDataTable } from "../../utils/transformToDataTable"
import SpinnerDisappear from "../../components/Spinner/SpinnerDissapear"
import TableComponent from "../../components/table/TableComponent"
import { UserForm } from "./userForm"

const UsersPage = () => {

    const { 
      data,
      dataPost, dataDelete, dataPatch, dataSingle, loading,loadingPost, loadingDelete,
      loadingPatch, loadingSingle, error, errorPost, errorDelete, errorPatch, errorSingle, 
      createData, updateData, deleteData, fetchDataSingle, fetchData
  } = useContext(UsersContext)
  
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
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

    const [formData, setFormData] = useState({
      userName: "",
      email: "",
      password: "",
  
    });

    useEffect(() => {
      fetchData("/person")
    }, [])
  
    useEffect(() => {
      console.log(data)
    }, [data])
    
  function toggleForm() {
    setIsFormOpen((prev) => !prev);
    setCurrentUserId(null);
    setFormData([]);
  }
  function closeDeleteModal() {
    setIsDeleteOpen((prev) => !prev);
    setCurrentUserId(null);
  }
  function openDeleteModal(id) {
    setCurrentUserId(id);
    setIsDeleteOpen((prev) => !prev);
  }
  function openEditForm(id) {
    setCurrentUserId(id);
    setIsFormOpen((prev) => !prev);
  }
  
    return (
      <section className="w-[68%] mx-auto h-screen">
        <main>
          <SpinnerDisappear />
              <div className=" px-5 text-[#522b5b] mt-5">
                <h1 className="py-5 text-3xl font-semibold">Gestion de usuarios</h1>
              </div>
                  {isFormOpen && (
                    <UserForm
                      formData={formData}
                      setFormData={setFormData}
                      setId={setCurrentUserId}
                      id={currentUserId}
                      toggleForm={toggleForm}
                      patch={updateData}
                      create={createData}
                    />
                  )} 
              {/* <TableVisits /> */}
              <div className="mt-16"></div>
              <TableComponent data={tableData} columns={columns} loading={loading} createAction={toggleForm} actionEdit={openEditForm}/>
        </main>
      </section>
    )
  }
   
  export default UsersPage
  