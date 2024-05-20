import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";



const SignUp = () => {

    const {createUser} = useContext(AuthContext)



    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const handleSignUp = (data) => {

        const name  = data.name


        const email = data.email
        const password = data.password

        console.log(email, password, name)

        createUser(email, password)
        .then(res => {
            console.log(res.user)
        })
        .then(error => {
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
                        <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Password" className="input input-bordered" required />

                    </div>

                   

                    <div className="form-control mt-6">
                        <button  className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;