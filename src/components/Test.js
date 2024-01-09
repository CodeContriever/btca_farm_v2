import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectResellerSigninData } from '../../../store/franchisor/Signin';
import toast, { Toaster } from 'react-hot-toast';

const UnactivatedPackages = () => {
  const signinData = useSelector(selectResellerSigninData);
  const { userId } = signinData?.data || {};
  const accessToken = signinData?.accessToken || '';

  const [currentPage, setCurrentPage] = useState(1);
  const [resellerPackages, setResellerPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activationStatus, setActivationStatus] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://api.afribook.world/package/getResellerPackages/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            page: currentPage,
            pageSize: 10,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          console.log('Reseller Unactivated packages fetch successful:', data);
          setResellerPackages(response.data);
        } else {
          console.error('Error fetching packages, please try again later.');
          toast.error('Error fetching packages, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching user packages:', error);
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

      // Set the selected package
      const selectedPackage = resellerPackages.find((pkg) => pkg.packageId === packageId);
      setSelectedPackage(selectedPackage);

      // Now you can show a modal or a dropdown to let the user choose between buying directly or subscribing from a franchisor
    } catch (error) {
      console.error('Error activating package:', error);
      setActivationStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleBuyDirectly = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        'https://api.afribook.world/reseller/buyPackage',
        {
          userId,
          packageId: selectedPackage.packageId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Package activated successfully');
        setActivationStatus('success');
      } else {
        console.error('Error activating package, please try again later.');
        setActivationStatus('error');
      }
    } catch (error) {
      console.error('Error activating package:', error);
      setActivationStatus('error');
    } finally {
      setLoading(false);
      setSelectedPackage(null);
    }
  };

  const handleSubscribeFromFranchisor = async (franchisorId) => {
    try {
      setLoading(true);

      const response = await axios.post(
        'https://api.afribook.world/subscription/resellerSubscribeToPackageFromFranchisor',
        {
          fpi: franchisorId,
          packageId: selectedPackage.packageId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Package activated successfully through franchisor');
        setActivationStatus('success');
      } else {
        console.error('Error activating package through franchisor, please try again later.');
        setActivationStatus('error');
      }
    } catch (error) {
      console.error('Error activating package through franchisor:', error);
      setActivationStatus('error');
    } finally {
      setLoading(false);
      setSelectedPackage(null);
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
          {resellerPackages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">Packages not available, please check back later.</p>
          ) : (
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
              {resellerPackages.map((pkg, index) => (
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

                  <button
                    className={`bg-white p-2 rounded-md text-black ${
                      activationStatus === 'success' ? 'bg-green-500' : ''
                    }`}
                    onClick={() => handleActivate(pkg.packageId)}
                    disabled={loading}
                  >
                    {loading ? 'Pending' : activationStatus === 'success' ? 'Activated' : 'Activate'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {selectedPackage && (
            <div>
              <p>Please choose an activation method for {selectedPackage.packageName}:</p>
              <button onClick={handleBuyDirectly} disabled={loading}>
                Buy Directly
              </button>
              <button
                onClick={() => {
                  const franchisorId = prompt('Enter Franchisor ID:');
                  if (franchisorId) {
                    handleSubscribeFromFranchisor(franchisorId);
                  }
                }}
                disabled={loading}
              >
                Subscribe from Franchisor
              </button>
            </div>
          )}

          {/* Pagination */}
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Prev
              </button>
              <div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white mx-2">{1 + (currentPage - 1) * 10}</span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">{resellerPackages.length}</span>
                </span>
              </div>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={resellerPackages.length < 10}
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




  const resellerData = useSelector(selectResellerProfileData);
  const {
    firstName,
    phoneNumber,
    dob,
    gender,
    kin_full_name,
    kin_phone,
    kin_address,
    g_full_name,
    g_phone,
    g_address,
    g_user_id,
    address_1,
    address_2,
    landmark,
    city,
    state,
    country,
    means_of_id,
    id_number,
  } = resellerData || {};