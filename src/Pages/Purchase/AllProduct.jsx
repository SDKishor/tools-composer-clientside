import React from "react";
import { UseToolData } from "../../hooks/UseToolData";

import Tool from "../../components/Tool";

export default function AllProduct() {
  const [tools, setTools] = UseToolData();
  console.log(tools);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
      {tools.map((tool) => (
        <Tool
          key={tool._id}
          _id={tool._id}
          name={tool.name}
          image={tool.image}
          description={tool.description}
          price={tool.price}
          minimum_quantity={tool.minimum_quantity}
          stock={tool.Stock}
        />
      ))}
    </div>
  );
}
