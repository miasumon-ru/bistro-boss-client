import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";



const AdminRoutes = ({children}) => {

    const [isAdmin, isLoading,  isAdminLoading] = useAdmin()

    const {user, loading} = useAuth()

    const location = useLocation()

    if(loading || isLoading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children
    }


    return <Navigate to={'/login'} state={{from : location}} replace ></Navigate>
};

export default AdminRoutes;