import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";


const MainLayout = () => {

    const location = useLocation()

    console.log(location)

    const noHeaderFooter = location?.pathname?.includes('/login') || location?.pathname?.includes('/signUp')
    console.log(noHeaderFooter)

    return (
        <div>

            {
                noHeaderFooter || <Navbar></Navbar>
            }

            <Outlet></Outlet>

            {
                noHeaderFooter || <Footer></Footer>
            }
            
        </div>
    );
};

export default MainLayout;