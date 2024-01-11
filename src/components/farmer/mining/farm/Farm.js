import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MiningProgressChart from './Chart';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../../../store/farmer/Signin';

const MyFarm = () => {
  const signinData = useSelector(selectFarmerSigninData);
  const userId = signinData?.user?.userId || null;
  const accessToken = signinData?.accessToken || '';
  
  const [miningRate, setMiningRate] = useState(0);
  const [miningBalance, setMiningBalance] = useState(0);
  const [miningStatus, setMiningStatus] = useState('Not Started');
  const [errorMessage, setErrorMessage] = useState(null);

   /* eslint-disable no-unused-vars */
  const [loading, setLoading] = useState(false);
  const [farmerPackages, setFarmerPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://api.afribook.world/subscription/getUsersPackages`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            page: currentPage,
            pageSize: 10,
          },
        }
        );

        if (response.status === 200) {
          const responseData = response.data;
          console.log('farmer activated packages fetch successful:', responseData);

          if (responseData.data && Array.isArray(responseData.data)) {
            // Check if transactions property exists in responseData.data
            const packages = responseData.data || [];
            console.log(packages)

           // Filter packages with status "Pending"
            const miningPackages = packages.filter(pkg => pkg.status === 'Mining');
            console.log(miningPackages)

            setFarmerPackages(miningPackages);
            
          } else {
            console.error('Invalid data format. Expected an array.');
            toast.error('Error: Invalid data format.');
          }

          
        } else {
          console.error('Error fetching farmer unactivated packages, please try again later.');
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
  }, [userId, currentPage, accessToken]);




  const handleStartMining = async () => {
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
        toast.error(response.data.message)
        setErrorMessage(response.data.message);
        setMiningStatus('Not Started');
      }
    } catch (error) {
      console.error('Error starting mining:', error);
      toast.error('Error starting mining. Please try again.')
      setErrorMessage('Error starting mining. Please try again.');
    }
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-200">
      
        <div className="">
          <Toaster position='top-center' reverseOrder={false}></Toaster>
      </div>

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

      {/* <div className="mining-chart">
        <MiningProgressChart miningRate={miningRate} />
      </div> */}
    </div>
  );
};

export default MyFarm;
