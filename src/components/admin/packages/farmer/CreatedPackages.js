import React, { useState } from 'react';

const CreatedPackages = () => {
  const [createdPackages] = useState([]); // Removed setCreatedPackages
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Created Packages</h3>

      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
        {/* Display created packages */}
        {createdPackages.map((pkg, index) => (
          <div key={index} className="flex flex-col gap-8 p-2 lg:p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-2 text-2xl font-semibold">{pkg.packageName}</h3>
            {/* ... Other details for the created package */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatedPackages;
