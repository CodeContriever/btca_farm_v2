import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MiningProgressChart from './Chart';

const MyFarm = () => {
  const [miningRate, setMiningRate] = useState(0);
  const [miningBalance, setMiningBalance] = useState(0);
  const [miningStatus, setMiningStatus] = useState('Not Started');

  useEffect(() => {
    // Fetch mining balance on page load
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
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleStartMining = async () => {
    try {
      // Make a post request to start mining
      const response = await axios.post('https://api.afribook.world/mining/startMiningCoin');
      if (response.data.success) {
        setMiningStatus('Mining');
      } else {
        console.error('Failed to start mining:', response.data.error);
      }
    } catch (error) {
      console.error('Error starting mining:', error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-200">

      <div className="flex justify-between items-center mb-4">

        {/* Start button & mining rate */}
        <div className='flex flex-row gap-3 items-center justify-center'>

          {/* start button */}
          <button
            onClick={handleStartMining}
            className={`px-1 py-1 ${miningStatus === 'Mining' ? 'bg-green-500' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}
            disabled={miningStatus === 'Mining'}
          >
            {miningStatus === 'Mining' ? 'Mining' : 'Start Mining'}
          </button>

          {/* mining rate */}
          <div>{miningRate} BTCA/hr</div>
        </div>

        {/* Mining balance */}
        <div className='flex flex-row gap-2 '>
          <div> Balance: {miningBalance} BTCA</div>
        </div>

      </div>

      {/* Mining Chart */}
      <div className="mining-chart">
        <MiningProgressChart />
      </div>
    </div>
  );
};

export default MyFarm;
