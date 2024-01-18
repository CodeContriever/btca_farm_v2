import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../../../store/farmer/Signin';

const AvailableBalance = () => {
  const signinData = useSelector(selectFarmerSigninData);
  const userId = signinData?.user?.userId || null;
  const accessToken = signinData?.accessToken || '';

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

          if (responseData.data && Array.isArray(responseData.data)) {
            const miningPackages = responseData.data || [];
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

  return (
    <div>
      {/* Available balance */}
      <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">

           <div className="">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        </div>
        
        <div className="flex flex-col gap-8">
          <p>Mined Balance</p>

          {farmerPackages.map((pkg, index) => (
            <div key={index} className="flex flex-row justify-center gap-2 mt-8">
              <div className='flex flex-row gap-2'>
                <img className="h-6 w-6" alt="BTCA logo" src='/logo.png' />
                <p className="text-gray-900 font-medium">{pkg.minned}</p>
              </div>
              <p>BTCA</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableBalance;
