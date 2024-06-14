"use client";
import { CartBagIcon, SearchIcon, UserIcon, HeartIcon } from "@/ui/Icons";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Search from "@/components/Search";

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
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };
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
