"use client";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./buttons";
import { FaRegCircle, FaCircle } from "react-icons/fa";
import landingHeroLeft from "../../public/images/shop/hero-1-01.png";
import landingHeroRight from "../../public/images/shop/hero-1-02.png";
import { useState, useRef, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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

// export const LandingCollectionCarousel = ({ items }: { items: any }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === items.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative flex items-center justify-center w-full overflow-hidden">
//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 z-10 p-2 m-2 text-white bg-black rounded-full focus:outline-none"
//       >
//         &lt;
//       </button>

//       {/* Carousel Items */}
//       <div className="w-full">
//         <div
//           className="flex transition-transform duration-300 ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             // width: `${items.length * 100}%`,
//           }}
//         >
//           {items.map((item: any, index: any) => (
//             <div
//               key={item.id}
//               className="h-[400px] bg-red-500 relative text-center flex-shrink-0 w-1/4 p-2"
//               style={{ flexBasis: "25%" }}
//             >
//               <Image
//                 src={item.featuredImage}
//                 layout="fill"
//                 objectFit="contain"
//                 alt={item.name}
//               />
//               <p className="absolute bottom-10 bg-white px-6 py-2 inline-block rounded">
//                 {item.name} <span className="pl-2">(4)</span>
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 z-10 p-2 m-2 text-white bg-black rounded-full focus:outline-none"
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export const LandingCollectionCarousel = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//   ];

//   return (
//     <Slide slidesToScroll={6} slidesToShow={4} indicators={true}>
//       <div className="each-slide-effect">
//         <div style={{ backgroundImage: `url(${images[0]})`, height: "400px" }}>
//           <span>Slide 1</span>
//         </div>
//       </div>
//       <div className="each-slide-effect ">
//         <div style={{ backgroundImage: `url(${images[1]})`, height: "400px" }}>
//           <span>Slide 2</span>
//         </div>
//       </div>
//       <div className="each-slide-effect ">
//         <div style={{ backgroundImage: `url(${images[2]})`, height: "400px" }}>
//           <span>Slide 3</span>
//         </div>
//       </div>
//       <div className="each-slide-effect ">
//         <div style={{ backgroundImage: `url(${images[3]})`, height: "400px" }}>
//           <span>Slide 3</span>
//         </div>
//       </div>
//       <div className="each-slide-effect ">
//         <div style={{ backgroundImage: `url(${images[4]})`, height: "400px" }}>
//           <span>Slide 3</span>
//         </div>
//       </div>
//       <div className="each-slide-effect ">
//         <div style={{ backgroundImage: `url(${images[5]})`, height: "400px" }}>
//           <span>Slide 3</span>
//         </div>
//       </div>
//     </Slide>
//   );
// };

export const LandingCollectionCarousel = ({
  categories,
}: {
  categories: any;
}) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  // const isDisabled = (direction: any) => {
  //   if (direction === "prev") {
  //     return currentIndex <= 0;
  //   }

  //   if (direction === "next" && carousel.current !== null) {
  //     return (
  //       carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
  //     );
  //   }

  //   return false;
  // };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
  console.log("carousel: ", carousel);
  return (
    <div className="carousel my-12 mx-auto">
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Our epic carousel
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            // disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            // disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {categories.map((item: any) => (
            <div
              key={item.id}
              className="carousel-item text-center relative w-[100%] h-[400px] bg-[#f1f1f1] snap-start"
            >
              <Image
                src={item.featuredImage}
                fill
                style={{ objectFit: "cover" }}
                className="w-full aspect-square "
                alt=""
              />
              <p className="absolute  bottom-10 bg-white px-6 py-2 inline-block rounded">
                {item.name} <span className="pl-2">(4)</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
