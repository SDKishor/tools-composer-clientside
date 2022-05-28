import React, { useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, reseterror] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  const handleGoogleSingin = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithGoogle(email, password);
  };

  if (user || googleuser) {
    return navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = `Error: ${error.message}`;
  }

  const handlepasswordReset = async () => {
    const Emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const email = emailRef.current.value;

    if (Emailregex.test(email)) {
      await sendPasswordResetEmail(email);
      toast.success("Email sent");
    } else {
      toast.error("Please Enter your Email Address");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-primary md:max-w-md">
        <h1 className="text-3xl font-semibold text-center ">
          Tool <span className="text-primary pl-1 font-bold">Composer </span>
        </h1>

        <form onSubmit={handleLoginSubmit} className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800 ml-2">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 ml-2"
            >
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
            />
          </div>
          <button
            onClick={handlepasswordReset}
            className="text-xs text-gray-600 hover:underline hover:text-primary ml-2"
          >
            Forget Password?
          </button>
          <p className="text-red-500">{errorElement}</p>
          <div className="mt-6">
            <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none focus:bg-secondary">
              Login
            </button>
          </div>
        </form>
        <p className="mt-6 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <Link
            to={"/signup"}
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
        <button
          onClick={handleGoogleSingin}
          className="w-full px-4 py-3 mt-5 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none focus:bg-secondary flex justify-center items-center"
        >
          <svg
            className="pr-2"
            width={"30px"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            fill="white"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
          Continue With Google
        </button>
      </div>
    </div>
  );
}
