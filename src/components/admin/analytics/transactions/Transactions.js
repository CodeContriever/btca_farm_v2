import React, { useState, useEffect } from "react";

const Transactions = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  // Sample data for different months (replace with actual data)
  const monthData = {
    January: {
      totalTransactions: 100,
      newTransactions: 25,
      growth: 15,
    },
    February: {
      totalTransactions: 120,
      newTransactions: 30,
      growth: 20,
    },
    // Add data for other months
  };

  useEffect(() => {
    // Get the current month when the component mounts
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    setSelectedMonth(currentMonth);
  }, []);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const selectedMonthData = monthData[selectedMonth];

  return (
    <div>
      <h2 className="font-medium text-blue-800 mb-4">Transactions</h2>
          <div className="flex flex-wrap items-center justify-between">
              
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-md shadow-xl p-4">
            <h3 className="text-lg font-medium text-gray-700">Month</h3>
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
              </div>

              
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                  
          <div className="bg-white rounded-md shadow-xl p-4">
            <h3 className="text-lg font-medium text-gray-700">Total Transactions</h3>
            <p className="text-3xl font-bold text-blue-700">
              {selectedMonthData ? `$${selectedMonthData.totalTransactions}` : ""}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-md shadow-xl p-4">
            <h3 className="text-lg font-medium text-gray-700">New Transactions</h3>
            <p className="text-3xl font-bold text-blue-700">
              {selectedMonthData ? selectedMonthData.newTransactions : ""}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-md shadow-xl p-4">
            <h3 className="text-lg font-medium text-gray-700">Growth</h3>
            <p className="text-3xl font-bold text-blue-700">
              {selectedMonthData ? `${selectedMonthData.growth}%` : ""}
            </p>
          </div>
        </div>

      
              


      </div>
    </div>
  );
};

export default Transactions;
