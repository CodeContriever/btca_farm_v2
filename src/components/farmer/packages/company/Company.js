import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

import { selectFarmerSigninData } from "../../../../store/farmer/Signin";

const Company = () => {
  const signinData = useSelector(selectFarmerSigninData);

  const [currentPage, setCurrentPage] = useState(1);
  const [farmerPackages, setFarmerPackages] = useState([]);
  const packagesPerPage = 10;
  const startIndex = (currentPage - 1) * packagesPerPage;
  const endIndex = startIndex + packagesPerPage;
  const visiblePackages = farmerPackages.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = signinData?.accessToken || '';
      try {
        const response = await axios.get(`https://api.afribook.world/package/getPackages/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            page: currentPage,
            pageSize: packagesPerPage,
          },
        });

        if (response.status === 200) {
          const responseData = response.data;
          console.log('Farmer packages fetch successful:', responseData);

          if (responseData.success && Array.isArray(responseData.data)) {
            setFarmerPackages(responseData.data);
          } else {
            console.error('Invalid data format. Expected an array.');
          }
        } else {
          console.error('Error fetching packages, please try again later.');
          toast.error('Packages are not available, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching user packages:', error);
        toast.error('Error, please check your connection');
      }
    };

    fetchData();
  }, [signinData, currentPage]);

  const handleActivatePackage = async (packageId) => {
    const accessToken = signinData?.accessToken || '';
    try {
      const response = await axios.post(
        'https://api.afribook.world/mining/startMiningCoin',
        { userId: signinData.userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.success) {
        console.log('Package activated:', response.data);
        // Update the farmerPackages array with the activated package
        setFarmerPackages(prevPackages => {
          return prevPackages.map(pkg => (pkg.packageId === packageId ? { ...pkg, status: 'Activated' } : pkg));
        });
      } else {
        console.error('Failed to activate package:', response.data.error);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error activating package:', error);
      toast.error('Error activating package. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="">
        <Toaster position='top-center' reverseOrder={false}></Toaster>
      </div>
      <div>
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">Packages</h1>
        <div className="bg-white rounded-md shadow-lg p-4 mt-4">
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
            {Array.isArray(visiblePackages) && visiblePackages.length > 0 ? (
              visiblePackages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="mb-2 text-2xl font-semibold">{pkg.packageName}</h3>
                  <p>Description: {pkg.description}</p>
                  <p>Price: {pkg.price}</p>
                  <p>Initial Reward: {pkg.initialReward}</p>
                  <p>Monthly Reward: {pkg.monthlyReward}</p>
                  <p>Yearly Reward: {pkg.yearlyReward}</p>
                  <p>Status: {pkg.status}</p>
                  <p>Duration: {pkg.duration} days</p>
                  <hr />
                  {pkg.status === 'Activated' ? (
                    <button className="bg-gray-500 p-2 rounded-md text-white" disabled>Activated</button>
                  ) : (
                    <button className="bg-white p-2 rounded-md text-black" onClick={() => handleActivatePackage(pkg.packageId)}>Activate</button>
                  )}
                </div>
              ))
            ) : (
              <div>
                {farmerPackages && farmerPackages.length === 0
                  ? 'No packages available'
                  : 'Loading...'}
              </div>
            )}
          </div>
          {/* Pagination */}
          <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Prev
              </button>
              <div>
                {farmerPackages.length > 0 && (
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
                    Showing
                    <span className="font-semibold text-gray-900 dark:text-white mx-2">
                      {1 + startIndex}
                    </span>
                    to
                    <span className="font-semibold text-gray-900 dark:text-white mx-2">
                      {Math.min(farmerPackages.length, endIndex)}
                    </span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white mx-2">
                      {farmerPackages.length}
                    </span>
                  </span>
                )}
              </div>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={farmerPackages.length <= endIndex}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Company;
