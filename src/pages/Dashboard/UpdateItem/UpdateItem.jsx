import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useAxiosSecure from '../../../hooks/useAxiosSecure.jsx'
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";


const UpdateItem = () => {

    const item = useLoaderData()    

    console.log(item._id)

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY

    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const {
        register,
        handleSubmit,
    } = useForm()

    // handle Update item

    const handleUpdateItem = async(data) => {

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

    if(res.data.success){
        // now send the menu item data to the server with image

        const menuItem = {

            name : data.recipeName,
            recipe : data.recipeDetails,
            image : res.data.data.display_url,
            category : data.category,
            price : parseFloat(data.price)
            
        

        }

        console.log(menuItem)

        const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem)

        if(menuRes.data.modifiedCount > 0 ){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} is modified successfuly`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        
        
    }

        

    }



    return (
        <div>

            <SectionTitle

            heading={'Update Item'}
            subHeading={'Refresh Info'}
            
            ></SectionTitle>

<div className=" min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                   
                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleUpdateItem)} className="card-body w-full">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">*Recipe Name</span>
                                </label>
                                <input defaultValue={item.name} type="text" {...register("recipeName")} placeholder="Recipe Name" className="input input-bordered" required />
                            </div>

                            <div className="flex gap-4 w-full ">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text"> *Category</span>
                                    </label>
                                    <select defaultValue={item.category} className="border p-3 rounded-md" {...register("category")}>
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
                                    <input defaultValue={item.price} type="text" {...register("price")} placeholder="Price" className="input input-bordered" required />
                                </div>


                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Recipe Details</span>
                                </label>

                                <textarea defaultValue={item.recipe} {...register("recipeDetails")} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>

                            </div>



                            <div className="form-control   mt-6">
                                <input  {...register("image")} type="file" className="file-input w-full max-w-xs mt-4" />
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

export default UpdateItem;