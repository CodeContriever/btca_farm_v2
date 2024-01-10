import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectResellerSigninData } from '../../../store/reseller/Signin';
import toast, { Toaster } from 'react-hot-toast';

const Transactions = () => {
  const signinData = useSelector(selectResellerSigninData);
  const { userId } = signinData?.data || {};
  const accessToken = signinData?.accessToken || '';

  const [transactionData, setTransactionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`https://api.afribook.world/transaction/getUserTransactionHistory/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            page: currentPage,
            pageSize: 10, // Adjust this based on your desired page size
          },
        });
        if (response.status === 200) {
          const responseData = response.data;
          console.log('Reseller transaction fetch successful:', responseData);

          if (responseData.data && Array.isArray(responseData.data)) {
            // Check if transactions property exists in responseData.data
            const transactions = responseData.data || [];

            setTransactionData(transactions);
          } else {
            console.error('Invalid data format. Expected an array.');
            toast.error('Error: Invalid data format.');
          }
        } else {
          console.error('Error fetching data, please try again later.');
          toast.error('Transactions are not available, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        toast.error('Error, please check your connection');
      }
    };

    fetchTransactions();
  }, [userId, accessToken, currentPage]);

  return (
    <div className="container mx-auto px-6">
      <div>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>
      <div>
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">Transactions</h1>
        <div className="bg-white rounded-md shadow-lg p-8 mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3 border-r">
                    TRANSACTION ID
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    DATE
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    CLIENT
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    ROLE
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    ITEM
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    QUANTITY
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    COST
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionData && transactionData.length > 0 ? (
                  transactionData.map((transaction, index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      <th scope="row" className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {transaction.transactionId}
                      </th>
                      <td className="px-4 py-3 border-r">{transaction.date}</td>
                      <td className="px-4 py-3 border-r">{transaction.client}</td>
                      <td className="px-4 py-3 border-r">{transaction.role}</td>
                      <td className="px-4 py-3 border-r">{transaction.item}</td>
                      <td className="px-4 py-3 border-r">{transaction.quantity}</td>
                      <td className="px-4 py-3 border-r">${transaction.cost}</td>
                      <td className="px-4 py-3 border-r">{transaction.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="my-4 px-4 py-3 border-r text-xl text-center text-gray-500 dark:text-gray-400">
                      Transactions not available, please check back later.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Prev
              </button>
              <div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white mx-2">{1 + (currentPage - 1) * 10}</span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">{transactionData.length}</span>
                </span>
              </div>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={transactionData.length < 10}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
