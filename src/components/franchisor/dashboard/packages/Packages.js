import React, { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectFranchisorRoleData } from '../../../../store/franchisor/Role';
import axios from 'axios';



const Packages = () => {
  const roleData = useSelector(selectFranchisorRoleData);
  const { userId } = roleData?.data || {};

  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null); // Track the selected package

  // Function to handle package activation
  const activatePackage = async () => {
    if (!selectedPackage) {
      alert("Please select a package before activating.");
      return;
    }

    try {
      // Create a configuration object with the Authorization header
      const config = {
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      };

      // Make a POST request to buy the selected package
      const response = await axios.post(
        'https://btca.afribook.world/franchisor/buyPackage',
        { packageId: selectedPackage.id },
        config
      );

      console.log('Package purchase successful:', response.data);
      alert('Package purchased successfully.'); // Provide feedback to the user

      // Optionally, you can update the UI or state to reflect the successful purchase.
    } catch (error) {
      console.error('Error purchasing package:', error);
      alert('Error purchasing the package. Please try again.'); // Provide error feedback to the user
    }
  };

  useEffect(() => {
    // Check if the user's role is a franchisor
    if (roleData === 'franchisor') {
      // Create a configuration object with the Authorization header
      const config = {
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      };

      // Fetch the franchisor packages from the server with the authorization header
      axios
        .get('https://btca.afribook.world/package/getFranchisorPackages', config)
        .then((response) => {
          const data = response.data;
          console.log('Franchisor packages data:', data);

          // Update the state with the fetched packages
          setPackages(data);
        })
        .catch((error) => {
          console.error('Error fetching franchisor packages:', error);
        });
    }
  }, [roleData, userId]);

  return (
   <div className="bg-white rounded-md shadow-lg p-4  mt-4">

      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
        
           {/* <!-- Packages --> */}
              <div class="flex flex-col gap-8 p-6 mx-auto max-w-lg text-center  bg-[#00247E] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  {/* package name */}
                  <h3 class="mb-4 text-2xl font-semibold">Starter</h3>

                  <hr />

                  {/* Freezing MAX Load */}
                  <div className='flex flex-col gpa-2'>
                      <p>Up to 0.125BTCA</p>
                      <p>Freezing MAX Load</p>
                  </div>

                  <hr />

                   {/* Mining Reward */}
                  <div className='flex flex-col gpa-2'>
                      <p>0.5BTCA</p>
                      <p>Mining Reward per month</p>
                  </div>

                  <hr />


                   {/* Expected Mining */}
                  <div className='flex flex-col gpa-2'>
                      <p>4.8BTCA</p>
                      <p>Expected Mining</p>
                  </div>

                  <hr />

                   {/* Validity */}
                  <div className='flex flex-col gpa-2'>
                      <p>1 year</p>
                      <p>Validity</p>
                  </div>

                  <hr />

                    {/* Unfreezing Term */}
                  <div className='flex flex-col gpa-2'>
                      <p>$10</p>
                      <p>Unfreezing Term</p>
                  </div>

                  <hr />

                  <button>Activate</button>
                  
            
                      </div>
                      

                        {/* <!-- Packages 2--> */}
              <div class="flex flex-col gap-8 p-6 mx-auto max-w-lg text-center  bg-[#00247E] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  {/* package name */}
                  <h3 class="mb-4 text-2xl font-semibold">Starter</h3>

                  <hr />

                  {/* Freezing MAX Load */}
                  <div className='flex flex-col gpa-2'>
                      <p>Up to 0.125BTCA</p>
                      <p>Freezing MAX Load</p>
                  </div>

                  <hr />

                   {/* Mining Reward */}
                  <div className='flex flex-col gpa-2'>
                      <p>0.5BTCA</p>
                      <p>Mining Reward per month</p>
                  </div>

                  <hr />


                   {/* Expected Mining */}
                  <div className='flex flex-col gpa-2'>
                      <p>4.8BTCA</p>
                      <p>Expected Mining</p>
                  </div>

                  <hr />

                   {/* Validity */}
                  <div className='flex flex-col gpa-2'>
                      <p>1 year</p>
                      <p>Validity</p>
                  </div>

                  <hr />

                    {/* Unfreezing Term */}
                  <div className='flex flex-col gpa-2'>
                      <p>$10</p>
                      <p>Unfreezing Term</p>
                  </div>

                  <hr />

                  <button>Activate</button>
                  
            
                      </div>
                      

                        {/* <!-- Packages 3--> */}
              <div class="flex flex-col gap-8 p-6 mx-auto max-w-lg text-center  bg-[#00247E] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  {/* package name */}
                  <h3 class="mb-4 text-2xl font-semibold">Starter</h3>

                  <hr />

                  {/* Freezing MAX Load */}
                  <div className='flex flex-col gpa-2'>
                      <p>Up to 0.125BTCA</p>
                      <p>Freezing MAX Load</p>
                  </div>

                  <hr />

                   {/* Mining Reward */}
                  <div className='flex flex-col gpa-2'>
                      <p>0.5BTCA</p>
                      <p>Mining Reward per month</p>
                  </div>

                  <hr />


                   {/* Expected Mining */}
                  <div className='flex flex-col gpa-2'>
                      <p>4.8BTCA</p>
                      <p>Expected Mining</p>
                  </div>

                  <hr />

                   {/* Validity */}
                  <div className='flex flex-col gpa-2'>
                      <p>1 year</p>
                      <p>Validity</p>
                  </div>

                  <hr />

                    {/* Unfreezing Term */}
                  <div className='flex flex-col gpa-2'>
                      <p>$10</p>
                      <p>Unfreezing Term</p>
                  </div>

                  <hr />

                  <button>Activate</button>
                  
            
              </div>
          </div>


        </div>
  );
};

export default Packages;
