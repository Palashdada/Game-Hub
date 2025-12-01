import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PageNotFound from "../Pages/PageNotFound";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import Details from "../Pages/Details";
import PriveteRoutes from "./PriveteRoutes";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPassword from "../Pages/ForgetPassword";
import Loding from "../Components/Loding";
import AllGames from "../Components/AllGames";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/profile",
        element: (
          <PriveteRoutes>
            <Profile></Profile>
          </PriveteRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateprofile",
        element: (
          <PriveteRoutes>
            <UpdateProfile></UpdateProfile>
          </PriveteRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/game.json"),
        hydrateFallbackElement: <Loding></Loding>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/allgames",
        element: <AllGames></AllGames>,
        loader: () => fetch("/game.json"),
        hydrateFallbackElement: <Loding></Loding>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
    ],
  },

  {
    path: "/*",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default router;
