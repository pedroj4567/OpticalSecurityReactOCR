import { decodeToken } from "./decodeToken";

export function checkAuth() {
    const token = localStorage.getItem('authToken');
    const decodedToken = decodeToken(token);
   
    if (!decodedToken || Date.now() >= decodedToken.exp * 1000) {
     // El token no existe o ha expirado.
     return false;
    }
   
    // El token existe y no ha expirado.
    return true;
   }