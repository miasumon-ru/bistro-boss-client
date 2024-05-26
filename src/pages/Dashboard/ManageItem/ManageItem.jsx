import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const ManageItem = () => {

    const [menu, , refetch] = useMenu()

    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (id) => {


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


                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount > 0) {

                            refetch()


                            Swal.fire({
                                title: "Deleted!",
                                text: " The item has been deleted.",
                                icon: "success"


                            });



                        }


                    })



            }
        });


    }

    return (
        <div>

            <SectionTitle
                heading={"Manage All Item"}
                subHeading={"Hurry Up"}
            ></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update </th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item, index) =>  <tr key={item._id}>
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
                                <td> <Link to={`/dashboard/updateItem/${item._id}`}> <FaEdit className="text-xl text-orange-400"></FaEdit> </Link> </td>
                                <td> <button onClick={() => handleDeleteItem(item._id)} > <FaTrash className="text-red-400 text-xl"></FaTrash> </button> </td>
                            </tr> )
                        }


                        {/* row 1 */}
  
       
                    </tbody>
            
                 

                </table>
            </div>

        </div>
    );
};

export default ManageItem;