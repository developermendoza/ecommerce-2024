"use client";
import React, { useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";

const shop = [
  {
    category: "Kid's",
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
      },
      {
        name: "Shorts",
        color: "Blue",
        size: "M",
        material: "Denim",
        price: 20.0,
        stockQuantity: 50,
      },
      {
        name: "Dress",
        color: "Pink",
        size: "L",
        material: "Polyester",
        price: 30.0,
        stockQuantity: 30,
      },
    ],
  },
  {
    category: "Men's",
    id: 2,
    categoryFeaturedImage: "/images/shop/man-sweater-01.png",
    products: [
      {
        name: "Sweater",
        color: "Brown",
        size: "Large",
        material: "Cotton",
        price: 40.0,
        stockQuantity: 60,
      },
      {
        name: "Blazer",
        color: "Navy",
        size: "M",
        material: "Wool",
        price: 80.0,
        stockQuantity: 20,
      },
      {
        name: "Sneakers",
        color: "White",
        size: "10",
        material: "Leather",
        price: 70.0,
        stockQuantity: 40,
      },
    ],
  },
  {
    category: "Skirts",
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
      },
      {
        name: "Midi Skirt",
        color: "Green",
        size: "M",
        material: "Silk",
        price: 50.0,
        stockQuantity: 35,
      },
      {
        name: "Maxi Skirt",
        color: "Yellow",
        size: "L",
        material: "Cotton",
        price: 55.0,
        stockQuantity: 40,
      },
    ],
  },
  {
    category: "Shirts",
    id: 4,
    categoryFeaturedImage: "/images/shop/woman-shirt-01.png",
    products: [
      {
        name: "Casual Shirt",
        color: "Blue",
        size: "S",
        material: "Linen",
        price: 25.0,
        stockQuantity: 70,
      },
      {
        name: "Dress Shirt",
        color: "White",
        size: "M",
        material: "Cotton",
        price: 35.0,
        stockQuantity: 50,
      },
      {
        name: "Graphic Tee",
        color: "Black",
        size: "S",
        material: "Polyester",
        price: 20.0,
        stockQuantity: 90,
      },
    ],
  },
];

const Collection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl m-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold mb-10">Shop by Collection</h2>
          <div className="flex gap-4 text-3xl">
            <MdOutlineKeyboardArrowLeft />
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {shop.map((product) => (
            <div
              key={product.id}
              className="w-[100%] h-[400px] bg-[#f1f1f1] relative text-center m-auto flex flex-col justify-center items-center"
            >
              <Image
                src={product.categoryFeaturedImage}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
              <p className="absolute  bottom-10 bg-white px-6 py-2 inline-block rounded">
                {product.category}{" "}
                <span className="pl-2">({product.products.length})</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
