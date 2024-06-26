
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order/:category",
        element: 
          <Order></Order>
        
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },

    ],
  },

  {
    path: 'dashboard',
    element : <Dashboard></Dashboard>,
    children : [
      // normal users

      {

        path : 'cart',
        element : 
          <Cart></Cart>
   

      },
      {

        path : 'payment',
        element : <Payment></Payment>
   

      },
      {

        path : 'paymentHistory',
        element : <PaymentHistory></PaymentHistory>
   

      },

      // admin users
      {

        path : 'users',
        element : <AdminRoutes>
          <AllUsers></AllUsers>
        </AdminRoutes>

      },

      {

        path : 'addItems',
        element : <AdminRoutes>
          <AddItem></AddItem>
          </AdminRoutes>

      },
      {

        path : 'manageItems',
        element : <AdminRoutes>
          <ManageItem></ManageItem>
          </AdminRoutes>

      },
      {

        path : 'updateItem/:id',
        element : <AdminRoutes>
          <UpdateItem></UpdateItem>
          </AdminRoutes>,

        loader : ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)  

      },
      
    ]
  }
]);

export default router