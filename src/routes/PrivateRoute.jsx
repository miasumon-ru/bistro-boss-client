import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate,  useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
   

    if(loading){
        return <progress className="progress w-full min-h-screen flex flex-col items-center"></progress>
    }

    if(user){
        return children
    }


    return <Navigate state={{from : location}} replace to={'/login'}></Navigate>
};

export default PrivateRoute;