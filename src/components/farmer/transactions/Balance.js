import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Balance = () => {
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint to fetch the wallet balance
    axios.get('your-api-endpoint')
      .then(response => {
        // Assuming the API response has a property 'balance'
        setWalletBalance(response.data.balance);
      })
      .catch(error => {
        console.error('Error fetching wallet balance:', error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          {/* Add your app name or logo here */}
          {/* <span className="text-lg font-bold text-gray-800">BTCA Wallet</span> */}
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-2">Wallet Balance</h2>
          <p className="text-3xl font-bold text-indigo-600">£ {walletBalance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;