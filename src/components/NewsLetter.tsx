import React from "react";

const NewsLetter = () => {
  return (
    <section className="pb-24">
      <div className="text-center max-w-lg m-auto">
        <h2 className="pb-4 font-semibold">NEWSLETTER</h2>
        <h3 className="text-3xl">
          Sign up and get to <span className="text-red-500 font-bold">20%</span>{" "}
          of your first purchase
        </h3>
        <div className="flex justify-between border-b-2 text-sm mt-4">
          <input
            className="border-0 w-[100%] p-4 outline-none"
            type="text"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
