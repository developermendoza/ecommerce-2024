import React from "react";

const OrderDetails = ({ params }: { params: { slug: any } }) => {
  const orderId = params.slug[0];
  return (
    <div className="bg-gray-700 rounded-xl p-12">
      <div className="text-white flex items-center justify-between mb-10">
        <h1 className="font-semibold text-3xl">Order # {orderId}</h1>
        <div className="text-right">
          <p className="text-xl font-semibold">Themesberg Inc.</p>
          <p>291 N 4th St, San Jose, CA 95112, USA</p>
          <p className="text-gray-300 text-sm font-light">August 1, 2021</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-white font-bold">BILL TO:</p>
          <p className="text-gray-300 italic text-lg font-medium mt-4">
            Themesberg Inc., LOUISVILLE, Selby 3864 Johnson Street, United
            States of America VAT Code: AA-1234567890
          </p>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-8">
        <table className="w-full text-sm text-left rtl:text-right bg-gray-800">
          <thead className="text-xs uppercase text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                QTY
              </th>
              <th scope="col" className="px-6 py-3">
                DISCOUNT
              </th>
              <th scope="col" className="px-6 py-3">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap text-white"
              >
                Apple MacBook Pro 17&quot;
              </th>
              <td className="px-6 py-4">$128.00</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">50%</td>
              <td className="px-6 py-4">$64.00</td>
            </tr>
            <tr className="bg-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">$69.00</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">0%</td>
              <td className="px-6 py-4">$69.00</td>
            </tr>
            <tr className="bg-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">100.00</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">0%</td>
              <td className="px-6 py-4">$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
