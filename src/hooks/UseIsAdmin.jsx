import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";

export default function UseIsAdmin() {
  const [user, loading, error] = useAuthState(auth);
  const [adminload, setAdminload] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const accesstoken = localStorage.getItem("accessToker");
    if (accesstoken == null) {
      Navigate("/login");
    }
    fetch(`http://localhost:5000/users/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${accesstoken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.role == "admin") {
          setIsAdmin(true);
          setAdminload(false);
        }
      });
  }, []);

  return [isAdmin, setIsAdmin, adminload];
}
