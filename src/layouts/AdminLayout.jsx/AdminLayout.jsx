import {Outlet} from 'react-router-dom'
import NavsideAdmin from '../../components/navside/NavsideAdmin'


const AdminLayout = () => {
  return (
    <main className=' flex relative '>
        
          <NavsideAdmin/>
          <Outlet/>
      
    </main>
  )
}

export default AdminLayout