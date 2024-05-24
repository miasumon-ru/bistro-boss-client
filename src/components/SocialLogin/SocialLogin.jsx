import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const SocialLogin = () => {
     
    const axiosPublic = useAxiosPublic()
    const {googleLogin} = useAuth()

    const navigate = useNavigate()


    const handleGoogleLogin = () => {

        googleLogin()
        .then(res => {
            console.log(res.user)

            // insert email if he does not exist in the database

            const userInfo = {
                email : res.user?.email,
                name : res.user?.displayName
            }

            console.log(userInfo)
             
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
            })


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