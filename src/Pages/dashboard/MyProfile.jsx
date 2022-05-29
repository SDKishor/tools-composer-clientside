import React from "react";
import UseIsAdmin from "../../hooks/UseIsAdmin";

export default function MyProfile() {
  const [isAdmin, setIsAdmin] = UseIsAdmin();
  console.log(isAdmin);

  return <div>MyProfile</div>;
}
