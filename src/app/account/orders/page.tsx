import React from "react";
import { FaSort } from "react-icons/fa";
import Link from "next/link";

const OrdersPage = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Orders</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-6">
        <div className="pb-4 ">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center p-4 ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-4 ps-10 text-sm border rounded-lg w-80 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for orders"
            />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <p> Order no.</p>
                  <FaSort />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-2">
                  <p>Order date</p>
                  <FaSort />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <p>Total</p>
                  <FaSort />
                </div>
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
            <tr className="border-b bg-gray-800 border-gray-700 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white"
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
            <tr className="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                00728
              </th>
              <td className="px-6 py-4">8/15/2020</td>
              <td className="px-6 py-4">$99.32</td>
              <td className="px-6 py-4">Completed</td>
              <td>
                <Link
                  href="/account/orders/00728"
                  className="text-blue-400 underline hover:text-white cursor-pointer"
                >
                  View details
                </Link>
              </td>
            </tr>
            <tr className="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                00727
              </th>
              <td className="px-6 py-4">8/15/2020</td>
              <td className="px-6 py-4">$99.32</td>
              <td className="px-6 py-4">Completed</td>
              <td>
                <Link
                  href="/account/orders/00727"
                  className="text-blue-400 underline hover:text-white cursor-pointer"
                >
                  View details
                </Link>
              </td>
            </tr>
            <tr className="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                00726
              </th>
              <td className="px-6 py-4">8/15/2020</td>
              <td className="px-6 py-4">$99.32</td>
              <td className="px-6 py-4">Completed</td>
              <td>
                <Link
                  href="/account/orders/00726"
                  className="text-blue-400 underline hover:text-white cursor-pointer"
                >
                  View details
                </Link>
              </td>
            </tr>
            <tr className="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                00725
              </th>
              <td className="px-6 py-4">8/15/2020</td>
              <td className="px-6 py-4">$99.32</td>
              <td className="px-6 py-4">Completed</td>
              <td>
                <Link
                  href="/account/orders/00725"
                  className="text-blue-400 underline hover:text-white cursor-pointer"
                >
                  View details
                </Link>
              </td>
            </tr>
            <tr className="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                00724
              </th>
              <td className="px-6 py-4">8/15/2020</td>
              <td className="px-6 py-4">$99.32</td>
              <td className="px-6 py-4">Completed</td>
              <td>
                <Link
                  href="/account/orders/00724"
                  className="text-blue-400 underline hover:text-white cursor-pointer"
                >
                  View details
                </Link>
              </td>
            </tr>
            <tr className="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                00723
              </th>
              <td className="px-6 py-4">8/15/2020</td>
              <td className="px-6 py-4">$99.32</td>
              <td className="px-6 py-4">Completed</td>
              <td>
                <Link
                  href="/account/orders/00723"
                  className="text-blue-400 underline hover:text-white cursor-pointer"
                >
                  View details
                </Link>
              </td>
            </tr>
            <tr className="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                00722
              </th>
              <td className="px-6 py-4">8/15/2020</td>
              <td className="px-6 py-4">$99.32</td>
              <td className="px-6 py-4">Completed</td>
              <td>
                <Link
                  href="/account/orders/00722"
                  className="text-blue-400 underline hover:text-white cursor-pointer"
                >
                  View details
                </Link>
              </td>
            </tr>
            <tr className="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                00721
              </th>
              <td className="px-6 py-4">8/15/2020</td>
              <td className="px-6 py-4">$99.32</td>
              <td className="px-6 py-4">Completed</td>
              <td>
                <Link
                  href="/account/orders/00721"
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
  );
};

export default OrdersPage;
