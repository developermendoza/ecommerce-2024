import { IoIosArrowUp } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiProfileFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";
import { PrimaryButton, SecondaryButton } from "@/ui/buttons";

import Image from "next/image";
import { getBlogs, getCategories, getProducts, getTags } from "@/utils";
import Link from "next/link";

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
export const ShopSideBar = () => {
  return (
    <aside>
      <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4">
        <h3 className="font-semibold">Categories</h3>
        <IoIosArrowUp />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Women</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Men</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Kids</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Gifts</span>
        </label>
      </div>
      <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4 mt-6">
        <h3 className="font-semibold">Colors</h3>
        <IoIosArrowUp />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex gap-4 items-center">
          <div className="bg-blue-500 w-4 h-4 rounded-full"></div> <p>Blue</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-gray-500 w-4 h-4 rounded-full"></div> <p>Grey</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-red-500 w-4 h-4 rounded-full"></div> <p>Red</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-yellow-500 w-4 h-4 rounded-full"></div>
          <p>Yellow</p>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4">
        <h3 className="font-semibold">Brand</h3>
        <IoIosArrowUp />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Adidas</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Chloe</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Kendo</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Nike</span>
        </label>
      </div>
      <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4 mt-4">
        <h3 className="font-semibold">Price</h3>
        <IoIosArrowUp />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">$10.00 - $49.00</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">$50.00 - $99.00</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">$100.00 - $199.00</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">$200.00 +</span>
        </label>
      </div>
    </aside>
  );
};

const Categories = ({ categories }: { categories: any[] }) => {
  return (
    <ul className="flex flex-col gap-2">
      <li>All</li>
      {categories.length > 0
        ? categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))
        : "...Loading"}
    </ul>
  );
};

const Blogs = (data: any) => {
  return (
    <ul className="flex flex-col gap-2">
      {data?.blogs.length > 0
        ? data?.blogs.splice(0, 3).map((blog: any) => (
            <Link
              href={`/blog/${blog.id}/${blog.title}`}
              key={blog.id}
              className="flex gap-2 items-center"
            >
              <div className="h-[100px] w-[100px] relative">
                <Image
                  src={blog.featuredImage}
                  alt=""
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div>
                <p className="text-gray-600">{blog.date}</p>
                <p className="font-semibold">{blog.title}</p>
              </div>
            </Link>
          ))
        : "Loading"}
    </ul>
  );
};

const Tags = ({ tags }: { tags: any[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.length > 0
        ? tags.map((tag) => (
            <p
              key={tag.id}
              className="text-gray-500 p-2 rounded border-gray-400 border-[1px] text-sm"
            >
              {tag.name}
            </p>
          ))
        : "...Loading"}
    </div>
  );
};

export const BlogSidebar = async () => {
  const { blogs } = await getBlogs();
  const { categories } = await getCategories();
  const { tags } = await getTags();
  return (
    <aside className="col-span-4 md:col-span-1">
      <div className="mb-10">
        <h3 className="font-semibold text-xl mb-4">Categories</h3>
        <Categories categories={categories} />
      </div>
      <div className="mb-10">
        <h2 className="font-semibold text-xl mb-4">Latest Posts</h2>
        <Blogs blogs={blogs} />
      </div>
      <div className="mb-10">
        <h2 className="font-semibold text-xl mb-4">Tags</h2>

        <Tags tags={tags} />
      </div>
    </aside>
  );
};

export const AccountSidebar = () => {
  return (
    <div className="bg-[#111111] flex-grow border-r-2 border-gray-400 text-gray-300 py-8 relative">
      <ul>
        <Link href="/account/overview">
          <li className="flex gap-4 items-center p-4 text-xl hover:text-white">
            <MdDashboard />
            Overview
          </li>
        </Link>
        <Link href="/account/settings">
          <li className="flex gap-4 items-center p-4 text-xl hover:text-white">
            <IoSettings />
            Settings
          </li>
        </Link>
        <Link href="/account/profile">
          <li className="flex gap-4 items-center p-4 text-xl hover:text-white">
            <RiProfileFill />
            Profile
          </li>
        </Link>
        <Link href="/account/orders">
          <li className="flex gap-4 items-center p-4 text-xl hover:text-white">
            <FaShoppingBag />
            Orders
          </li>
        </Link>
      </ul>
      <div className="border-t-2 border-gray-400 absolute bottom-0 right-0 left-0">
        <p className="flex items-center gap-4 p-4 text-xl">
          <PiSignOutBold />
          Signout
        </p>
      </div>
    </div>
  );
};

