import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const FranchisorPackages = ({ viewPackages, setViewPackages, selectedFranchisorId = null }) => {
  const [franchisorPackages, setFranchisorPackages] = useState(null);
  const [activationStatus, setActivationStatus] = useState({});

  useEffect(() => {
    const fetchFranchisorPackages = async () => {
      try {
        if (!selectedFranchisorId) {
          console.error('Selected franchisor ID is missing.');
          return;
        }

        const response = await axios.get(`https://api.afribook.world/franchisor/getPackages/${selectedFranchisorId}`);

        if (response.status === 200) {
          const data = response.data;
          console.log('Franchisor packages fetch successful:', data);

          // Initialize activation status for each package
          const initialActivationStatus = {};
          data.forEach(packageItem => {
            initialActivationStatus[packageItem.id] = 'Activate';
          });

          setActivationStatus(initialActivationStatus);
          setFranchisorPackages(data);
        } else {
          console.error('Error fetching franchisor packages, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching franchisor packages:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };

    // Fetch the packages data when the component mounts or when selectedFranchisorId changes
    if (viewPackages && selectedFranchisorId) {
      fetchFranchisorPackages();
    }
  }, [viewPackages, selectedFranchisorId]);

  const handleActivate = async (packageId) => {
    try {
      // Assuming you have an endpoint for activating packages
      const response = await axios.post(`https://api.afribook.world/franchisor/activatePackage`, {
        franchisorId: selectedFranchisorId,
        packageId: packageId,
      });

      if (response.status === 200) {
        // Update the activation status for the specific package
        setActivationStatus(prevStatus => ({
          ...prevStatus,
          [packageId]: 'Pending',
        }));
      } else {
        console.error('Error activating package, please try again later.');
        toast.error('Error activating package, please try again later.');
      }
    } catch (error) {
      console.error('Error activating package:', error);
      // Handle the error, e.g., display an error message to the user
        toast.error('Error activating package, please try again later.');
    }
  };

  return (
    <div>
          <div>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>

      <Modal dismissible show={viewPackages} onClose={() => setViewPackages(false)}>
        <Modal.Header>Packages</Modal.Header>
        <Modal.Body>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 lg:space-x-2">
            {/* Packages */}
            {franchisorPackages &&
              franchisorPackages.map((packageItem, index) => (
                <div key={index} className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                  {/* Package name */}
                  <h3 className="mb-2 text-2xl font-semibold">{packageItem.name}</h3>

                  <hr />

                  {/* Package details */}
                  {packageItem.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex flex-col gap-2">
                      <p>{detail.value}</p>
                      <p>{detail.label}</p>
                    </div>
                  ))}

                  <hr />

                  <button
                    className="bg-white p-2 rounded-md text-black"
                    onClick={() => handleActivate(packageItem.id)}
                    disabled={activationStatus[packageItem.id] !== 'Activate'}
                  >
                    {activationStatus[packageItem.id]}
                  </button>
                </div>
              ))}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button color="gray" onClick={() => setViewPackages(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FranchisorPackages;
