import { Navside } from '../../components/'
import {Outlet} from 'react-router-dom'
import SidebarComponent from '../../components/navside/Sidebar'


const OfficerLayout = () => {
  return (
    <main className=' flex relative '>
        
          {/* <Navside/> */}
          <SidebarComponent/>
          <Outlet/>
      
    </main>
  )
}

export default OfficerLayout
