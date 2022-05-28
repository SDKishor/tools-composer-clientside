import React from "react";

export default function Banar() {
  let heroImg = {
    background: ` url("https://api.lorem.space/image/fashion?w=1000&h=800") no-repeat center center / cover`,
  };

  return (
    <div className="hero min-h-screen" style={heroImg}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-kl">
          <h1 className="mb-5 text-5xl ">Hello there</h1>
          <p className="mb-5 text-7xl font-bold">NEED NEW TOOLS ?</p>
          <button className="btn btn-lg btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
