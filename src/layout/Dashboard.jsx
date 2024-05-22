import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaHome, FaRestroom, FaShoppingCart, FaStreetView } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";


const Dashboard = () => {
    return (
        <div className="flex">

            <div className="w-64 min-h-screen bg-orange-400 p-5">

                <ul className="space-y-4">
                    
                   

                    <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/cart'}> <FaShoppingCart></FaShoppingCart> My Cart </NavLink></li>

                    <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/reservation'}> <FaRestroom></FaRestroom> Reservation</NavLink></li>

                    <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/bookings'}> <FaAd></FaAd> Bookings </NavLink></li>

                    <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/dashboard/review'}> <FaStreetView></FaStreetView> Review </NavLink></li>

                    <div className="divider"></div>

                    <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/'}> <FaHome></FaHome> Home </NavLink></li>

                    <li className=" font-bold"><NavLink className='flex flex-row items-center gap-2' to={'/order/salad'}> <FaBowlFood></FaBowlFood> Menu </NavLink></li>

                </ul>

            </div>

            <div className="flex-1">

                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Dashboard;