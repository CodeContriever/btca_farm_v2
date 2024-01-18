import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectFranchisorSigninData } from '../../../store/franchisor/Signin';
import toast, { Toaster } from 'react-hot-toast';

const UnactivatedPackages = () => {
  const signinData = useSelector(selectFranchisorSigninData);
  const userId = signinData?.user?.userId || null;
  const accessToken = signinData?.accessToken || '';

  const [currentPage, setCurrentPage] = useState(1);
  const [franchisorPackages, setFranchisorPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  
   /* eslint-disable no-unused-vars */
    const [activationStatus, setActivationStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://api.afribook.world/package/getFranchisorPackages`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            page: currentPage,
            pageSize: 10,
          },
        });

        if (response.status === 200) {
          const responseData = response.data;
          console.log('franchisor Unactivated packages fetch successful:', responseData);

          if (responseData.data && Array.isArray(responseData.data)) {
            const unactivatedPackages = responseData.data.map(pkg => ({
              ...pkg,
              buttonDisabled: pkg.status === 'Active',
            }));
            setFranchisorPackages(unactivatedPackages);
          } else {
            console.error('Invalid data format. Expected an array.');
            toast.error('Error: Invalid data format.');
          }
        } else {
          console.error('Error fetching franchisor unactivated packages, please try again later.');
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


  const handleActivate = async (packageId) => {
    try {
      setLoading(true);

      const response = await axios.post(
        'https://api.afribook.world/franchisor/buyPackage',
        {
          packageId: packageId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Package activated successfully through franchisor');

          if (response.data.message === 'User already has a subscription.') {
            // Display a toast notification to inform the user
            toast.error('You have already subscribed to a package.');
          } else {
            setActivationStatus('success');
            // setFranchisorPackages((prevPackages) =>
            //   prevPackages.map((pkg) =>
            //     pkg.packageId === packageId ? { ...pkg, buttonDisabled: true, status: 'Activated' } : pkg
            //   )
            // );
        }
        
        // Find the index of the activated package in the array
        const activatedPackageIndex = franchisorPackages.findIndex(pkg => pkg.id === packageId);

        if (activatedPackageIndex !== -1) {
          // Create a copy of the packages array to avoid mutating state directly
          const updatedPackages = [...franchisorPackages];
          // Update the status of the activated package to "Active"
          updatedPackages[activatedPackageIndex].status = 'Active';
          updatedPackages[activatedPackageIndex].buttonDisabled = true; // Disable the button
          setFranchisorPackages(updatedPackages);
        }
      } else {
        console.error('Error activating package through franchisor, please try again later.');
        toast.error('Error activating package, please try again later.');
      }
    } catch (error) {
      console.error('Error activating package:', error);
      toast.error('Error, please check your connection');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>

      <div>
        <h1 className="text-gray-800 text-xl font-medium font-inter leading-6">Unactivated Packages</h1>

        <div className="bg-white rounded-md shadow-lg p-4 mt-4">
          {franchisorPackages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">Packages not available, please check back later.</p>
          ) : (
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
              {franchisorPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="mb-2 text-2xl font-semibold">{pkg.packageName}</h3>
                  {/* <p>Description: {pkg.description}</p> */}
                  <p>Price: {pkg.price}</p>
                  <p>Initial Reward: {pkg.initialReward}</p>
                  <p>Monthly Reward: {pkg.monthlyReward}</p>
                  <p>Yearly Reward: {pkg.yearlyReward}</p>
                  {/* <p>Status: {pkg.status}</p> */}
                  <p>Duration: {pkg.duration} days</p>
                  <hr />

                  <div className="relative">
                    <button
                      className={`bg-white p-2 rounded-md text-black ${pkg.status === 'Active' ? 'bg-green-500' : ''}`}
                      onClick={() => pkg.status !== 'Active' && handleActivate(pkg.id)}
                      disabled={loading || pkg.status === 'Active' || pkg.status === 'Pending' || pkg.buttonDisabled}
                    >
                      {pkg.status === 'Active' ? 'Activate' : pkg.status === 'Pending' ? 'Pending' : 'Activate'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
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
                  <span className="font-semibold text-gray-900 dark:text-white">{franchisorPackages.length}</span>
                </span>
              </div> */}

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={franchisorPackages.length < 10}
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

export default UnactivatedPackages;
