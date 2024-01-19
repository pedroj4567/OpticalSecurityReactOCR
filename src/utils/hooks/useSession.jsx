import { decodeToken } from "../decodeToken";

//este hook maneja la session
const token = localStorage.getItem('authToken');

const useSession = () => {
    return {
        
    getSessionInfo(){
        if(token){
            const info = decodeToken(token);
            return info || {}
        }
    
    },
    cleanStorage(){
        localStorage.clear()
    }
}
}

export default useSession;
