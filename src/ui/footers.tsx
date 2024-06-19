"use client";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard, FaCcStripe, FaCcPaypal } from "react-icons/fa";
import { usePathname } from "next/navigation";
export const AccountFooter = () => {
  return <div>AccountFooter</div>;
};

export const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes("/account")) return null;
  return (
    <footer className="bg-[#111111]">
      <div className="border-gray-600 border-b-[1px]">
        <div className="py-12 px-6 grid grid-cols-6 gap-4 max-w-6xl m-auto text-gray-300 text-sm">
          <div className="mb-10  col-span-6 lg:mb-0 lg:col-span-2">
            <h3 className="text-white font-semibold">About Shop</h3>
            <p className="my-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              <span className="underline">Read More</span>
            </p>
            <p>E. info@apoloniomedia.com</p>
            <p>T. (619) 363-1178</p>
          </div>
          <div className=" col-span-6  md:col-span-3 lg:col-span-1">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="my-6 flex flex-col gap-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Store Locator</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=" col-span-6  md:col-span-3 lg:col-span-1">
            <h3 className="text-white font-semibold">Customer Care</h3>
            <ul className="my-6 flex flex-col gap-2">
              <li>Size Guide</li>
              <li>Help & FAQs</li>
              <li>Return My Order</li>
              <li>Refer a Friend</li>
            </ul>
          </div>
          <div className=" col-span-6 md:col-span-3 lg:col-span-1">
            <h3 className="text-white font-semibold">Terms & Policies</h3>
            <ul className="my-6 flex flex-col gap-2">
              <li>Duties & Taxes</li>
              <li>Shipping Info</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className=" col-span-6 md:col-span-3 lg:col-span-1">
            <h3 className="text-white font-semibold">Follow Us</h3>
            <ul className="my-6 flex flex-col gap-2">
              <li>Intagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
              <li>Tiktok</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 flex px-6  justify-between text-gray-300 text-sm items-center max-w-6xl m-auto">
        <p>©2024 Apolonio Media. All rights reserved.</p>
        <div className="flex gap-2 text-2xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcStripe />
          <FaCcPaypal />
        </div>
      </div>
    </footer>
  );
};
