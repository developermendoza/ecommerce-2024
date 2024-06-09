import React from "react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const InstagramFeed = () => {
  return (
    <section className="pb-24 m-auto">
      <h2 className="flex items-center font-semibold text-sm justify-center">
        <FaInstagram
          style={{ fontSize: "20px" }}
          className="text-md font-semibold mr-2"
        />{" "}
        Instagram with #july
      </h2>
      <div className="grid grid-cols-5 gap-2  h-[300px] mt-12">
        <div className="relative">
          <Image src="/images/instagram_feed/fashion-01.jpeg" fill alt="" />
        </div>
        <div className="relative">
          <Image src="/images/instagram_feed/fashion-02.jpeg" fill alt="" />
        </div>
        <div className="relative">
          <Image src="/images/instagram_feed/fashion-03.jpeg" fill alt="" />
        </div>
        <div className="relative">
          <Image src="/images/instagram_feed/fashion-04.jpeg" fill alt="" />
        </div>
        <div className="relative">
          <Image src="/images/instagram_feed/fashion-05.jpeg" fill alt="" />
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
