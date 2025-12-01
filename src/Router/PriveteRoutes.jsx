import React, { use } from "react";
import { AuthContext } from "../Context/AuthProviter";
import { Navigate, useLocation } from "react-router";
import Loding from "../Components/Loding";

const PriveteRoutes = ({ children }) => {
  const { suser, loding } = use(AuthContext);
  const location = useLocation();
  if (loding) {
    return <Loding></Loding>;
  }
  //   console.log(suser);
  if (suser) {
    return children;
  } else {
    return (
      <Navigate to={"/login"} state={location.pathname} replace></Navigate>
    );
  }
};

export default PriveteRoutes;
