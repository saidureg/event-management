import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServicesDetails from "../pages/Services/ServicesDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "../provide/PrivateRouter";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import RecentEvent from "../pages/RecentEvent/RecentEvent";

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
        element: (
          <PrivateRouter>
            <ServicesDetails></ServicesDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRouter>
            <Contact />
          </PrivateRouter>
        ),
      },
      {
        path: "/recent-event",
        element: (
          <PrivateRouter>
            <RecentEvent />
          </PrivateRouter>
        ),
        loader: () => fetch("/event.json"),
      },
    ],
  },
]);

export default Router;
