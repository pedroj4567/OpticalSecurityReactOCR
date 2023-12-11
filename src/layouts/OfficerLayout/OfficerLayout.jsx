import { Navside } from '../../components/'
import {Outlet} from 'react-router-dom'


const OfficerLayout = () => {
  return (
    <main className=' flex '>
        
          <Navside/>
          <Outlet/>
      
    </main>
  )
}

export default OfficerLayout
