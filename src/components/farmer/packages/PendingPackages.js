import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector } from "react-redux";
import { selectFarmerSigninData } from "../../../store/farmer/Signin";

import toast, { Toaster } from 'react-hot-toast';

const PendingPackages = () => {
  const signinData = useSelector(selectFarmerSigninData);
  const userId = signinData?.user?.userId || null;
  const accessToken = signinData?.accessToken || '';

   /* eslint-disable no-unused-vars */
  const [loading, setLoading] = useState(false);
  const [farmerPackages, setFarmerPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://api.afribook.world/subscription/getUserPackageByStatus`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            status: 'Pending',
            page: currentPage,
            pageSize: 10,
          },
        });

        if (response.status === 200) {
          const responseData = response.data;
          console.log('farmer activated packages fetch successful:', responseData);

          if (responseData.data && Array.isArray(responseData.data)) {
            const activatedPackages = responseData.data || [];
            
            // Filter packages with status "Pending"
            const pendingPackages = activatedPackages.filter(pkg => pkg.status === 'Pending');
            console.log (pendingPackages)

            setFarmerPackages(pendingPackages);
          } else {
            console.error('Invalid data format. Expected an array.');
            toast.error('Error: Invalid data format.');
          }
        } else {
          console.error('Error fetching farmer pending packages, please try again later.');
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

  return (
    <div className="container mx-auto px-6">
      <div className="">
        <Toaster position='top-center' reverseOrder={false}></Toaster>
      </div>

      <div>
        <h1 className="text-gray-800 text-xl font-medium font-inter leading-6">Pending Packages</h1>

        <div className="bg-white rounded-md shadow-lg p-4 mt-4">
          {farmerPackages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">You do not have any pending packages.</p>
          ) : (
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
              {farmerPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="mb-2 text-xl font-semibold">{pkg.packageName}</h3>
                  {/* <p>Description: {pkg.description}</p> */}
                  <p>Price: {pkg.price}</p>
                  <p>Initial Reward: {pkg.initialReward}</p>
                  <p>Monthly Reward: {pkg.monthlyReward}</p>
                  <p>Yearly Reward: {pkg.yearlyReward}</p>
                  <p>Duration: {pkg.duration} days</p>
                    {/* <p>Status: {pkg.status}</p> */}

                  <button
                    className="bg-white p-2 rounded-md text-black"
                    disabled
                  >
                    {pkg.status}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Prev
              </button>

              {/* <div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white mx-2">{1 + (currentPage - 1) * 10}</span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">{farmerPackages.length}</span>
                </span>
              </div> */}

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={farmerPackages.length < 10}
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

export default PendingPackages;
