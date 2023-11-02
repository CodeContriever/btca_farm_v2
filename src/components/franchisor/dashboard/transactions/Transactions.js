import React, { useState, useEffect } from 'react';
import { RiCalendarEventFill, RiMoneyCnyCircleFill, RiCheckFill, RiCloseFill, RiNumbersLine } from 'react-icons/ri';

const TransactionHistory = () => {
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactionHistory = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTransactionData(data);
      } else {
        const errorData = await response.json();
        console.error('Error getting your history:', errorData);
        throw Error(errorData.message);
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
    }
  };

  useEffect(() => {
    const apiUrl = 'https://btca.afribook.world/transaction/getUserTransactionHistory/ea02f715-37c0-4c27-95fb-3452e6cfb1f0';

    fetchTransactionHistory(apiUrl);
  }, []);

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-0 md:min-w-full">
          <thead className="">
            <tr className="flex flex-row justify-between items-center gap-2">
              <th className="text-left flex flex-row items-center gap-2">
                <RiNumbersLine /> Transaction ID
              </th>
              <th className="text-left flex flex-row items-center gap-2">
                Date <RiCalendarEventFill className="w-3 h-3" />
              </th>
              <th className="text-left flex flex-row items-center gap-2">
                From
                <svg
                  className="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 15"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                  />
                </svg>
              </th>
              <th className="text-left flex flex-row items-center gap-2">Package </th>
              <th className="text-left flex flex-row items-center gap-2">
                Amount <RiMoneyCnyCircleFill />
              </th>
              <th className="text-left flex flex-row items-center gap-2">
                Status
                <svg
                  className="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h14M1 6h14M1 11h7"
                  />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.date}</td>
                <td>{transaction.from}</td>
                <td>{transaction.package}</td>
                <td>{transaction.amount}</td>
                <td className="flex items-center">
                  {transaction.status === 'Completed' ? (
                    <RiCheckFill className="text-green-600" />
                  ) : (
                    <RiCloseFill className="text-red-600" />
                  )}
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
