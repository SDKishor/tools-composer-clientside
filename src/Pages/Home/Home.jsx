import React from "react";
import Footer from "../../components/Footer";
import Banar from "./Banar";
import Review from "./Review";
import Summary from "./Summary";

export default function Home() {
  return (
    <div className="home">
      <Banar></Banar>
      <Summary></Summary>

      <div className="text-5xl text-center font-bold py-16">
        Customer Review
      </div>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}
