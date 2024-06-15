import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { PrimaryButton, SecondaryButton } from "@/ui/buttons";

const shop = [
  {
    category: "Kids",
    id: 1,
    categoryFeaturedImage: "/images/shop/kids-clothing-01.png",
    products: [
      {
        name: "Shirt",
        color: "Blue",
        size: "S",
        material: "Cotton",
        price: 15.0,
        stockQuantity: 100,
        images: ["/images/shop/man-shirt-01.png"],
      },
      {
        name: "Shorts",
        color: "Blue",
        size: "M",
        material: "Denim",
        price: 20.0,
        stockQuantity: 50,
        images: ["/images/shop/man-shirt-01.png"],
      },
      {
        name: "Dress",
        color: "Pink",
        size: "L",
        material: "Polyester",
        price: 30.0,
        stockQuantity: 30,
        images: ["/images/shop/man-shirt-01.png"],
      },
    ],
  },
  {
    category: "Mens",
    id: 2,
    categoryFeaturedImage: "/images/shop/man-sweater-01.png",
    products: [
      {
        name: "Blue T-Shirt",
        color: "Blue",
        size: "Large",
        material: "Cotton",
        price: 40.0,
        stockQuantity: 60,
        images: ["/images/shop/man-shirt-01.png"],
      },
      {
        name: "Black T-Shirt",
        color: "Black",
        size: "M",
        material: "Cotton",
        price: 80.0,
        stockQuantity: 20,
        images: ["/images/shop/man-shirt-02.png"],
      },
      {
        name: "Blue Plad Shirt",
        color: "Blue",
        size: "10",
        material: "Cotton",
        price: 70.0,
        stockQuantity: 40,
        images: ["/images/shop/man-shirt-03.png"],
      },
      {
        name: "Black T-Shirt",
        color: "Black",
        size: "10",
        material: "Cotton",
        price: 70.0,
        stockQuantity: 40,
        images: ["/images/shop/man-shirt-04.png"],
      },
      {
        name: "Black T-Shirt",
        color: "Black",
        size: "10",
        material: "Cotton",
        price: 70.0,
        stockQuantity: 40,
        images: ["/images/shop/man-shirt-05.png"],
      },
      {
        name: "Green Sweatshirt",
        color: "Green",
        size: "10",
        material: "Cotton",
        price: 70.0,
        stockQuantity: 40,
        images: ["/images/shop/man-sweater-03.png"],
      },
      {
        name: "White Sweatshirt",
        color: "White",
        size: "10",
        material: "Cotton",
        price: 70.0,
        stockQuantity: 40,
        images: ["/images/shop/man-sweater-02.png"],
      },
    ],
  },
  {
    category: "Womens",
    id: 3,
    categoryFeaturedImage: "/images/shop/woman-skirt-01.png",
    products: [
      {
        name: "Floral Skirt",
        color: "White",
        size: "M",
        material: "Cotton",
        price: 45.0,
        stockQuantity: 25,
        images: ["/images/shop/man-shirt-01.png"],
      },
      {
        name: "Midi Skirt",
        color: "Green",
        size: "M",
        material: "Silk",
        price: 50.0,
        stockQuantity: 35,
        images: ["/images/shop/man-shirt-01.png"],
      },
      {
        name: "Maxi Skirt",
        color: "Yellow",
        size: "L",
        material: "Cotton",
        price: 55.0,
        stockQuantity: 40,
        images: ["/images/shop/man-shirt-01.png"],
      },
    ],
  },
];

const cart = [
  {
    id: 1,
    name: "Ball Crew Shirt",
    price: "12.00",
    quantity: 2,
    size: "S",
    image: "/images/shop/man-shirt-01.png",
    color: "blue",
  },
  {
    id: 2,
    name: "Ball Crew Shirt",
    price: "24.00",
    quantity: 1,
    size: "M",
    image: "/images/shop/man-sweater-02.png",
    color: "red",
  },
];

let total = 0;

cart.map((item) => (total += parseFloat(item.price)));

const CartPage = () => {
  return (
    <main>
      <div className="bg-gray-100 ">
        <div className="max-w-6xl m-auto font-light flex gap-2 text-gray-500 py-3 items-center px-2">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <FaAngleRight />

          <p className="font-semibold">Cart</p>
        </div>
      </div>
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl m-auto px-2">
          <div>
            {cart.map((item) => (
              <div
                className="grid grid-cols-8 items-center bg-[#eee] p-2 mb-4 relative"
                key={item.id}
              >
                <div className="flex gap-4 items-center col-span-6 md:col-span-2">
                  <div className="relative h-[100px] w-[100px] bg-gray-100">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      style={{ objectFit: "contain", padding: "10px" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <div className="flex gap-4">
                      <p>
                        Color:
                        <span className="font-semibold capitalize">
                          {" "}
                          {item.color}{" "}
                        </span>
                      </p>
                      <p>
                        Size: <span className="font-semibold">{item.size}</span>
                      </p>
                    </div>
                    <div className=" md:hidden col-span-4 text-center m-auto">
                      <form className="max-w-xs ">
                        <div className="relative flex items-center max-w-[8rem]">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="quantity-input"
                            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                          >
                            <svg
                              className="w-3 h-3 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id="quantity-input"
                            data-input-counter
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                            placeholder="1"
                            value={item.quantity}
                            required
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="quantity-input"
                            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                          >
                            <svg
                              className="w-3 h-3 text-gray-900 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <div className="col-span-4 text-center m-auto">
                  <form className="max-w-xs ">
                    <div className="relative flex items-center max-w-[8rem]">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                        placeholder="1"
                        value={item.quantity}
                        required
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div> */}
                <div className="col-span-4 hidden md:block text-center m-auto">
                  <form className="max-w-xs ">
                    <div className="relative flex items-center max-w-[8rem]">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                        placeholder="1"
                        value={item.quantity}
                        required
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-span-2">
                  {/* <div className="col-span-2 "> */}
                  <FaTimes className="absolute top-4 right-4" />
                  <p className="font-semibold text-gray-600 text-center">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div className="grid grid-cols-8 mt-4">
            <p className="text-gray-600 font-semibold ">Subtotal</p>
            <p className="text-gray-700 font-semibold text-xl text-right col-span-6 -pr-4">
              ${total}.00
            </p>
          </div>
          <div className="mt-8 sm:flex gap-4 justify-between items-center">
            <div>
              <SecondaryButton
                buttonUrl="/shop"
                buttonName="Continue Shopping"
              />
            </div>
            <div className="mt-4 sm:mt-0">
              <PrimaryButton buttonUrl="/checkout" buttonName="Checkout" />
            </div>
          </div>
          <div className="mt-20">
            <h2 className="font-semibold mb-6">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {shop.map(
                (product) =>
                  product.category === "Mens" &&
                  product.products.splice(0, 4).map((item, index) => (
                    <div key={index}>
                      <div className="w-[100%] h-[400px] bg-[#f1f1f1] relative">
                        <Image
                          src={item.images[0]}
                          className="p-8"
                          fill
                          style={{ objectFit: "contain" }}
                          alt=""
                        />
                      </div>
                      <div className="capitalize text-center lg:text-left mt-4 text-sm">
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="font-semibold text-gray-700">
                          ${item.price}.00
                        </p>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
