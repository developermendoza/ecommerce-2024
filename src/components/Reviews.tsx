import React from "react";
import { FaCircle } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="pb-24">
      <div className="max-w-6xl m-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Customer Reviews
        </h2>
        <div className="text-center max-w-lg m-auto">
          <p className="italic">
            &quot;As women who value our health, we&apos;re here to do what we
            do best - roll up our sleeves to get it done right&quot;
          </p>
          <p className="font-semibold text-xs py-8">Jane Smith</p>
          <div className="text-xs flex gap-4 justify-center">
            <FaCircle className="text-black" />
            <FaCircle className="text-gray-300" />
            <FaCircle className="text-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
