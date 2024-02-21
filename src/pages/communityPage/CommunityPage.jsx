import { useContext, useEffect, useState } from "react";
import { CommunityComponent } from "../../components/community/CommunityComponent";
import PeopleContext from "../../context/peopleContext/PeopleContext";
import { transformToDataTable } from "../../utils/transformToDataTable";
import TableComponent from "../../components/table/TableComponent";
import { UserCommunityForm } from "../../components/community/UserCommunityForm";
import ErrorMessage from "../../components/messages/ErrorMessage";
import DynamicForm from "../../components/form/DinamycForm";
import TwoStepDynamicForm from "../../components/form/TwoStepsDinamycForm";

const CommunityPage = () => {
  const { 
    data,
    dataPost, dataDelete, dataPatch, dataSingle, loading,loadingPost, loadingDelete,
    loadingPatch, loadingSingle, error, errorPost, errorDelete, errorPatch, errorSingle, 
    createData, updateData, deleteData, fetchDataSingle, fetchData
} = useContext(PeopleContext)

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

 const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Apellido', accessor: 'lastname' },
    { Header: 'Telefono', accessor: 'n_phone' },
    { Header: 'Cedula', accessor: 'identification' },
  ];

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    n_phone: 0,
    identification: "",
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

  const fields = [
    { name: 'name', label: 'Name', default: 'John' },
    { name: 'lastname', label: 'Last Name', default: 'Doe' },
    { name: 'n_phone', label: 'Phone Number', type: 'number',  },
    { name: 'identification', label: 'Identification', default: 'ABC123' },
    { name: 'gender', label: 'Gender', type: 'select', isMulti: false, options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ], default: 'male' },
    // ... other fields
  ];

  const steps = [
    [
      { name: 'name', label: 'Name', type: 'text', default: '', errorMsg: 'Name is required' },
      { name: 'email', label: 'Email', type: 'text', default: '', errorMsg: 'Email is required' },
    ],
    [
      { name: 'age', label: 'Age', type: 'number', default: 0, errorMsg: 'Age is required' },
      { name: 'gender', label: 'Gender', type: 'select', isMulti: true, options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ], default: '', errorMsg: 'Gender is required' },
    ],
    [
      { name: 'age', label: 'Age', type: 'number', default: 0, errorMsg: 'Age is required' },
      { name: 'gender', label: 'Gender', type: 'select', isMulti: true, options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ], default: '', errorMsg: 'Gender is required' },
    ],
    [
      { name: 'age', label: 'Age', type: 'number', default: 0, errorMsg: 'Age is required' },
      { name: 'gender', label: 'Gender', type: 'select', isMulti: true, options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ], default: '', errorMsg: 'Gender is required' },
    ],
  ];

  const handleFormSubmit = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <section className="w-[65%] mx-auto h-screen">
      <main>
        <div className="mt-20"></div>
        {/* <CommunityComponent /> */}
        {/* <DynamicForm fields={fields} onSubmit={handleFormSubmit} /> */}
        {/* <TwoStepDynamicForm steps={steps} onSubmit={handleFormSubmit} /> */}
        {isFormOpen && (
        <UserCommunityForm
          formData={formData}
          setFormData={setFormData}
          setId={setCurrentUserId}
          id={currentUserId}
          toggleForm={toggleForm}
          patch={updateData}
          create={createData}
        />
      )}
      {isDeleteOpen && (
        <ErrorMessage
          msg={"¿Estás seguro que quieres eliminar?"}
          btnMsg={"Eliminar"}
          close={closeDeleteModal}
          url="person"
          action={deleteData}
          id={currentUserId}
        />
      )}
        <TableComponent data={data? data.people : []} columns={columns} loading={loading} actionEdit={openEditForm} createAction={toggleForm} deleteAction={openDeleteModal}/>
      </main>
    </section>
  );
};

export default CommunityPage;
