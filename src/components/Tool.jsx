import React from "react";
import { Link } from "react-router-dom";

export default function Tool({
  _id,
  name,
  image,
  description,
  price,
  minimum_quantity,
  stock,
}) {
  return (
    <div className=" card w-80 bg-base-100 m-8 rounded-sm ">
      <figure
        className={`shadow-md h-64  bg-center bg-no-repeat bg-cover relative overflow-hidden `}
      >
        <img src={image} alt="" />
        <Link
          to={`/purchase/${_id}`}
          className="w-full text-white font-bold text-2xl uppercase bg-black py-6 px-10 absolute bottom-0 hover:bg-primary cursor-pointer "
        >
          place order
        </Link>
      </figure>
      <div className="card-body flex flex-row p-0 py-7">
        <div className="flex-2">
          <h2 className="card-title text-2xl">{name}</h2>
          <div className="w-10/12">
            <div className="rating">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 text-right">
          <button className="font-bold text-3xl ">{price}</button>
        </div>
      </div>
    </div>
  );
}

//
