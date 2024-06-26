import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import registerImage from "../../../public/images/login/register-01.jpg";

const RegisterPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="hidden relative lg:block w-full h-[850px]">
        <Image
          src={registerImage}
          placeholder="blur"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col col-span-2 lg:col-span-1 py-20 lg:py-0 justify-center items-center px-4">
        <div className="w-full max-w-sm text-left">
          <h1 className="text-4xl font-bold">Guza</h1>
          <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to become a member
          </h2>
          <p className="mt-2 text-left text-sm text-gray-500 flex items-center gap-2">
            Already a member?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login now!
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto  w-full max-w-sm md:max-w-auto">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create an account
              </button>
            </div>
          </form>
          <div className="text-center mt-12">
            <div className="h-[1px] -mb-4 w-full bg-gray-200"></div>
            <p className="text-sm text-center inline-block bg-white px-6">
              Or continue with
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="w-full flex justify-center gap-2 rounded items-center py-2 border border-gray-300">
              <FcGoogle className="text-xl" />
              <span className="font-semibold">Google</span>
            </button>
            <button className="w-full flex justify-center gap-2 rounded items-center py-2 border border-gray-300">
              <FaFacebook className="text-xl text-[#3b5998]" />
              <span className="font-semibold">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
