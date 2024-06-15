import React from "react";
import Image from "next/image";
import { AboutHero } from "@/ui/heroes";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <div className="max-w-6xl m-auto px-6">
        <div className="grid grid-cols-2 gap-6 py-20">
          <div className="h-[550px] m-auto md:ml-0 col-span-2 md:col-span-1 w-full max-w-[400px] bg-red-500 rounded-t-full relative overflow-hidden">
            <Image
              alt=""
              src="/images/about/about-store.jpeg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center col-span-2 md:col-span-1 pl-6">
            <p className="text-blue-500 font-semibold">OUR SHOP</p>
            <h2 className="text-3xl font-semibold py-4">
              We believe in Empathy and Honesty
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              ex voluptate nisi iusto ad, ab sint dolorum vero quidem fugiat est
              dignissimos sunt tenetur ullam dicta libero sequi minima aperiam.
            </p>
            <div className=" py-4">
              <p className="font-semibold">Location</p>
              <p className="text-gray-500">North Park, San Diego, CA 92014</p>
            </div>
            <p className="font-semibold">Opening hours</p>
            <p className="text-gray-500">
              Mon: Closed, Tue-Sat: 12PM-6PM, Sun:Closed
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 pb-20">
          <div className="h-[500px] m-auto md:ml-0 col-span-2 md:col-span-1 w-full max-w-[400px] bg-red-500 rounded-b-full relative overflow-hidden">
            <Image
              alt=""
              src="/images/about/ceo.jpeg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 justify-center pl-6">
            <p className="text-blue-500 font-semibold">MEET THE FOUNDER</p>
            <h2 className="text-3xl font-semibold py-4">Jennifer Smith</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              ex voluptate nisi iusto ad, ab sint dolorum vero quidem fugiat est
              dignissimos sunt tenetur ullam dicta libero sequi minima
              aperiam.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Pariatur ex voluptate nisi iusto ad, ab sint dolorum vero quidem
              fugiat est dignissimos sunt tenetur ullam dicta libero sequi
              minima aperiam.
            </p>
            <div className="flex gap-4 pt-8 text-2xl">
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
