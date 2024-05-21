
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
import PrivateRoute from "./PrivateRoute";



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
        element: <PrivateRoute>
          <Order></Order>
        </PrivateRoute>
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
]);

export default router