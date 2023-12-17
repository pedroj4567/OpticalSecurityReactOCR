import {Outlet} from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className= "h-screen">
        <Outlet/>
    </main>
  )
}

export default AuthLayout
