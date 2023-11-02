import React from "react";
import Transactions from "./transactions/Transactions";

const Analytics = () => {
  // Sample data, you can replace this with real data from your API
  const userCount = 1500;



  return (
    <div className="container mx-auto px-6">

      <h1 className="text-2xl font-medium mt-6 mb-4 text-gray-800">Analytics</h1>

      <div className="bg-white rounded-md shadow-lg p-8 mt-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Total Users- Farmers */}
          <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
            <div className="flex flex-col gap-8">
              <h2 className="font-semibold text-gray-700">Total Users (Farmers)</h2>
              <p className="text-blue-700 font-bold">{userCount} users</p>
            </div>
          </div>


            {/* Total Users- Franchisors */}
          <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
            <div className="flex flex-col gap-8">
              <h2 className="font-semibold text-gray-700">Total Franchisors</h2>
              <p className="text-blue-700 font-bold">{userCount} users</p>
            </div>
          </div>


           {/* Total Users- Resellers */}
          <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
            <div className="flex flex-col gap-8">
              <h2 className="font-semibold text-gray-700">Total Resellers</h2>
              <p className="text-blue-700 font-bold">{userCount} users</p>
            </div>
          </div>

         
        </div>

      </div>

      {/* Transactions */}
      <div className="bg-white rounded-md shadow-lg p-8 mt-4">
   <Transactions />
        
        <div>

        </div>
 </div>

    </div>
  );
}

export default Analytics;
