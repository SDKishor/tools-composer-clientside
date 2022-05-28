import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

export default function Purchase() {
  const { id } = useParams();
  const [tool, setTool] = useState([]);
  const phoneNumRef = useRef("");
  const OrderQuantityRef = useRef("");
  const addressRef = useRef("");

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);

  const [user, loading, error] = useAuthState(auth);

  const handlepurchaseSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const name = user.displayName;
    const phoneNum = phoneNumRef.current.value;
    const OrderQuentuty = OrderQuantityRef.current.value;
    const address = addressRef.current.value;

    const placeOrder = { email, phoneNum, name, OrderQuentuty, address };

    console.log(placeOrder);
  };
  return (
    <div className="h-screen flex items-center">
      <div className="card lg:card-side bg-base-100 shadow-xl w-10/12 mx-auto  mb-24">
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className=" card w-80 bg-base-100 m-8 rounded-sm ">
            <figure
              className={`shadow-md h-64  bg-center bg-no-repeat bg-cover relative overflow-hidden `}
            >
              <img src={tool.image} alt="" />
            </figure>
            <div className="card-body flex flex-row p-0 py-7">
              <div className="flex-2">
                <h2 className="card-title text-2xl uppercase">{tool.name}</h2>
                <p className="w-10/12"></p>
              </div>
              <div className="flex-1 text-right">
                <div className="font-bold text-3xl">{tool.price}</div>
              </div>
            </div>

            <div className="">{tool.description}</div>
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">Fill Those information</h2>
          <form onSubmit={handlepurchaseSubmit} className="mt-6">
            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm text-gray-800 ml-2"
              >
                Name
              </label>
              <input
                disabled
                type="text"
                value={user.displayName}
                className="block w-full px-4 py-2 mt-2 text-primary bg-opacity-10 bg-orange-600 border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 ml-2"
              >
                Email
              </label>
              <input
                disabled
                value={user.email}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-primary bg-opacity-10 bg-orange-600 border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-5 flex justify-between">
              <div className="">
                <label className="block text-sm text-gray-800 ml-2">
                  Available Quantity
                </label>
                <input
                  disabled
                  type="number"
                  value={tool.Stock}
                  className="block w-full px-4 py-2 mt-2 text-primary bg-opacity-10 bg-orange-600 border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
                />
              </div>
              <div className="">
                <label className="block text-sm text-gray-800 ml-2">
                  Minimun Order
                </label>
                <input
                  disabled
                  value={tool.minimum_quantity}
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-primary bg-opacity-10 bg-orange-600 border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
                />
              </div>
            </div>

            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm text-gray-800 ml-2"
              >
                Phone Number
              </label>
              <input
                required
                ref={phoneNumRef}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm text-gray-800 ml-2"
              >
                Place Order quantity
              </label>
              <input
                required
                ref={OrderQuantityRef}
                type="number"
                placeholder={`enter more then minimum quantity `}
                min={tool.minimum_quantity}
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm text-gray-800 ml-2"
              >
                Address
              </label>
              <textarea
                required
                ref={addressRef}
                type="text"
                className="block w-full h-24 px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <p className="text-red-500"></p>
            <div className="mt-6">
              <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none focus:bg-secondary font-bold">
                Procced with Chackout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
