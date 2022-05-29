import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import UseIsAdmin from "../../hooks/UseIsAdmin";

export default function MyProfile() {
  const [user, loading, error] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = UseIsAdmin();

  return (
    <div className="">
      <h1>
        Your Name: <span className="text-2xl px-10">{user.displayName}</span>
      </h1>
      <h1>
        Your Email: <span className="text-2xl px-10">{user.email}</span>
      </h1>
      {isAdmin ? (
        <h1 className="mt-20 text-5xl uppercase text-primary font-bold">
          Wellcome Admin
        </h1>
      ) : (
        <form className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800 ml-2">
              Education
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm text-gray-800 ml-2">Location</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm text-gray-800 ml-2">
              Phone Number
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm text-gray-800 ml-2">
              LinkedIn profile link
            </label>
            <input
              type="url"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
            />
          </div>
          <button className="text-xs text-gray-600 hover:underline hover:text-primary ml-2">
            Forget Password?
          </button>

          <div className="mt-6">
            <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none focus:bg-secondary">
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
