import Image from "next/image";
import React from "react";
import { PrimaryButton } from "@/ui/buttons";

const SeasonOffer = () => {
  return (
    <section className="pb-24">
      <div className="max-w-6xl m-auto">
        <div className="grid grid-cols-2 px-6">
          <div className="relative col-span-2 h-[500px]  md:col-span-1">
            <Image
              src="/images/sales/summer-2024.jpeg"
              fill
              style={{
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
          <div className="bg-[#f6e6cf] flex justify-center items-center p-10 h-[500px] col-span-2 md:col-span-1">
            <div className="text-center">
              <p className="font-semibold">SALE EVENT</p>
              <div className="py-2">
                <h3 className="font-semibold text-5xl">Summer Shorts</h3>
                <h3 className="font-semibold text-5xl">Limited Offer - $20</h3>
              </div>
              <p className="text-sm mb-6">
                Until 07/27/24 Use code ecommerce at checkout
              </p>
              <PrimaryButton buttonName="Shop Now" buttonUrl="/shop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonOffer;
