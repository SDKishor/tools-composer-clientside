import React, { useEffect, useState } from "react";

export default function UseToken(user) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };

    if (email) {
      fetch(`https://gentle-waters-15419.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const accessToken = data.token;
          localStorage.setItem("accessToker", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return token;
}
