import React, { useState } from 'react';
import axios from 'axios';

const CreatePackages = ({ createdPackages, setCreatedPackages }) => {
  const [showInputFields, setShowInputFields] = useState(false);
  const [packageName, setPackageName] = useState('');

  const handleCreatePackage = async () => {
    try {
      // Make a POST request to submit package details to the backend
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', {
        packageName,
        // ... (other package details)
      });

      // Check if the request was successful
      if (response.status === 200) {
        const newPackage = response.data; // Assuming the backend returns the created package
        setCreatedPackages([...createdPackages, newPackage]);
        // Reset input fields after creating a package
        setPackageName('');
        // ... (reset other state variables)
        // Hide input fields after creating a package
        setShowInputFields(false);
      }
    } catch (error) {
      console.error('Error creating package:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      {showInputFields ? (
        // Input fields for package details
        <div className="flex flex-col gap-8 p-4 mx-auto max-w-sm text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          {/* Cancel button */}
          <button onClick={() => setShowInputFields(false)} className="self-end text-sm text-gray-300 hover:text-gray-100">
            Cancel
          </button>

          {/* Package details */}
          <div className="flex flex-col gap-4 items-center justify-center">
            {/* Package name input */}
            <div className="flex flex-col gap-1 items-center">
              <label className="text-sm text-gray-300">Package Name</label>
              <input
                className="bg-transparent border-none outline-none text-white placeholder-gray-500 placeholder-opacity-50 text-center"
                type="text"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                placeholder="Enter package name"
              />
            </div>

            {/* ... Add similar input fields for other package details */}

            {/* Create button */}
            <button
              onClick={handleCreatePackage}
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Create
            </button>
          </div>
        </div>
      ) : (
        // Create package button
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

export default CreatePackages;
