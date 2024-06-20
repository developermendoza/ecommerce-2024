"use client";
import { CartBagIcon, SearchIcon, UserIcon, HeartIcon } from "@/ui/Icons";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Search from "@/components/Search";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const MobileNavbar = () => {
  const [isMobileNavbarOpen, setisMobileNavbar] = useState(false);
  return (
    <div>
      <div className="flex md:hidden justify-between items-center p-6">
        <Link href="/">
          <Logo />
        </Link>
        <GiHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={() => setisMobileNavbar((prevState) => !prevState)}
        />
      </div>
      <div
        className="fixed navbar-transition top-0 z-40 h-[100%] bottom-0 left-0 bg-white md:hidden border-r-2 border-gray-100"
        style={{ width: "92%", left: isMobileNavbarOpen ? "0" : "-100%" }}
      >
        <div className="flex border-b-2 border-gray-100 justify-between p-4 items-center">
          <Link href="/">
            <Logo />
          </Link>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setisMobileNavbar(false)}
          />
        </div>
        <ul className="">
          <Link className="block border-b-2 border-gray-100 p-4" href="/">
            Home
          </Link>
          <Link className="block border-b-2 border-gray-100 p-4" href="/about">
            About
          </Link>
          <Link className="block border-b-2 border-gray-100 p-4" href="/shop">
            Shop
          </Link>
          <Link className="block border-b-2 border-gray-100 p-4" href="/blog">
            Blog
          </Link>
          <Link
            className="block border-b-2 border-gray-100 p-4"
            href="/contact"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };
  if (pathname.includes("/account")) return null;
  return (
    <nav className="bg-[#f8f7f5] px-6">
      <div>
        {isModalOpen && (
          <Search toggleModal={toggleModal} stopPropagation={stopPropagation} />
        )}
      </div>
      <div className="hidden md:block max-w-6xl m-auto py-4">
        <div className="flex justify-between">
          <ul className="flex justify-between gap-6 items-center">
            <li>
              <Link href="/">
                <Logo />
              </Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="flex gap-4">
            <li className="cursor-pointer" onClick={toggleModal}>
              <SearchIcon />
            </li>
            <li>
              <Link href="/login">
                <UserIcon />
              </Link>
            </li>
            <li>
              <HeartIcon />
            </li>
            <li>
              <Link href="/cart">
                <CartBagIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
};

export const AccountNavbar = () => {
  const [isUserDropDownOpen, setIsUserDropDownOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (buttonRef.current != event.target) {
        setIsUserDropDownOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [buttonRef]);

  return (
    <div className="relative ">
      <nav className="bg-[#111111] border-b-2 border-gray-400">
        <div className="flex items-center justify-between mx-auto p-4">
          <div className="flex gap-10 items-center">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                height={20}
                width={20}
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Flowbite
              </span>
            </a>
            <div className="w-full max-w-[550px]">
              <form className="block w-full">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium sr-only text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div
            className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
            ref={buttonRef}
          >
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={() => setIsUserDropDownOpen((prevState) => !prevState)}
            >
              <span className="sr-only">Open user menu</span>
              <div className="relative w-8 h-8">
                <Image
                  src="/images/about/ceo.jpeg"
                  style={{ objectFit: "cover" }}
                  fill
                  alt="user photo"
                  className="rounded-full"
                />
              </div>
            </button>
            {/* Dropdown menu */}
            <div
              className={`z-50 absolute ${
                isUserDropDownOpen ? "" : "hidden"
              } top-[40px] right-[20px] my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow bg-gray-700 dark:divide-gray-600"
            id="user-dropdown`}
              ref={buttonRef}
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-white">Bonnie Green</span>
                <span className="block text-sm truncate text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white mb-2"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white border-gray-100 border-t"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
