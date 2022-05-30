import { signOut } from "firebase/auth";
import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";
import UseIsAdmin from "./UseIsAdmin";

export const RequireAdmin = ({ children }) => {
  let [isAdmin, setIsAdmin, adminLoading] = UseIsAdmin();

  let location = useLocation();
  if (adminLoading) {
    return <Loading></Loading>;
  }
  if (!isAdmin) {
    console.log("hi");
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
