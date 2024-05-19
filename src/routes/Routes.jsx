
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/order",
          element: <Order></Order>
        },

      ],
    },
  ]);

  export default router