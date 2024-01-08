import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../../store/farmer/Signin';
import toast, { Toaster } from 'react-hot-toast';

const Balance = () => {
    const signinData = useSelector(selectFarmerSigninData);

  const [walletBalance, setWalletBalance] = useState(0);

   useEffect(() => {
    const fetchBalance = async () => {
      const { userId } = signinData?.data || {};
      const accessToken = signinData?.accessToken || '';
      try {
        const response = await axios.get(`https://api.afribook.world/account/getWalletBalance/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.status === 200) {
          const responseData = response.data;
          console.log('Wallet balance fetch successfully:', responseData);

          // Assuming the API response has a property 'balance'
      setWalletBalance(responseData.balance);

       
        } else {
          console.error('Error fetching data, please try again later.');
          toast.error('Balance not available, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching Balance:', error);
        toast.error('Error, please check your connection');
      }
    };

    fetchBalance();
   }, [signinData]);
  
  


  return (
    <div className="container mx-auto p-4">

         <div>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          {/* Add your app name or logo here */}
          {/* <span className="text-lg font-bold text-gray-800">BTCA Wallet</span> */}
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-2">Wallet Balance</h2>
          <p className="text-3xl font-bold text-indigo-600">{walletBalance.toFixed(2)} BTCA</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
