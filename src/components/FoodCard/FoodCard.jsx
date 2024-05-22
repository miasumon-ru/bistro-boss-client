import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import {  useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {

    const axiosSecure = useAxiosSecure()

    const [,refetch] = useCart()

    const { name, image, price, recipe, _id } = item



    const navigate = useNavigate()

    const  location = useLocation()


    const {user} = useAuth()

    const handleAddToCart = () => {

    
        if(user && user?.email){
           
            const cartItem = {
                menuId : _id,
                email : user?.email,
                name,
                image,
                price
            }

            console.log(cartItem)

           axiosSecure.post("/carts", cartItem)
           .then(res => {
            console.log(res.data)

            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: `${name} is added `,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

            refetch()

           })
           .catch(error => {
            console.log(error.message)
           })

        }
        else {
            Swal.fire({
                title: "Login",
                text: "Please Login before Add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes , login!"
              }).then((result) => {
                if (result.isConfirmed) {

                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
    

                navigate('/login', {state : {from : location}} )

            

                }
              });
        }

    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute  right-4 top-6 px-4 rounded-md font-bold text-white"> ${price} </p>
            <div className="card-body flex flex-col text-center items-center">
                <h2 className="card-title"> {name} </h2>
                <p> {recipe} </p>
                
                <div className="card-actions">
                    <button onClick={handleAddToCart} className="btn btn-primary my-2"> Add To Card </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;