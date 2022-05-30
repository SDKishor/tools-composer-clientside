import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

export default function AddReview() {
  const [user, loading, error] = useAuthState(auth);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const reviewRef = useRef("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const review = reviewRef.current.value;

    const updateDoc = { name, email, review };

    fetch("http://localhost:5000/addreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review added");
      });
  };

  return (
    <div>
      <form onSubmit={handleReviewSubmit} className="mt-6">
        <div>
          <label htmlFor="email" className="block text-sm text-gray-800 ml-2">
            Name
          </label>
          <input
            ref={nameRef}
            readOnly
            value={user.displayName}
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:outline-none"
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm text-gray-800 ml-2">Email</label>
          <input
            ref={emailRef}
            readOnly
            value={user.email}
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:outline-none "
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm text-gray-800 ml-2">
            Your review
          </label>
          <textarea
            required
            ref={reviewRef}
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none focus:bg-secondary"
          >
            ADD REVIEW
          </button>
        </div>
      </form>
    </div>
  );
}
