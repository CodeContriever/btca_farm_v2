import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../../../store/farmer/Signin';
import toast, { Toaster } from 'react-hot-toast';

const Company = () => {
  const signinData = useSelector(selectFarmerSigninData);
  const userId = signinData?.user?.userId || null;
  console.log(userId)
  const accessToken = signinData?.accessToken || '';

  const [currentPage, setCurrentPage] = useState(1);
  const [farmerPackages, setFarmerPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activationStatus, setActivationStatus] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://api.afribook.world/package/getPackages`, {
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
          console.log('farmer Unactivated packages fetch successful:', responseData);

          if (responseData.data && Array.isArray(responseData.data)) {
            // Check if transactions property exists in responseData.data
            const UnactivatedPackages = responseData.data || [];

            setFarmerPackages(UnactivatedPackages);
            
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
    

  const handleActivate = async (method) => {
    try {
      setLoading(true);

      if (method === 'Company') {
        // Activate directly
        let boughtFrom = prompt('Enter boughtFrom value:');
        boughtFrom = boughtFrom || 'Company';

        const response = await axios.post(
          'https://api.afribook.world/subscription/subscribeToAPackage',
          {
            /* farmerUserId: userId, */
            packageId: selectedPackageId,
            boughtFrom,
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
          

      } else if (method === 'Franchisor') {
        // Activate from Franchisor
        const franchisorId = prompt('Enter Franchisor ID:');
        if (franchisorId) {
          const response = await axios.post(
            'https://api.afribook.world/subscription/subscribeToAPackageFromFranchisor',
            {
                /* farmerUserId: userId, */
              packageId: selectedPackageId,
              boughtFrom: franchisorId,
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
        }
      }
      
      else if (method === 'Reseller') {
        // Activate from Franchisor
        const resellerId = prompt('Enter Reseller ID:');
        if (resellerId) {
          const response = await axios.post(
            'https://api.afribook.world/subscription/subscribeToAPackageFromReseller',
            {
                /* farmerUserId: userId, */
              packageId: selectedPackageId,
              boughtFrom: resellerId,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (response.status === 200) {
            console.log('Package activated successfully through reseller');
            setActivationStatus('success');
          } else {
            console.error('Error activating package through reseller, please try again later.');
            setActivationStatus('error');
          }
        }
      }
    } catch (error) {
      console.error('Error activating package:', error);
      setActivationStatus('error');
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
          {farmerPackages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">Packages not available, please check back later.</p>
          ) : (
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
              {farmerPackages.map((pkg, index) => (
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

                  <div className="relative">
                    <button
                      className={`bg-white p-2 rounded-md text-black ${activationStatus === 'success' ? 'bg-green-500' : ''}`}
                      onClick={() => setSelectedPackageId(pkg.packageId)}
                      disabled={loading}
                    >
                      {loading ? 'Pending' : activationStatus === 'success' ? 'Activated' : 'Activate'}
                    </button>

                    {selectedPackageId === pkg.packageId && (
                      <div className="absolute top-8 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md bg-[#A020F0] ">
                        <button
                          className="block w-full text-left p-2 hover:bg-gray-200 focus:outline-none text-white"
                          onClick={() => {
                            handleActivate('Company');
                            setSelectedPackageId(null);
                          }}
                        >
                          Buy from Company
                        </button>
                        <button
                          className="block w-full text-left p-2 hover:bg-gray-200 focus:outline-none text-white"
                          onClick={() => {
                            handleActivate('Franchisor');
                            setSelectedPackageId(null);
                          }}
                        >
                          Buy from Franchisor
                                  </button>
                                  
                                    <button
                          className="block w-full text-left p-2 hover:bg-gray-200 focus:outline-none text-white"
                          onClick={() => {
                            handleActivate('Reseller');
                            setSelectedPackageId(null);
                          }}
                        >
                          Buy from Reseller
                        </button>
                      </div>
                    )}
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
                  <span className="font-semibold text-gray-900 dark:text-white">{farmerPackages.length}</span>
                </span>
              </div>
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

export default Company;
