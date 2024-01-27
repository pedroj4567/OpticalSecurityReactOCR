
import CommunityUsers from '../CommunityUsers';
import useAxios from '../../../utils/hooks/useAxios';

export const PeopleComponent = () => {
    const { response: usersResponse, loading: usersLoading, error: usersError, fetchData: fetchUsersData } = useAxios({
        method: 'get',
        url: 'person',
      });
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
       
    </div>
  )
}
