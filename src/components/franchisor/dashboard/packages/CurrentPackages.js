import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRoleData } from '../../../../store/franchisor/Role';
import axios from 'axios';



const CurrentPackages = () => {
  const roleData = useSelector(selectRoleData);
  const { userId } = roleData?.data || {};

  const [packages, setPackages] = useState([]);



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
        .get('https://btca.afribook.world/franchisor/getFranchisorCurrentPackages', config)
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

          </div>
        ))}
      </div>

      <hr />

    </div>
  );
};

export default CurrentPackages;
