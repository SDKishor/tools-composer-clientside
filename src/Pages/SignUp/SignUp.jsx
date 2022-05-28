import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let errorText = "";
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch);
  //error handling
  console.log(errors);

  if (errors?.Password?.type === "pattern") {
    errorText = <p>Please provide at least 6 character as Password</p>;
  }
  if (errors?.Password?.type === "pattern") {
    errorText = <p>Please provide at least 6 character as Password</p>;
  }

  return (
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div class="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-primary md:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-primary ">
          Sign Up
        </h1>

        <form class="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="Name" class="block text-sm text-gray-800 ml-2">
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
            <label htmlFor="email" class="block text-sm text-gray-800 ml-2">
              Email
            </label>
            <input
              required
              id="email"
              className="block w-full px-4 py-2 my-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              type="email"
              placeholder="Email"
              {...register("Email", {
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          <div>
            <label htmlFor="password" class="block text-sm text-gray-800 ml-2">
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
                pattern: /^.{6,}$/,
              })}
            />
          </div>
          <div>
            <label
              htmlFor="ConfirmPassword"
              class="block text-sm text-gray-800 ml-2"
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
          <div className="text-red-500">{errorText}</div>

          <div class="mt-6">
            <input
              type="submit"
              class="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none focus:bg-secondary cursor-pointer"
            />
          </div>
        </form>
        <p class="mt-6 text-xs font-light text-center text-gray-700">
          Already have an account?
          <Link
            to={"/signup"}
            class="font-medium text-primary hover:underline pl-2"
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
