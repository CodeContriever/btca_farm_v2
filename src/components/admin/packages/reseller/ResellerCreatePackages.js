import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAdminSigninData } from '../../../../store/admin/Signin';

import { Alert } from 'flowbite-react';

const ResellerCreatePackages = ({ resellerCreatedPackages, setResellerCreatedPackages }) => {
  const signinData = useSelector(selectAdminSigninData);
  
  const [showInputFields, setShowInputFields] = useState(false);
  const [packageName, setPackageName] = useState('');
    const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [reward, setReward] = useState('');
    const [duration, setDuration] = useState('');
  const [alert, setAlert] = useState(null);

  const handleCreatePackage = async () => {
    try {
       const accessToken = signinData?.accessToken || '';
      // Make a POST request to submit package details to the backend
      const response = await axios.post('https://api.afribook.world/package/createResellerPackage', {
       price,
        packageName,
        reward,
        description,
        duration,
      }, {
        headers: {
 Authorization: `Bearer ${accessToken}`,
        },
      });

      // Check if the request was successful
      if (response.status === 200) {
        const newPackage = response.data; // Assuming the backend returns the created package
        
        console.log(newPackage)

        setResellerCreatedPackages([...resellerCreatedPackages, newPackage]);
        // Reset input fields after creating a package
        setPackageName('');
        setPrice('');
        setReward('');
        setDescription('');
        setDuration('');

        // Hide input fields after creating a package
        setShowInputFields(false);

        // Show success message using Alert component
        setAlert(
          <Alert color="success" onDismiss={() => setAlert(null)}>
            Package created successfully!
          </Alert>
        );



      }
    } catch (error) {
      console.error('Error creating package:', error);
      // Handle error (e.g., show an error message to the user)

      // Show error message using Alert component
      setAlert(
        <Alert color="failure" onDismiss={() => setAlert(null)}>
          Error creating package. Please try again.
        </Alert>
      );
    }
  };

  return (
    <div>
      {showInputFields ? (
        <div>
          {alert}
          
        <div className="flex flex-col gap-8 p-4 mx-auto max-w-sm text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <button onClick={() => setShowInputFields(false)} className="self-end text-sm text-gray-300 hover:text-gray-100">
            Cancel
          </button>

          <div className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border-none shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <div className="flex flex-col gap-1 items-center">
              <label className="text-2xl font-semibold text-white">Package Name</label>
              <input
                className="bg-transparent border-none outline-none text-white placeholder-gray-500 placeholder-opacity-50 text-center focus:outline-none focus:border-none focus:ring-0"
                type="text"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 items-center">
              <label className="text-2xl font-semibold text-white">Description</label>
              <input
                className="bg-transparent border-none outline-none text-white placeholder-gray-500 placeholder-opacity-50 text-center focus:outline-none focus:border-none focus:ring-0"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 items-center">
              <label className="text-2xl font-semibold text-white">Price</label>
              <input
                className="bg-transparent border-none outline-none text-white placeholder-gray-500 placeholder-opacity-50 text-center focus:outline-none focus:border-none focus:ring-0"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              </div>
              
                 <div className="flex flex-col gap-1 items-center">
              <label className="text-2xl font-semibold text-white">Reward</label>
              <input
                className="bg-transparent border-none outline-none text-white placeholder-gray-500 placeholder-opacity-50 text-center focus:outline-none focus:border-none focus:ring-0"
                type="text"
                value={reward}
                onChange={(e) => setReward(e.target.value)}
              />
              </div>
              

            <div className="flex flex-col gap-1 items-center">
              <label className="text-2xl font-semibold text-white">Duration</label>
              <input
                className="bg-transparent border-none outline-none text-white placeholder-gray-500 placeholder-opacity-50 text-center focus:outline-none focus:border-none focus:ring-0"
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <button
              onClick={handleCreatePackage}
              className="bg-white text-black p-2 rounded-md focus:outline-none"
            >
              Create
            </button>
          </div>
          </div>
          
          </div>
      ) : (
        <button
          onClick={() => setShowInputFields(true)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Package
        </button>
      )}
    </div>
  );
};

export default ResellerCreatePackages;
