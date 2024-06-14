"use client";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./buttons";
import { FaRegCircle, FaCircle } from "react-icons/fa";
import landingHeroLeft from "../../public/images/shop/hero-1-01.png";
import landingHeroRight from "../../public/images/shop/hero-1-02.png";
import { useState } from "react";

export function HeroCarousel({
  title,
  subtitle,
  desc,
  buttonName,
  buttonUrl,
}: {
  title: string;
  subtitle: string;
  buttonName: string;
  desc: string;
  buttonUrl: string;
}) {
  // logic to make a carousel
  //
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    "/images/shop/man-shirt-01.png",
    "/images/shop/man-shirt-02.png",
    "/images/shop/man-shirt-03.png",
    "/images/shop/man-shirt-04.png",
    "/images/shop/man-shirt-05.png",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="animation-carousel"
      className="relative w-full "
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-[600px] overflow-hidden rounded-lg ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 duration-200 ease-linear ${
              index === activeIndex ? "" : "hidden"
            }`}
            data-carousel-item={index === activeIndex ? "active" : undefined}
          >
            {/* <img
              src={item}
              className="absolute block w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Carousel item ${index + 1}`}
            /> */}
            <div className="relative w-full h-[600px]">
              <Image src={item} alt="" style={{ objectFit: "contain" }} fill />
            </div>
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
    // <div className="flex overflow-hidden">
    //   <div className="flex items-center gap-6 max-w-6xl overflow-hidden m-auto relative">
    //     <div className="relative w-full w-max-[500px] h-[800px]">
    //       <Image
    //         src={landingHeroLeft}
    //         style={{ objectFit: "contain" }}
    //         placeholder="blur"
    //         alt="Picture of the author"
    //       />
    //     </div>
    //     <div className="flex flex-col items-center justify-center gap-4 capitalize">
    //       <p>{subtitle}</p>
    //       <h1 className="text-6xl text-center font-bold">{title}</h1>
    //       <p className="font-semibold">{desc}</p>
    //       <PrimaryButton buttonUrl={buttonUrl} buttonName={buttonName} />
    //       <div className="flex gap-4 absolute bottom-10">
    //         <FaCircle />
    //         <FaRegCircle />
    //         <FaRegCircle />
    //       </div>
    //     </div>
    //     <div className="relative w-full w-max-[500px] h-[800px]">
    //       <Image
    //         src={landingHeroRight}
    //         style={{ objectFit: "contain" }}
    //         placeholder="blur"
    //         alt="Picture of the author"
    //       />
    //     </div>
    //   </div>
    //   {/* <div className="flex items-center gap-6 max-w-6xl overflow-hidden m-auto relative">
    //     <div className="relative w-full w-max-[500px] h-[800px]">
    //       <Image
    //         src={landingHeroLeft}
    //         style={{ objectFit: "contain" }}
    //         placeholder="blur"
    //         alt="Picture of the author"
    //       />
    //     </div>
    //     <div className="flex flex-col items-center justify-center gap-4 capitalize">
    //       <p>{subtitle}</p>
    //       <h1 className="text-6xl text-center font-bold">{title}</h1>
    //       <p className="font-semibold">{desc}</p>
    //       <PrimaryButton buttonUrl={buttonUrl} buttonName={buttonName} />
    //       <div className="flex gap-4 absolute bottom-10">
    //         <FaCircle />
    //         <FaRegCircle />
    //         <FaRegCircle />
    //       </div>
    //     </div>
    //     <div className="relative w-full w-max-[500px] h-[800px]">
    //       <Image
    //         src={landingHeroRight}
    //         style={{ objectFit: "contain" }}
    //         placeholder="blur"
    //         alt="Picture of the author"
    //       />
    //     </div>
    //   </div> */}
    // </div>
  );
}
