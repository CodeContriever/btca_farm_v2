import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectAdminSigninData } from "../../../store/admin/Signin";



const Transactions = () => {
      const signinData = useSelector(selectAdminSigninData);
  const { userId } = signinData?.data || {};

  // Define state to store user data
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Make an API call to get the user's data
        const response = await axios.get(`https://btca.afribook.world/account/user/${userId}`);
        
        if (response.status === 200) {
          const data = response.data;
          console.log('User data fetch successful:', data);
          setTransactionData(data); // Store the fetched data in the state
        } else {
          console.error('Error fetching data, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        // Handle the error, e.g., display an error message to the user
        console.error('Error, please check your connection');
      }
    };

    // Call the fetchUser function when the component mounts
    fetchTransactions();
  }, [userId]);

  return (

    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Transactions
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">

        <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3 border-r">TRANSACTION ID</th>
                            <th scope="col" className="px-4 py-3 border-r">DATE</th>
                  <th scope="col" className="px-4 py-3 border-r">CLIENT</th>
                   <th scope="col" className="px-4 py-3 border-r">ROLE</th>
                            <th scope="col" className="px-4 py-3 border-r">ITEM</th>
                  <th scope="col" className="px-4 py-3 border-r">QUANTITY</th>
                   <th scope="col" className="px-4 py-3 border-r">COST</th>
                            <th scope="col" className="px-4 py-3 border-r">STATUS</th>
                        </tr>
              </thead>
              
              <tbody>
                
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">56839485GB4562</th>
                            <td className="px-4 py-3 border-r">15 May 2021</td>
                            <td className="px-4 py-3 border-r">Garrry Kate</td>
                  <td className="px-4 py-3 border-r">Franchisor</td>
                     <td className="px-4 py-3 border-r">Premium Package</td>
                  <td className="px-4 py-3 border-r">2</td>
                  <td className="px-4 py-3 border-r">$1370</td>
                  <td className="px-4 py-3 border-r">Completed</td>
                            
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



  )
}

export default Transactions