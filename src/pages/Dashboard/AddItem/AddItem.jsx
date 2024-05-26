import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import useAxiosPublic from '../../../hooks/useAxiosPublic'



const AddItem = () => {

    const axiosPublic = useAxiosPublic()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY

    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


    const {
        register,
        handleSubmit,
    } = useForm()


    const handleAddItem = async(data) => {

        console.log(data)

        const imageFile = {
            image : data.image[0]
        }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers : {
                'content-type' : 'multipart/form-data'
            }

            
        }

    )

    console.log(res.data.data.display_url)

        

    }

   



    return (
        <div>

            <SectionTitle

                heading={"Add an Item"}
                subHeading={"What's new ?"}
            >

            </SectionTitle>


            <div className=" min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleAddItem)} className="card-body w-full">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">*Recipe Name</span>
                                </label>
                                <input type="text" {...register("recipeName")} placeholder="Recipe Name" className="input input-bordered" required />
                            </div>

                            <div className="flex gap-4 w-full ">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text"> *Category</span>
                                    </label>
                                    <select className="border p-3 rounded-md" {...register("category")}>
                                        <option value="salad">Salad</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="soup">Soup</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drink">Drink</option>
                                    </select>

                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" {...register("price")} placeholder="Price" className="input input-bordered" required />
                                </div>


                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Recipe Details</span>
                                </label>

                                <textarea {...register("recipeDetails")} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>

                            </div>



                            <div className="form-control   mt-6">
                                <input {...register("image")} type="file" className="file-input w-full max-w-xs mt-4" />
                            </div>





                            <div className="form-control   mt-6">
                                <button className="btn btn-primary ">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddItem;