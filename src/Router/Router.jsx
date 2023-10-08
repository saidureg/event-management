import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServicesDetails from "../pages/Services/ServicesDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/servicesDetails/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default Router;
