import React from "react";
import { Link } from "react-router-dom";

export default function Purchase() {
  const BackgroundImageUrl = `bg-[url('https://images.unsplash.com/photo-1559647746-9b2f216d2dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')]`;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-10/12 mx-auto mt-10">
        <div className="w-1/2">
          <div className=" card w-80 bg-base-100 m-8 rounded-sm ">
            <figure
              className={`shadow-md h-64 ${BackgroundImageUrl} bg-center bg-no-repeat bg-cover relative overflow-hidden `}
            ></figure>
            <div className="card-body flex flex-row p-0 py-7">
              <div className="flex-2">
                <h2 className="card-title text-2xl">Measuring Tape</h2>
                <p className="w-10/12"></p>
              </div>
              <div className="flex-1 text-right">
                <button className="font-bold text-3xl">$5</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}
