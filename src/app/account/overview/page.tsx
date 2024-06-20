import Image from "next/image";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import Link from "next/link";
import { AccountBreadcrumbs } from "@/ui/breadcrumbs";

const OverviewPage = () => {
  return (
    <div>
      <AccountBreadcrumbs
        currentPage="overview"
        isPageDetail={false}
        secondPage=""
      />
      <h1 className="font-bold text-2xl mb-4">Welcome Jennifer!</h1>
      <div className="grid grid-cols-5 grid-rows-6 gap-4">
        <div
          className="p-8 bg-[#111111] rounded-lg"
          style={{ gridArea: "1 / 1 / 3 / 3" }}
        >
          <div className="relative w-[150px] h-[150px]">
            <Image
              src="/images/about/ceo.jpeg"
              alt=""
              fill
              className="rounded"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Jennifer Smith</h2>
            <p className="text-gray-300 my-4">Software Engineer</p>
            <button
              type="button"
              className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
            >
              <FaUserEdit />
              Change picture
            </button>
          </div>
        </div>
        <div
          className="p-8 bg-[#111111] rounded-lg"
          style={{ gridArea: "3 / 1 / 5 / 3" }}
        >
          <h2 className="text-lg font-semibold">Profile Summary</h2>
          <form className="max-w-sm mx-auto mt-8">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
                placeholder="Jennifer"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="text"
                id="lastName"
                className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
                placeholder="Smith"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save all
            </button>
          </form>
        </div>

        <div
          className="p-8 bg-[#111111] rounded-lg"
          style={{ gridArea: "5 / 1 / 7 / 3" }}
        >
          <h2 className="text-lg font-semibold">Settings Summary</h2>
        </div>
        <div
          className="p-8 bg-[#111111] rounded-lg"
          style={{ gridArea: "1 / 3 / 7 / 6" }}
        >
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <div className="relative overflow-x-auto mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order no.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order status
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-800 border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    00731
                  </th>
                  <td className="px-6 py-4">5/9/2024</td>
                  <td className="px-6 py-4">$65.78</td>
                  <td className="px-6 py-4">Completed</td>
                  <td>
                    <Link
                      href="/account/orders/00731"
                      className="text-blue-400 underline hover:text-white cursor-pointer"
                    >
                      View details
                    </Link>
                  </td>
                </tr>
                <tr className="border-b bg-gray-800 border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white"
                  >
                    00730
                  </th>
                  <td className="px-6 py-4">3/9/2024</td>
                  <td className="px-6 py-4">$108.85</td>
                  <td className="px-6 py-4">Completed</td>
                  <td>
                    <Link
                      href="/account/orders/00730"
                      className="text-blue-400 underline hover:text-white cursor-pointer"
                    >
                      View details
                    </Link>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    00729
                  </th>
                  <td className="px-6 py-4">8/15/2020</td>
                  <td className="px-6 py-4">$99.32</td>
                  <td className="px-6 py-4">Completed</td>
                  <td>
                    <Link
                      href="/account/orders/00729"
                      className="text-blue-400 underline hover:text-white cursor-pointer"
                    >
                      View details
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
