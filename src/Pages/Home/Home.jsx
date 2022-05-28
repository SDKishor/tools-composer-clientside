import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Footer from "../../components/Footer";
import Tool from "../../components/Tool";
import Loading from "../../hooks/Loading";
import { UseToolData } from "../../hooks/UseToolData";
import Banar from "./Banar";
import Review from "./Review";
import Summary from "./Summary";

export default function Home() {
  const [tools, setTools] = UseToolData();

  console.log(tools);
  return (
    <div className="home">
      <Banar></Banar>
      <Summary></Summary>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
        {tools.map(
          (tool, index) =>
            index <= 5 && (
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
            )
        )}
      </div>

      <div className="text-5xl text-center font-bold py-16">
        Customer Review
      </div>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}
