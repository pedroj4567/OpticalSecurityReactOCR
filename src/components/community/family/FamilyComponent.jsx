import React from 'react'
import useAxios from '../../../utils/hooks/useAxios';
import CommunityFamily from '../CommunityFamiliy';

export const FamilyComponent = () => {
    const { response: familyResponse, loading: familyLoading, error: familyError, fetchData: fetchFamilyData } = useAxios({
        method: 'get',
        url: 'family',
      });
  return (
    <div className='flex w-full gap-4'>
     
        <div className='flex flex-col flex-1 '>
        
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
