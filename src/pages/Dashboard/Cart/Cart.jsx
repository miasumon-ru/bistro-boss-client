import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";



const Cart = () => {

    const [cart, refetch] = useCart()

    const axiosSecure = useAxiosSecure()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)


    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {

                        console.log(res.data)

                        if (res.data.deletedCount > 0) {

                              Swal.fire({
                                title: "Deleted!",
                                text: "The cart has been deleted.",
                                icon: "success"
                              });

                              refetch()

                        }
                    })


            }
        });



    }

    return (
        <div className="m-8">

            <div className="flex justify-evenly bg-gray-200 p-3 ">
                <h2>Items : {cart.length} </h2>
                <p> Total Price : {totalPrice} </p>

                {
                    cart.length ?  <Link to={'/dashboard/payment'}> <button  className=" btn btn-primary btn-xs"> Pay </button> </Link> : <button disabled  className=" btn btn-primary btn-xs"> Pay </button>
                }

                {/* <Link to={'/dashboard/payment'}> <button disabled={!cart.length} className=" btn btn-primary btn-xs"> Pay </button> </Link> */}
            </div>

            <div className="mt-8">

                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((item, index) => <tr key={index}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td> {item.price} </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"> Delete </button>
                                    </th>
                                </tr>)
                            }



                        </tbody>



                    </table>
                </div>

            </div>

        </div>


    );
};

export default Cart;