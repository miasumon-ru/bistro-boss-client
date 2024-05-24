import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";



const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [] } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get("/users")

            return res.data
        }
    })

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
                                    <td> <button> <FaTrash className="text-red-400 text-xl"></FaTrash> </button> </td>
                                </tr> )
                            }
                            
                     
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;