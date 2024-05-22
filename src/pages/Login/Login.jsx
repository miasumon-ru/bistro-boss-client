import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";


const Login = () => {

  
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(true)

    const {login} = useContext(AuthContext)

    const location = useLocation()
    
    const from = location?.state?.from?.pathname || '/'

    console.log('state in the login ', from)

    const {
        register,
        handleSubmit
    } = useForm()

    const handleLogin = (data) => {


        const email = data.email
        const password = data.password

        console.log(email, password)

        login(email, password)
        .then(res => {
            console.log(res.user)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login is successful",
                showConfirmButton: false,
                timer: 1500
              });

           setTimeout(()=> {
            navigate(from , {replace : true}) 

           }, 2000)
        })
        .catch(error => console.log(error.message))

    }

    useEffect(()=> {
        loadCaptchaEnginge(6); 
    }, [])


    const handleCaptcha = (e) => {

        const userCaptchaValue = e.target.value

        console.log(e.target.value)

        if(validateCaptcha(userCaptchaValue)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }

        

    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            
                            <input onBlur={handleCaptcha}  type="text" name="captcha"  placeholder="type captcha" className="input input-bordered"  />

                            

                        </div>

                        <div className="form-control mt-6">
                            <button disabled={false} className="btn btn-primary">Login</button>
                        </div>

                        <div>
                            <p> New here ? Please <Link to={'/signUp'}> <span className="text-xl text-blue-400" > Register </span> </Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;