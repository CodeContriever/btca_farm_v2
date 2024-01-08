import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../../store/farmer/Signin';
import toast, { Toaster } from 'react-hot-toast';

const WalletHistory = () => {
  const signinData = useSelector(selectFarmerSigninData);
  
  const [walletData, setWalletData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const walletHistoryPerPage = 10;

   const startIndex = (currentPage - 1) * walletHistoryPerPage;
  const endIndex = startIndex + walletHistoryPerPage;
  const visibleWalletHistory = walletData.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchWalletHistory = async () => {
      const { userId } = signinData?.data || {};
      const accessToken = signinData?.accessToken || '';
      try {
        const response = await axios.get(`https://api.afribook.world/transaction/getWalletTransactionHistory/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            page: currentPage,
            pageSize: 10,
          },
        });
        if (response.status === 200) {
          const responseData = response.data;
           console.log('Farmer wallet histories fetch successfully:', responseData);

          if (responseData.data && Array.isArray(responseData.data)) {
            // Check if transactions property exists in responseData.data
            const walletHistory = responseData.data || [];

            setWalletData(walletHistory);
          } else {
            console.error('Invalid data format. Expected an array.');
            toast.error('Error: Invalid data format.');
          }
        } else {
          console.error('Error fetching data, please try again later.');
          toast.error('Not available, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
        toast.error('Error, please check your connection');
      }
    };

    fetchWalletHistory();
  }, [signinData, currentPage]);


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
                  {/* <th scope="col" className="px-4 py-3 border-r">
                   USER ID
                  </th> */}
                  <th scope="col" className="px-4 py-3 border-r">
                 WALLET ADDRESS
                  </th>
                  <th scope="col" className="px-4 py-3 border-r">
                   AMOUNT
                  </th>

                </tr>

              </thead>

              <tbody>
              {visibleWalletHistory && visibleWalletHistory.length > 0 ? (
          visibleWalletHistory.map((wallet, index) => (
            <tr key={index} className="border-b dark:border-gray-700">
              <th scope="row" className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">

                {wallet.walletId}
              </th>
              {/* Adjust the following lines according to your actual data structure */}
              {/* <td className="px-4 py-3 border-r">{transaction.userId}</td> */}
              <td className="px-4 py-3 border-r">{wallet.walletAddress}</td>
              <td className="px-4 py-3 border-r">{wallet.amount}</td>
            </tr>
          ))
                ) : (
                  <tr>
                    <td colSpan="8" className="my-4 px-4 py-3 border-r text-xl text-center text-gray-500 dark:text-gray-400">
        {walletData && walletData.length === 0
          ? 'No transactions available'
          : 'Loading...'}
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
                {walletData.length > 0 && (
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white mx-2">
                    {1 + startIndex}
                  </span>
                  {/* to */}
                  {/* <span className="font-semibold text-gray-900 dark:text-white mx-2">
                    {Math.min(transactionData.length, endIndex)}
                  </span> */}
                  of
                  <span className="font-semibold text-gray-900 dark:text-white mx-2">
                    {walletData.length}
                  </span>
                </span>
              )}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                     disabled={walletData.length <= endIndex}
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

export default WalletHistory;
