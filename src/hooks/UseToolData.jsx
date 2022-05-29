import React, { useEffect, useState } from "react";

export const UseToolData = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://gentle-waters-15419.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return [tools, setTools];
};
