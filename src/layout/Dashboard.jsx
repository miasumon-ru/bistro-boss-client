import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaHome, FaList, FaRestroom, FaShoppingCart, FaStreetView, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";



const Dashboard = () => {

    // TODO : get the isAdmin value from the database

    const [cart] = useCart()
    // const {loading} = useAuth()

    const [isAdmin, isAdminLoading, isLoading] = useAdmin()

    if( isLoading || isAdminLoading){
        return <progress className="progress w-full"></progress>
    }

    console.log(isAdmin)

    

   

    // console.log(isAdmin)
    // const isAdmin = true

    return (
        <div className="flex">

            <div className="w-64 min-h-screen bg-orange-400 p-5">

                {
                    isAdmin ? <> 

                        <ul className="space-y-4">



                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/adminHome'}> <FaHome></FaHome> Admin Home </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/addItems'}> <FaUtensils></FaUtensils> Add Items </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/bookings'}> <FaList></FaList> Manage Items </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/review'}> <FaBook></FaBook> Manage Bookings </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/users'}> <FaUser></FaUser> All Users </NavLink></li>

                            <div className="divider"></div>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/'}> <FaHome></FaHome> Home </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/order/salad'}> <FaBowlFood></FaBowlFood> Menu </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/order/contact'}> <FaVoicemail> </FaVoicemail> Contact </NavLink></li>

                        </ul> 

                    </> : <>

                        <ul className="space-y-4">



                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/cart'}> <FaShoppingCart></FaShoppingCart> My Cart {cart.length} </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/reservation'}> <FaRestroom></FaRestroom> Reservation</NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/bookings'}> <FaAd></FaAd> Bookings </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/review'}> <FaStreetView></FaStreetView> Review </NavLink></li>

                            <div className="divider"></div>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/'}> <FaHome></FaHome> Home </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/order/salad'}> <FaBowlFood></FaBowlFood> Menu </NavLink></li>

                            <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/order/contact'}> <FaVoicemail> </FaVoicemail> Contact </NavLink></li>

                        </ul></>


                }

            </div>

            <div className="flex-1">

                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default Dashboard;