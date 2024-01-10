import React, { useState } from 'react'
import CommunityUsers from './CommunityUsers'
import { UserCommunityForm } from './UserCommunityForm'
import ErrorMessage from '../messages/ErrorMessage';
import CommunityFamilies from './CommunityUsers';
import { FaPlusCircle } from 'react-icons/fa';
import { FamilyCommunityForm } from './FamilyCommunityForm';


export const CommunityComponent = () => {


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className='flex w-full '>
      <FamilyCommunityForm />
        <div className='flex flex-col flex-1'>
        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center self-end">
              Create
              <FaPlusCircle className="w-4 h-4 mr-2" />
          </button>
            <CommunityUsers />
        </div>
        <div className='flex flex-col flex-1'>
          <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center self-end">
              Create
              <FaPlusCircle className="w-4 h-4 mr-2" />
          </button>
          <CommunityFamilies />
            {/* <UserCommunityForm handleChange={handleChange} formData={formData} setformData={setFormData}/> */}
        </div>
    </div>
  )
}
