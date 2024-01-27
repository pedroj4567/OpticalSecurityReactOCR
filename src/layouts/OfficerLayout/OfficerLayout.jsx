import { Navside } from '../../components/'
import {Outlet} from 'react-router-dom'
// import SidebarComponent from '../../components/navside/Sidebar'
import NavsideAdmin from '../../components/navside/NavsideAdmin'


const OfficerLayout = () => {
  return (
    <main className=' flex relative '>
        
          {/* <Navside/> */}
          {/* <SidebarComponent/> */}
          <Navside />
          <Outlet/>
      
    </main>
  )
}

export default OfficerLayout
