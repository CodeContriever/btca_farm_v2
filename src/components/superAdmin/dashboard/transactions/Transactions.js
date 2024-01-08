import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectSuperAdminSigninData } from "../../../../store/superAdmin/Signin";

const Transactions = () => {
  const signinData = useSelector(selectSuperAdminSigninData);

  // Define state to store transaction data
  const [transactionData, setTransactionData] = useState([]); // Change initial state to null

  useEffect(() => {
    const fetchTransactions = async () => {
      const accessToken = signinData?.accessToken || '';
      try {
        const response = await axios.get('https://api.afribook.world/admin/transactions', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          console.log('Transaction data fetch successful:', data);
          setTransactionData(data);
        } else {
          console.error('Error fetching data, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
        console.error('Error, please check your connection');
      }
    };

    fetchTransactions();
  }, [signinData]);

  const months = useMemo(
    () => [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ],
    []
  );

  const [selectedMonth, setSelectedMonth] = useState(months[new Date().getMonth()]);

  useEffect(() => {
    setSelectedMonth(months[new Date().getMonth()]);
  }, [months]);

const filteredTransactions = useMemo(() => {
  console.log("Transaction Data:", transactionData);
  console.log("Months:", months);
  console.log("Selected Month:", selectedMonth);

  return (
    transactionData?.data?.filter(transaction => {
      const transactionMonth = new Date(transaction.dateCreated).getMonth() + 1;
      return transactionMonth === months.indexOf(selectedMonth) + 1;
    }) || []
  );
}, [transactionData, selectedMonth, months]);

console.log("Filtered Transactions:", filteredTransactions);


  const totalTransactions = useMemo(() => {
    return transactionData?.data?.length || 0;
  }, [transactionData]);

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
            {totalTransactions > 0 ? `${totalTransactions} transactions` : "0"}
          </p>
        </div>

        {/* Filtered transactions */}
   <div className="w-full p-4 bg-white rounded-md shadow-lg">
  <h3 className="font-semibold text-gray-700 mb-2">Filtered Transactions</h3>
  <ul>
    {filteredTransactions.map(transaction => (
      <li key={transaction.transactionId}>
        {transaction.narration} - ${transaction.amount}
      </li>
    ))}
  </ul>
</div>


        {/* New transactions */}
        {/* ... (similar logic as above for other sections) */}
      </div>
    </div>
  );
};

export default Transactions;
