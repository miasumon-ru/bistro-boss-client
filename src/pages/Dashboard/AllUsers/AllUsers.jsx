import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";



const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({

        queryKey: ['user'],
        queryFn: async () => {

            const res = await axiosSecure.get("/users")

            // , {
            //     headers : {
            //         authorization : `Bearer ${localStorage.getItem('access-token')}`
            //     }
            // }

            return res.data
        }
    })

    // handle delete user

    const handleDeleteUser = (id) => {


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


                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount > 0) {

                            refetch()


                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been deleted.",
                                icon: "success"


                            });



                        }


                    })



            }
        });


    }

    // handle make admin

    const handleMakeAdmin = (user) => {

        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {

                console.log(res.data)

                if (res.data.modifiedCount > 0) {

                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })




    }

    return (
        <div>

            <div className="flex justify-evenly">
                <h2 className="text-4xl"> All Users </h2>
                <h2 className="text-4xl"> Total Users :  {users.length} </h2>
            </div>

            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td> {user.email} </td>
                                    <td> {user.name} </td>
                                    <td>

                                        {
                                            user.role === 'admin' ? "Admin" :

                                                <button onClick={() => handleMakeAdmin(user)}> <FaUser className="text-orange-400 text-xl">
                                                </FaUser>  </button>
                                        }




                                    </td>
                                    <td> <button onClick={() => handleDeleteUser(user._id)}> <FaTrash className="text-red-400 text-xl"></FaTrash> </button> </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;