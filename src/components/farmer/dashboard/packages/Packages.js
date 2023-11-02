import React, { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectRoleData } from '../../../../store/role';
import axios from 'axios';



const Packages = () => {
  const roleData = useSelector(selectRoleData);
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
    <div className="bg-[#A020F0] rounded-lg overflow-hidden py-4 px-2 text-center text-white space-y-8">
      <hr />

      {/* Package item */}
      <div className="space-y-4">
        {packages.map((packageItem) => (
          <div key={packageItem.id}>
            {/* Render package details */}
            <h3 className="font-medium text-base">{packageItem.packageName}</h3>
            {/* Other package details here */}

            {/* Radio button to select the package */}
            <input
              type="radio"
              name="selectedPackage"
              value={packageItem.id}
              onChange={() => setSelectedPackage(packageItem)}
            />
          </div>
        ))}
      </div>

      <hr />

      <div className="flex justify-center">
        <button
          className="flex flex-col items-center justify-center gap-2 px-20 py-1 font-medium text-base outline otline-1 outline-white"
          onClick={activatePackage}
        >
          <AiOutlineStar />
          Activate
        </button>
      </div>
    </div>
  );
};

export default Packages;
