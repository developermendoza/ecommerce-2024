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
      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-2 mt-12">
        <div className="relative col-span-5 md:col-span-2 lg:col-span-1 h-[280px]">
          <Image
            src="/images/instagram_feed/fashion-01.jpeg"
            style={{ objectFit: "cover" }}
            fill
            alt=""
          />
        </div>
        <div className="relative col-span-5 md:col-span-2 lg:col-span-1 h-[280px]">
          <Image
            src="/images/instagram_feed/fashion-02.jpeg"
            style={{ objectFit: "cover" }}
            fill
            alt=""
          />
        </div>
        <div className="relative col-span-5 md:col-span-2 lg:col-span-1 h-[280px]">
          <Image
            src="/images/instagram_feed/fashion-03.jpeg"
            style={{ objectFit: "cover" }}
            fill
            alt=""
          />
        </div>
        <div className="relative col-span-5 md:col-span-2 lg:col-span-1 h-[280px]">
          <Image
            src="/images/instagram_feed/fashion-04.jpeg"
            style={{ objectFit: "cover" }}
            fill
            alt=""
          />
        </div>
        <div className="relative col-span-5 md:col-span-2 lg:col-span-1 h-[280px]">
          <Image
            src="/images/instagram_feed/fashion-05.jpeg"
            style={{ objectFit: "cover" }}
            fill
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
