import React, { useState } from 'react'
import CommunityUsers from './CommunityUsers'
import { UserCommunityForm } from './UserCommunityForm'

export const CommunityComponent = () => {

  const [formData, setFormData] = useState({
    id: '',
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
    <div className='flex w-full'>
        <div className='flex-[3]'>
            <CommunityUsers />
        </div>
        <div className='flex-1'>
            <UserCommunityForm handleChange={handleChange} formData={formData}/>
        </div>
    </div>
  )
}
