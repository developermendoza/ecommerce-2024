import React from "react";
import { ContactHero } from "@/ui/heroes";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PrimaryButton } from "@/ui/buttons";

const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <div className="relative w-[100%] h-[480px]">
        <Image
          style={{ objectFit: "cover" }}
          src="/images/contact/map.jpeg"
          fill
          alt=""
        />
      </div>
      <div className="max-w-6xl m-auto py-20 px-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 md:col-span-2">
            <div className="mb-10">
              <h2 className="text-3xl font-semibold">Address</h2>
              <p className="text-gray-600 py-4">
                8425 Melrose Ave, Los Angeles, CA 90069
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl font-semibold">Contact</h2>
              <p className="text-gray-600 py-4">
                Phone. <span>+1 970 429 4170</span>
              </p>
              <p className="text-gray-600">
                Email. <span>info@apoloniomedia.com</span>
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl font-semibold">Hours of Operation</h2>
              <p className="text-gray-600 py-4">
                Mon - Fri: <span>08:30 - 20:00</span>
              </p>
              <p className="text-gray-600">
                Sat & Sun: <span>09:30 - 21:00</span>
              </p>
            </div>
            <div>
              <div className="flex gap-4 items-center text-2xl">
                <FaFacebookF />
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-gray-600 py-4">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="border border-gray-200 p-2"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="border border-gray-200 p-2"
                />
                <input
                  type="telephone"
                  placeholder="Phone number"
                  className="border border-gray-200 p-2"
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="border border-gray-200 p-2"
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Comment"
                  className="border border-gray-200 p-2 col-span-2 h-48"
                ></textarea>
              </div>
              <div className="mt-8 text-center">
                <PrimaryButton buttonUrl="" buttonName="Submit Comment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
