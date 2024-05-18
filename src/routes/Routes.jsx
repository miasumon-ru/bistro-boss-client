
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Menu from "../pages/Menu/Menu";



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

      ],
    },
  ]);

  export default router