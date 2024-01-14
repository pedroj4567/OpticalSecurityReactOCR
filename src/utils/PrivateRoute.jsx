import { Route, useNavigate } from 'react-router-dom';
import { checkAuth } from './checkAuth';

export function PrivateRoute({ children, path, element, ...rest }) {
    console.log(rest)
 const navigate = useNavigate();
 let auth = checkAuth(); // Reemplaza esto con tu función de verificación de autenticación

 if (!auth) {
   navigate('/');
   return null;
 }
 return <Route {...rest} element={children} />;
//  return <Route {...rest} >{children}</Route>;
}