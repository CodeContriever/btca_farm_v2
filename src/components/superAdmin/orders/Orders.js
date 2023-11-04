import React from "react";

const Orders = () => {
  return (
    <div className="container mx-auto px-6">
      <div>
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Orders
        </h1>
        <div className="bg-white rounded-md shadow-lg p-8 mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3 border-r">ORDER ID</th>
                  <th className="px-4 py-3 border-r">DATE</th>
                  <th className="px-4 py-3 border-r">BUYER</th>
                  <th className="px-4 py-3 border-r">ROLE</th>
                  <th className="px-4 py-3 border-r">ITEM</th>
                  <th className="px-4 py-3 border-r">QUANTITY</th>
                  <th className="px-4 py-3 border-r">COST</th>
                  <th className="px-4 py-3 border-r">PAYMENT STATUS</th>
                  <th className="px-4 py-3">ORDER STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 border-r">567384FHJ547</td>
                  <td className="px-4 py-3 border-r">12 Dec 2023</td>
                  <td className="px-4 py-3 border-r">Katthy Vick</td>
                  <td className="px-4 py-3 border-r">Franchisor</td>
                  <td className="px-4 py-3 border-r">Premium Package</td>
                  <td className="px-4 py-3 border-r">5</td>
                  <td className="px-4 py-3 border-r">$567</td>
                  <td className="px-4 py-3 border-r">Paid</td>
                  <td className="px-4 py-3">Delivered</td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">1000</span>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Orders;
