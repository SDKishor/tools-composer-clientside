import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQuery } from "react-query";

export default function Review() {
  const { isLoading, data: reviews } = useQuery("users", () => {
    return fetch("http://localhost:5000/reviews").then((res) => res.json());
  });
  return (
    <div className="w-full flex flex-col justify-center mb-20 ">
      {reviews?.map((review) => (
        <div
          key={review._id}
          className="card-body flex flex-row relative shadow-xl py-10 px-24 mb-20 "
        >
          <div className="w-2/12 text-center  text-7xl relative">
            <FontAwesomeIcon
              className="absolute top-10 left-10 text-secondary"
              icon={faQuoteLeft}
            />
          </div>
          <div className=" text-lg  w-full">
            <div className="bg-primary  px-5 py-5 ">
              <h2 className=" font-bold text-5xl uppercase">{review.name}</h2>
              <h2 className=" py-2 text-3xl ">{review.email}</h2>
            </div>
            <div className="text-3xl px-5 pt-3 pb-7 capitalize">
              {review.review}
            </div>
          </div>
          <div className="w-2/12 text-center text-7xl relative">
            <FontAwesomeIcon
              className="absolute bottom-10 right-10 text-secondary"
              icon={faQuoteRight}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
