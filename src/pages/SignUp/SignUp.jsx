import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {

    const { createUser, profileUpdate, logOut } = useContext(AuthContext)

    const navigate = useNavigate()
  
 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleSignUp = (data) => {

        const name = data.name


        const email = data.email
        const password = data.password
        const photoURL = data.photoURL

        console.log(email, password, name, photoURL)

        createUser(email, password,name)
        .then(res => {
                console.log(res.user)

                profileUpdate({
                    displayName : name,
                    photoURL : photoURL
                })
                .then(()=> {
                    console.log("profile is updated ")

                    // logout after successful registration

                    logOut()
                    .then(()=> {
                        console.log("logout after registration")

                        // navigate to the login page after registration
                        reset()

                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Registration is successful and please login",
                            showConfirmButton: false,
                            timer: 2500
                          });
                       setTimeout(()=> {

                        navigate("/login")

                       },2500)
                    })
                    .catch(error => console.log(error.message))

                })
                .catch(error => console.log(error.message))


                
            })
       .catch(error => {
        console.log(error.message)
       })

    }


    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now</h1>

                

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" required />

                            {errors.name?.type === 'required' && <span className="text-red-600">Name field is required</span>}

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Photo URL </span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" required />


                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" required />
                            {errors.email?.type === 'required' && <span className="text-red-600">Password field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                maxLength: 20,
                                minLength: 6,
                                pattern : /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                            })} placeholder="Password" className="input input-bordered" required />

                            {errors.password?.type === "required"  && <span className="text-red-600 mt-2">Password is required</span>}

                            {errors.password?.type === "minLength"  && <span className="text-red-600 mt-2">At least six characters needed</span>}

                            {errors.password?.type === "maxLength"  && <span className="text-red-600 mt-2">Do not cross 20 characters </span>}

                            {errors.password?.type === "pattern"  && <span className="text-red-600 mt-2">A special character, uppercase , lowercase needed </span>}
                            
                          

                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <div>
                            <p> Already have an account ? Please <Link to={'/login'}> <span className="text-xl text-blue-400" > Login </span> </Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;