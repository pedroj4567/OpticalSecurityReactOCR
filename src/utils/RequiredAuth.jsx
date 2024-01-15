import { useLocation, Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "./checkAuth";
import { decodeToken } from "./decodeToken";


const RequireAuth = ({ allowedRoles, layout: Layout }) => {
    const auth = checkAuth(); // Replace with your authentication logic
    
    const token = localStorage.getItem('authToken');
    const decodedToken = decodeToken(token);

    console.log(decodeToken)
    console.log(auth)
    return auth && decodedToken.roleOptions && allowedRoles.includes(decodedToken.roleOptions.name) ? (
      <Layout>
        <Outlet />
      </Layout>
    ) :
    <Navigate to="/" state={{ from: location }} />;
  };
  
  export default RequireAuth;
