import { useLocation, Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "./checkAuth";


const RequireAuth = ({ allowedRoles }) => {
    let auth = checkAuth(); 
    const location = useLocation();

    return (
        auth ?
        <Outlet />
        :
        <Navigate to="/" state={{ from: location }} replace />

        // auth?.roles?.find(role => allowedRoles?.includes(role))
        //     ? <Outlet />
        //     : auth?.accessToken 
        //         ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        //         : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;

// import React from "react";
// import { useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
// import { checkAuth } from "./checkAuth";

// const RequireAuth = ({ children, allowedRoles }) => {
//   let auth = checkAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   if (!auth) {
//     console.log("No auth")
//     // Redirect to login page if not authenticated
//     navigate("/", { state: { from: location } });
//     return null;
//   }

//   // If you want to check for allowed roles, uncomment the following lines
//   // if (
//   //   allowedRoles &&
//   //   !auth.roles?.some((role) => allowedRoles.includes(role))
//   // ) {
//   //   // Redirect to unauthorized page if roles are not allowed
//   //   navigate("/unauthorized", { state: { from: location } });
//   //   return null;
//   // }

//   return <Outlet />;
// };

// export default RequireAuth;
