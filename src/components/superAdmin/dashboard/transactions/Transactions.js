import React, { useState, useEffect, useMemo } from "react";

const Transactions = () => {
  const months = useMemo(
    () => [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ],
    []
  );

  const [selectedMonth, setSelectedMonth] = useState(months[new Date().getMonth()]);

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
  March: {
    totalTransactions: 150,
    newTransactions: 35,
    growth: 25,
  },
  April: {
    totalTransactions: 130,
    newTransactions: 30,
    growth: 23,
  },
  May: {
    totalTransactions: 140,
    newTransactions: 34,
    growth: 18,
  },
  June: {
    totalTransactions: 160,
    newTransactions: 38,
    growth: 22,
  },
  July: {
    totalTransactions: 180,
    newTransactions: 40,
    growth: 30,
  },
  August: {
    totalTransactions: 190,
    newTransactions: 42,
    growth: 28,
  },
  September: {
    totalTransactions: 170,
    newTransactions: 39,
    growth: 26,
  },
  October: {
    totalTransactions: 160,
    newTransactions: 36,
    growth: 20,
  },
  November: {
    totalTransactions: 140,
    newTransactions: 32,
    growth: 16,
  },
  December: {
    totalTransactions: 130,
    newTransactions: 28,
    growth: 14,
  },
};


  useEffect(() => {
    setSelectedMonth(months[new Date().getMonth()]);
  }, [months]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-medium text-blue-800 mb-4">Transactions</h2>
      <div className="flex flex-wrap justify-between gap-4">
        {/* Months */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white rounded-md shadow-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Month</h3>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Total transactions */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white rounded-md shadow-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Total Transactions</h3>
          <p className="text-blue-700 font-bold">
            {monthData[selectedMonth] ? `$${monthData[selectedMonth].totalTransactions}` : ""}
          </p>
        </div>

        {/* New transactions */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white rounded-md shadow-lg">
          <h3 className="font-semibold text-gray-700 mb-2">New Transactions</h3>
          <p className="text-blue-700 font-bold">
            {monthData[selectedMonth] ? monthData[selectedMonth].newTransactions : ""}
          </p>
        </div>

        {/* Growth */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white rounded-md shadow-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Growth</h3>
          <p className="text-blue-700 font-bold">
            {monthData[selectedMonth] ? `${monthData[selectedMonth].growth}%` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
