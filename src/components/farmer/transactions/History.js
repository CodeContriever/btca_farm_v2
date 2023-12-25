import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../../store/farmer/Signin';

const History = () => {
  const navigate = useNavigate();
  const signinData = useSelector(selectFarmerSigninData);
  const { userId } = signinData?.data || {};
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    // Check if userId is available in either signup or signin data
    const userId = signinData?.data?.userId;

    const fetchData = async () => {
      if (!userId) {
        toast.error('Please sign in first');
        // navigate('/farmer/signin'); 
      } else {
        try {
          const response = await axios.get(
            `https://api.afribook.world/transaction/getUserTransactionHistory/${userId}`
          );

          // Destructure relevant data from the API response
          const { data } = response;
          setTransactionData(data);
        } catch (error) {
          // Handle the error
        }
      }
    };

    fetchData();
  }, [signinData, navigate, userId]);
    
    //   if (!userId) {
//     // Return some JSX or null if userId is not available
//     return null;
//   }
    
    
      const handleUpdateTransactions = async () => {
    try {
      // Make a request to update transactions
      const updateResponse = await axios.post(
        'https://api.afribook.world/transaction/addTransaction',
        {
          // Include any necessary data for the update
        }
      );

      // If the update is successful, fetch the updated transaction history
      if (updateResponse.status === 200) {
        const fetchResponse = await axios.get(
          `https://api.afribook.world/transaction/getUserTransactionHistory/${userId}`
        );

        // Update the transactionData state with the new data
        setTransactionData(fetchResponse.data);
      }
    } catch (error) {
      // Handle the error
    }
  };



  return (
    <div>
      {/* Toast Container */}
      <div className="">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>

           {/* Update Button */}
      <button
        onClick={handleUpdateTransactions}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4"
      >
        Update Transactions
      </button>

      <div className="overflow-x-auto">
  {transactionData.length > 0 ? (
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
                ITEM
              </th>
              <th scope="col" className="px-4 py-3 border-r">
                FROM
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
            {transactionData.map((transaction) => (
              <tr key={transaction.TransactionID} className="border-b dark:border-gray-700">
                <th scope="row" className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {transaction.TransactionID}
                </th>
                <td className="px-4 py-3 border-r">{transaction.Date}</td>
                <td className="px-4 py-3 border-r">{transaction.Item}</td>
                <td className="px-4 py-3 border-r">{transaction.From}</td>
                <td className="px-4 py-3 border-r">{transaction.Quantity}</td>
                <td className="px-4 py-3 border-r">{transaction.Cost}</td>
                <td className="px-4 py-3 border-r">{transaction.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>

  ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800 text-center">
              Transactions history not available, please check back later.
            </p>
          </div>
        )}

      </div>

    </div>
  );
};

export default History;
