import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../../../store/farmer/Signin';

const MyFarm = () => {
  const signinData = useSelector(selectFarmerSigninData);
  const userId = signinData?.user?.userId || null;
  const accessToken = signinData?.accessToken || '';

  const [miningStatus, setMiningStatus] = useState('Not Started');
  const [miningData, setMiningData] = useState(null);

   /* eslint-disable no-unused-vars */
  const [loading, setLoading] = useState(false);
  const [farmerPackages, setFarmerPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://api.afribook.world/subscription/getUserPackageByStatus`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
           params: {
          status: 'Mining',
        },
        });

        if (response.status === 200) {
          const responseData = response.data;
          console.log('farmer mining packages fetch successful:', responseData);

          if (responseData.data && Array.isArray(responseData.data)) {
            const miningPackages = responseData.data || [];

            // const activePackages = activatedPackages.filter(pkg => pkg.status === 'Mining' );
            // console.log(activePackages);

            setFarmerPackages(miningPackages);

          } else {
            console.error('Invalid data format. Expected an array.');
            toast.error('Error: Invalid data format.');
          }
        } else {
          console.error('Error fetching farmer mining packages, please try again later.');
          toast.error('Error fetching packages, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
        toast.error('Error, please check your connection');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, accessToken]);


  const handleStartMining = async (packageId) => {
    try {
      const response = await axios.post(
        'https://api.afribook.world/mining/startMiningCoin',
        { userId: userId, packageId: packageId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.success) {
        console.log('Mining started:', response.data);

        // Find the index of the selected package in the array
        const selectedPackageIndex = farmerPackages.findIndex(pkg => pkg.id === packageId);

        if (selectedPackageIndex !== -1) {
          // Create a copy of the packages array to avoid mutating state directly
          const updatedPackages = [...farmerPackages];
          // Update the status of the selected package to "Mining"
          updatedPackages[selectedPackageIndex].status = 'Mining';
          setFarmerPackages(updatedPackages);
        }

        setMiningStatus('Mining');
        setMiningData(response.data.data);
      } else {
        console.error('Failed to start mining:', response.data.error);
        toast.error(response.data.message);
        setMiningStatus('Not Started');
      }
    } catch (error) {
      console.error('Error starting mining:', error);
      toast.error('Error starting mining. Please try again.');
    }
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-200">
      <div className="">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>

      <div className="bg-white rounded-md shadow-lg p-4 mt-4">
        
        {/* Start mining button */}
        {/* <div className="flex flex-row gap-3 items-center justify-center">
          <button
            onClick={handleStartMining}
            className={`px-1 py-1 ${miningStatus === 'Mining' ? 'bg-green-500' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}
            disabled={miningStatus === 'Mining'}
          >
            {miningStatus === 'Mining' ? 'Mining' : 'Start Mining'}
          </button>
        </div> */}

        {/* Active/ subscribed packages */}
        <div>
          {farmerPackages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">No activated packages available, please subscribe.</p>
          ) : (
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
              {farmerPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  <p>From: {pkg.boughtFrom}</p>
                  <p>Buying Price: ${pkg.buyingPrice}</p>
                  <p>Mined: {pkg.mined}</p>
                  <p>Total Reward: {pkg.totalReward}</p>
                  <p>Withdrawn: {pkg.withdrawn}</p>

                  <button
                    className={`bg-white p-2 rounded-md text-black`}
                    onClick={() => handleStartMining(pkg.id)}
                    disabled={pkg.status === 'Mining'}
                  >
                    {pkg.status === 'Mining' ? 'Mining' : 'Start Mining'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mining Readings UI */}
        {miningStatus === 'Mining' && miningData && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Mining Readings</h2>
            <p>Readings: {miningData.readings}</p>
            {/* Add more readings UI components based on the structure of miningData */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFarm;
