import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../hooks/Loading";
import UseToken from "../../hooks/UseToken";
export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, usererror] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const token = UseToken(user);

  const onSubmit = async (data) => {
    const { Name, Email, Password, ConfirmPassword } = data;

    if (Password !== ConfirmPassword) {
      setError("your Password and confirm password does not match");
      return;
    }
    if (Password.length < 6) {
      setError("your Password should at least 6 character");
      return;
    }

    await createUserWithEmailAndPassword(Email, Password);

    await updateProfile({ displayName: Name });
  };

  if (token) {
    navigate("/");
  }

  if (loading || updating) {
    <Loading></Loading>;
  }

  if (usererror || UpdateError) {
    let temp = usererror.message || UpdateError.message;
    setError({ temp });
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-primary md:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-primary ">
          Sign Up
        </h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="Name" className="block text-sm text-gray-800 ml-2">
              Name
            </label>
            <input
              required
              id="Name"
              className="block w-full px-4 py-2 my-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              placeholder="Your Name"
              {...register("Name", { maxLength: 80 })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800 ml-2">
              Email
            </label>
            <input
              required
              id="email"
              className="block w-full px-4 py-2 my-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              type="email"
              placeholder="Email"
              {...register("Email")}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 ml-2"
            >
              Password
            </label>
            <input
              required
              className="block w-full px-4 py-2 my-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              id="password"
              type="password"
              placeholder="Password"
              {...register("Password", {
                maxLength: 100,
              })}
            />
          </div>
          <div>
            <label
              htmlFor="ConfirmPassword"
              className="block text-sm text-gray-800 ml-2"
            >
              Confirm Password
            </label>
            <input
              required
              className="block w-full px-4 py-2 my-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              id="ConfirmPassword"
              type="password"
              placeholder="Confirm Password"
              {...register("ConfirmPassword")}
            />
          </div>
          <p className="text-red-500">{error}</p>

          <div className="mt-6">
            <input
              type="submit"
              className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none focus:bg-secondary cursor-pointer"
            />
          </div>
        </form>
        <p className="mt-6 text-xs font-light text-center text-gray-700">
          Already have an account?
          <Link
            to={"/signup"}
            className="font-medium text-primary hover:underline pl-2"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

//
//
//
//
//

//
//     </form>
//   );
// }
