import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const PaymentHistory = () => {

    const { user } = useAuth()

    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/payments/${user?.email}`)

            // console.log(res.data)

            return res.data

        }
    })


    return (
        <div>

            <SectionTitle

                heading={'Payment History'}

                subHeading={'All History'}

            ></SectionTitle>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Price</th>
                            <th> Email </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            payments.map((item, index) => <tr key={item._id}>
                                <th> {index + 1} </th>
                                <td> {item.price} </td>
                                <td> {item.email} </td>
                                <td> {item.status} </td>
                            </tr> )
                        }
             
                      
             
                    </tbody>
                </table>
            </div>





        </div>
    );
};

export default PaymentHistory;