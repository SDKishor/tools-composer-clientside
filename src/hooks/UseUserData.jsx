import React, { useEffect, useState } from "react";

export const UseUserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://gentle-waters-15419.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return [users, setUsers];
};
