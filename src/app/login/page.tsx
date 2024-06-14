import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import loginImage from "../../../public/images/login/login-01.jpg";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-left">
          <h1 className="text-4xl font-bold">Guza</h1>
          <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-left text-sm text-gray-500 flex items-center gap-2">
            Not a member?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register today!
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
              <div className="flex justify-between mt-6 text-sm ">
                <div className="font-light flex items-center">
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" className="mr-2" />
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
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
      <div className="relative w-full h-[850px]">
        <Image
          src={loginImage}
          alt=""
          fill
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
