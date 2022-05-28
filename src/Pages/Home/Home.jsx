import React from "react";
import Footer from "../../components/Footer";
import Banar from "./Banar";
import Review from "./Review";

export default function Home() {
  return (
    <div className="home">
      <Banar></Banar>

      <div className="text-2xl text-center font-bold pt-10">
        Customer Review
      </div>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}
