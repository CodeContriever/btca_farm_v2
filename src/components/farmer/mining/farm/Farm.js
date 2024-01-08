import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MiningProgressChart from './Chart';

import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../../../store/farmer/Signin';

const MyFarm = () => {
  const signinData = useSelector(selectFarmerSigninData);
  const [miningRate, setMiningRate] = useState(0);
  const [miningBalance, setMiningBalance] = useState(0);
  const [miningStatus, setMiningStatus] = useState('Not Started');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMiningStatus = async () => {
      try {
        const response = await axios.get('https://api.afribook.world/mining/getMiningStatus');
        setMiningBalance(response.data.balance);
        setMiningStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching mining status:', error);
      }
    };

    fetchMiningStatus();
  }, []); 

  const handleStartMining = async () => {
    const accessToken = signinData?.accessToken || '';
    const userId = signinData?.userId || {};
    try {
      const response = await axios.post(
        'https://api.afribook.world/mining/startMiningCoin',
        { userId: userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.success) {
        console.log('Mining started:', response.data);
        setMiningStatus('Mining');
        setMiningRate(response.data.miningRate);
        setMiningBalance(response.data.balance);
        setErrorMessage(null); // Reset error message on successful mining start
      } else {
        console.error('Failed to start mining:', response.data.error);
        setErrorMessage(response.data.message);
        setMiningStatus('Not Started');
      }
    } catch (error) {
      console.error('Error starting mining:', error);
      setErrorMessage('Error starting mining. Please try again.');
    }
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div className='flex flex-row gap-3 items-center justify-center'>
          <button
            onClick={handleStartMining}
            className={`px-1 py-1 ${miningStatus === 'Mining' ? 'bg-green-500' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}
            disabled={miningStatus === 'Mining'}
          >
            {miningStatus === 'Mining' ? 'Mining' : 'Start Mining'}
          </button>
          <div>{miningRate} BTCA/hr</div>
        </div>
        <div className='flex flex-row gap-2 '>
          <div> Balance: {miningBalance} BTCA</div>
        </div>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-center mb-4">
          {errorMessage}
        </p>
      )}

      <div className="mining-chart">
        <MiningProgressChart miningRate={miningRate} />
      </div>
    </div>
  );
};

export default MyFarm;
