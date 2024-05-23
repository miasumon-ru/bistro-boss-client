import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {

    const {googleLogin} = useAuth()

    const navigate = useNavigate()

    const handleGoogleLogin = () => {

        googleLogin()
        .then(res => {
            console.log(res.user)

            navigate('/')


        })

    }

    return (
        <div>

            <div className="mt-4">
                 <p onClick={handleGoogleLogin} className="btn w-full "> <FaGoogle className="text-xl"></FaGoogle> Sign With Google </p>
            </div>
            
        </div>
    );
};

export default SocialLogin;