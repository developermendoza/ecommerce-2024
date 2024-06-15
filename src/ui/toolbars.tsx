"use client";
import { useState } from "react";
import { IoReorderTwoSharp } from "react-icons/io5";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoReorderFour } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";

export const ShopPageToolBar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <div className="grid grid-cols-4 gap-4 pb-8">
      <div>
        <h2 className="text-3xl font-semibold hidden lg:block">Filter</h2>
        <IoFilter className=" lg:hidden" />
      </div>

      <div className="col-span-3 flex justify-between items-center">
        <p className="text-gray-600">Showing 9 of 18 products</p>
        <div className="flex justify-between items-center">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setIsDropDownOpen((prevState) => !prevState)}
              >
                Sorting
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`absolute ${
                isDropDownOpen ? " " : "hidden"
              } right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex gap-2 ml-4 ">
            <div className="border rounded p-2 rotate-90 flex">
              <IoReorderTwoSharp className="text-gray-500" />
            </div>
            <div className="border rounded p-2 rotate-90 flex">
              <IoReorderThreeSharp className="text-gray-500" />
            </div>
            <div className="border rounded p-2 rotate-90 flex">
              <IoReorderFour className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
