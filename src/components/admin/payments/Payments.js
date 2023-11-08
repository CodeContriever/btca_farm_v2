import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectSigninData } from "../../../store/admin/Signin";



const Payments = () => {
      const signinData = useSelector(selectSigninData);
  const { userId } = signinData?.data || {};

  // Define state to store user data
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        // Make an API call to get the user's data
        const response = await axios.get(`https://btca.afribook.world/account/user/${userId}`);
        
        if (response.status === 200) {
          const data = response.data;
          console.log('User data fetch successful:', data);
          setPaymentData(data); // Store the fetched data in the state
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
    fetchPayments();
  }, [userId]);

  return (

    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Payments
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">
 <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                  <th scope="col" className="px-4 py-3 border-r">PAYMENT ID</th>
                   <th scope="col" className="px-4 py-3 border-r">DATE</th>
                  <th scope="col" className="px-4 py-3 border-r">BUYER</th>
                        <th scope="col" className="px-4 py-3 border-r">ROLE</th>
                  <th scope="col" className="px-4 py-3 border-r">ITEM</th>
                   <th scope="col" className="px-4 py-3 border-r">QUANTITY</th>
                  <th scope="col" className="px-4 py-3 border-r">COST</th>
                   <th scope="col" className="px-4 py-3 border-r">PAYMENT STATUS</th>
                        </tr>
              </thead>
              
              <tbody>
                
                        <tr className="border-b dark:border-gray-700">
                  <th scope="row" className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    45627345JDB67
                  </th>
                    <td className="px-4 py-3 border-r">20 Nov 2022</td>
                            <td className="px-4 py-3 border-r">Jose Mosh</td>
                            <td className="px-4 py-3 border-r">Reseller</td>
                  <td className="px-4 py-3 border-r">Basic Package</td>
                     <td className="px-4 py-3 border-r">3</td>
                    <td className="px-4 py-3 border-r">$67</td>
                  <td className="px-4 py-3 border-r">Successful</td>
                        
                            
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

export default Payments