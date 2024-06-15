import { ShopHero } from "@/ui/heroes";
import { ShopPageToolBar } from "@/ui/toolbars";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import { ShopSideBar } from "@/ui/sidebars";
import { IoFilter } from "react-icons/io5";

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

const ShopPage = () => {
  return (
    <main>
      <ShopHero />
      <div className="max-w-6xl m-auto py-14 px-6">
        <ShopPageToolBar />
        <div className="grid grid-cols-4 gap-8">
          <div className="hidden lg:block">
            <ShopSideBar />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-4 lg:col-span-3">
            {shop.map(
              (product) =>
                product.category === "Mens" &&
                product.products.map((item, index) => (
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
                    <div className="capitalize text-left mt-4 text-sm">
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
    </main>
  );
};

export default ShopPage;