export const CartSidebar = ({
  setIsCartSidebarOpen,
}: {
  setIsCartSidebarOpen: any;
}) => {
  const products = [
    {
      id: 1,
      name: "Azure Breeze Shirt",
      price: 25.99,
      color: "Blue",
      category: "Mens",
      featuredImage: "/images/shop/man-shirt-01.png",
      description: "A casual blue shirt perfect for everyday wear.",
      sku: "SHIRT001",
      stock: 60,
      rating: 4.2,
      reviews: 85,
      brand: "CasualWear",
      weight: "220g",
      dimensions: "30x20x1 cm",
      materials: "Cotton",
      dateAdded: "2023-07-01",
    },
    {
      id: 2,
      name: "Ivory Executive Shirt",
      price: 35.99,
      color: "White",
      category: "Mens",
      featuredImage: "/images/shop/man-shirt-02.png",
      description: "A formal white shirt ideal for business meetings.",
      sku: "SHIRT002",
      stock: 45,
      rating: 4.6,
      reviews: 100,
      brand: "BusinessAttire",
      weight: "250g",
      dimensions: "30x20x1 cm",
      materials: "Cotton",
      dateAdded: "2023-06-15",
    },
    {
      id: 3,
      name: "Golden Summer Shirt",
      price: 20.99,
      color: "Yellow",
      category: "Mens",
      featuredImage: "/images/shop/man-shirt-03.png",
      description: "A bright yellow shirt perfect for summer.",
      sku: "SHIRT003",
      stock: 70,
      rating: 4.4,
      reviews: 90,
      brand: "SunnyDays",
      weight: "210g",
      dimensions: "30x20x1 cm",
      materials: "Cotton",
      dateAdded: "2023-06-01",
    },
    {
      id: 4,
      name: "Urban Denim Shirt",
      price: 45.99,
      color: "Denim",
      category: "Mens",
      featuredImage: "/images/shop/man-shirt-04.png",
      description: "A sturdy denim shirt for casual wear.",
      sku: "SHIRT004",
      stock: 35,
      rating: 4.7,
      reviews: 110,
      brand: "DenimCo",
      weight: "300g",
      dimensions: "30x20x1 cm",
      materials: "Denim",
      dateAdded: "2023-05-25",
    },
    {
      id: 5,
      name: "Rustic Plaid Shirt",
      price: 32.99,
      color: "Red",
      category: "Mens",
      featuredImage: "/images/shop/man-shirt-05.png",
      description: "A red plaid shirt great for outdoor activities.",
      sku: "SHIRT005",
      stock: 40,
      rating: 4.5,
      reviews: 75,
      brand: "OutdoorGear",
      weight: "240g",
      dimensions: "30x20x1 cm",
      materials: "Cotton",
      dateAdded: "2023-05-10",
    },
    {
      id: 6,
      name: "Heathered Comfort Sweater",
      price: 55.99,
      color: "Gray",
      category: "Mens",
      featuredImage: "/images/shop/man-sweater-01.png",
      description: "A comfortable gray cotton sweater for cool weather.",
      sku: "SWEATER001",
      stock: 25,
      rating: 4.8,
      reviews: 65,
      brand: "ComfortWear",
      weight: "500g",
      dimensions: "40x30x5 cm",
      materials: "Cotton",
      dateAdded: "2023-04-20",
    },
    {
      id: 7,
      name: "Navy Winter Warmth Sweater",
      price: 65.99,
      color: "Navy",
      category: "Mens",
      featuredImage: "/images/shop/man-sweater-02.png",
      description: "A warm navy wool sweater for winter.",
      sku: "SWEATER002",
      stock: 30,
      rating: 4.9,
      reviews: 80,
      brand: "WinterCozy",
      weight: "600g",
      dimensions: "40x30x5 cm",
      materials: "Wool",
      dateAdded: "2023-03-15",
    },
    {
      id: 8,
      name: "Emerald Knit Sweater",
      price: 50.99,
      color: "Green",
      category: "Mens",
      featuredImage: "/images/shop/man-sweater-03.png",
      description: "A stylish green knitted sweater for fall.",
      sku: "SWEATER003",
      stock: 20,
      rating: 4.3,
      reviews: 50,
      brand: "KnitFashion",
      weight: "550g",
      dimensions: "40x30x5 cm",
      materials: "Wool, Acrylic",
      dateAdded: "2023-02-28",
    },
    {
      id: 1,
      name: "Blossom Pink Blouse",
      price: 29.99,
      color: "Pink",
      category: "Womens",
      featuredImage: "/images/shop/woman-shirt-01.png",
      description: "A pretty pink floral blouse perfect for spring.",
      sku: "BLOUSE001",
      stock: 55,
      rating: 4.6,
      reviews: 95,
      brand: "SpringStyle",
      weight: "180g",
      dimensions: "30x20x1 cm",
      materials: "Polyester",
      dateAdded: "2023-05-05",
    },
    {
      id: 1,
      name: "Snowy Silk Blouse",
      price: 49.99,
      color: "White",
      category: "Womens",
      featuredImage: "/images/shop/woman-skirt-01.png",
      description: "An elegant white silk blouse for formal occasions.",
      sku: "BLOUSE002",
      stock: 40,
      rating: 4.8,
      reviews: 100,
      brand: "ElegantWear",
      weight: "150g",
      dimensions: "30x20x1 cm",
      materials: "Silk",
      dateAdded: "2023-04-15",
    },
  ];
  return (
    <div>
      <div
        onClick={() => setIsCartSidebarOpen(false)}
        className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-60"
      ></div>
      <div className="bg-white z-[9999] relative">
        <div className="p-6">
          <div className="flex justify-between">
            <h2 className="font-semibold text-2xl">Your Cart (2)</h2>
            <FaTimes
              className="cursor-pointer"
              onClick={() => setIsCartSidebarOpen(false)}
            />
          </div>
          <p className="my-4">
            <span className="font-semibold">Free Shipping</span> or orders over{" "}
            <span className="font-semibold">$200.00</span>
          </p>
        </div>
        <div className="bg-[#eee] p-4">
          <div className="max-w-6xl m-auto">
            <div>
              {cart.map((item) => (
                <div
                  className="grid grid-cols-5 gap-2 items-center bg-[#eee] p-2 mb-4 relative"
                  key={item.id}
                >
                  <div className="flex gap-2 items-center col-span-2">
                    <div className="relative h-[150px] w-[180px] bg-gray-100">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        style={{ objectFit: "contain", padding: "12px" }}
                      />
                    </div>
                  </div>
                  <div className="text-left col-span-2">
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <div className="flex gap-4 py-2">
                        <p>
                          Color:
                          <span className="font-semibold capitalize">
                            {" "}
                            {item.color}{" "}
                          </span>
                        </p>
                        <p>
                          Size:{" "}
                          <span className="font-semibold">{item.size}</span>
                        </p>
                      </div>
                    </div>
                    <form className="max-w-xs mx-auto">
                      <div className="relative flex items-center max-w-[8rem]">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                          <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
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

                  <div className="">
                    <FaTimes className="absolute top-4 right-4" />
                    <p className="font-semibold text-right text-gray-600 absolute bottom-[30px] right-0">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h2 className="font-semibold text-lg">You May Also Like</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 pt-0">
          {products.splice(0, 2).map((product) => (
            <div key={product.id}>
              <div className="w-full max-w-[400px] h-[250px] bg-[#f1f1f1] relative">
                <Image
                  src={product.featuredImage}
                  className="p-8"
                  fill
                  style={{ objectFit: "contain" }}
                  alt=""
                />
              </div>
              <div className="capitalize text-center lg:text-left mt-4 text-sm">
                <p className="font-bold text-sm">{product.name}</p>
                <p className="font-semibold text-gray-700">
                  ${product.price}.00
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 flex justify-between text-lg text-gray-500">
          <p>Subtotal</p>
          <p className="font-semibold text-gray-600">${total}.00</p>
        </div>
        <div className="p-4">
          <div className="flex gap-4 justify-between">
            <Link
              href="/cart"
              onClick={() => setIsCartSidebarOpen(false)}
              className="w-full"
            >
              <p className="py-3 text-center text-black bg-white border border-2 border-black rounded hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-opacity-50">
                View Cart
              </p>
            </Link>
            <Link href="/checkout" className="w-full">
              <p className="py-3  text-center text-white bg-black border border-2 border-black rounded hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-opacity-50">
                Checkout
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
