import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form"

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const captchaRef = useRef(null)

    const [disabled, setDisabled] = useState(true)

    const {login} = useContext(AuthContext)

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const handleLogin = (data) => {


        const email = data.email
        const password = data.password

        console.log(email, password)

        login(email, password)
        .then(res => {
            console.log(res.user)
        })
        .then(error => console.log(error.message))

    }

    useEffect(()=> {
        loadCaptchaEnginge(6); 
    }, [])


    const handleCaptcha = () => {

        const userCaptchaValue = captchaRef.current.value

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
                            <input type="text" {...register("password")} placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            
                            <input ref={captchaRef}  type="text" name="captcha"  placeholder="type captcha" className="input input-bordered" required />

                            <button onClick={handleCaptcha} className="btn btn-xs my-2"> validate</button>

                        </div>

                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;