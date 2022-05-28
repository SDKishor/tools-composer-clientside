import React, { useEffect, useState } from "react";

export const UseToolData = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return [tools, setTools];
};
