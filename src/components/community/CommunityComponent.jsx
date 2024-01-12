import React, { useEffect, useState } from 'react'
import { UserCommunityForm } from './UserCommunityForm'
import ErrorMessage from '../messages/ErrorMessage';
import { FaPlusCircle } from 'react-icons/fa';
import { FamilyCommunityForm } from './FamilyCommunityForm';
import CommunityUsers from './CommunityUsers';
import CommunityFamily from './CommunityFamiliy';
import axios from 'axios';
import useAxios from '../../utils/hooks/useAxios';


export const CommunityComponent = () => {
 
const { response: usersResponse, loading: usersLoading, error: usersError, fetchData: fetchUsersData } = useAxios({
  method: 'get',
  url: '/users',
});



// Second request for CommunityFamily
const { response: familyResponse, loading: familyLoading, error: familyError, fetchData: fetchFamilyData } = useAxios({
  method: 'get',
  url: 'family',
});


 

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
    <div className='flex w-full gap-4'>
        <div className='flex flex-col flex-1 '>
            <CommunityUsers 
              response={usersResponse}
              loading={usersLoading}
              error={usersError}
              fetchData={fetchUsersData}
            />
        </div>
        <div className='flex flex-col flex-[2] '>
        
         <CommunityFamily 
            response={familyResponse}
            loading={familyLoading}
            error={familyError}
            fetchData={fetchFamilyData}
          />
           
        </div>
    </div>
  )
}
