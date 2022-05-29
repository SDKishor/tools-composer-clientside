import React from "react";
import { Link } from "react-router-dom";

export default function MyPortfolio() {
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold text-primary h-14  w-full border-b-2 border-primary px-10">
        My Portfolio
      </h1>
      <div className="flex m-10 ">
        <div className="w-2/6">
          <h2 className="font-bold text-3xl min-h-14 flex items-center my-7">
            Name:
          </h2>
          <h2 className="font-bold text-3xl min-h-14 flex items-center my-7">
            Email:
          </h2>
          <h2 className="font-bold text-3xl min-h-14 flex items-center my-7">
            Education:
          </h2>
          <h2 className="font-bold text-3xl min-h-14 flex items-center my-7">
            Skill in web Development:
          </h2>
        </div>
        <div className="w-4/6 ">
          <h2 className="min-h-14 flex items-center text-2xl my-7">
            Kishor Sutradhar
          </h2>
          <h2 className="min-h-14 flex items-center text-2xl my-7">
            Kishorsutradhar32@gmail.com
          </h2>
          <h2 className="min-h-14 flex items-center text-2xl my-7">
            B.B.A Professional(Finance), National University, Bangladesh
          </h2>
          <h2 className="min-h-14 grid place-items-center grid-cols-5 text-2xl my-7">
            <div className="badge badge-primary px-5 py-3 font-bold mx-4 mb-2  text-white ">
              HTML5
            </div>
            <div className="badge badge-primary px-5 py-3 font-bold mx-4 mb-2  text-white bg-sky-500 ">
              CSS3
            </div>
            <div className="badge badge-primary px-5 py-3 font-bold mx-4 mb-2  text-white bg-yellow-300">
              JavaScript
            </div>
            <div className="badge badge-primary px-5 py-3 font-bold mx-4 mb-2  text-white bg-blue-600">
              React
            </div>
            <div className="badge badge-primary px-5 py-3 font-bold mx-4 mb-2  text-white bg-sky-500">
              TailwindCSS
            </div>
            <div className="badge badge-primary px-5 py-3 font-bold mx-4 mb-2  text-white bg-purple-500">
              Bootstrap
            </div>
            <div className="badge badge-primary px-5 py-3 font-bold mx-4 mb-2  text-white bg-green-800 ">
              Mongodb
            </div>
            <div className="badge badge-primary bg-yellow-300 px-5 py-3 font-bold mx-4 mb-2  text-white ">
              Firebase
            </div>
          </h2>
        </div>
      </div>
      <h4 className="w-full text-center font-bold text-2xl">
        My Recent Projects
      </h4>
      <div className="flex justify-center">
        <div className="card w-96 bg-base-100 m-10 shadow-xl ">
          <figure>
            <img src="https://i.ibb.co/zFYDpzW/Screenshot-2022-05-29-214609.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fruits vendor</h2>

            <div className="card-actions justify-end">
              <Link
                to={"https://fruit-s-vendor.web.app/"}
                className="btn  btn-primary"
              >
                Go to the site
              </Link>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 m-10 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/njs3Rqb/Screenshot-2022-05-29-214650.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">IT Tutor</h2>

            <div className="card-actions justify-end">
              <Link
                to={"https://it-tutor-137c6.web.app/"}
                className="btn  btn-primary"
              >
                Go to the site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//
// https://i.ibb.co/njs3Rqb/Screenshot-2022-05-29-214650.jpg
