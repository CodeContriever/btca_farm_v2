import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import axios from 'axios';

const ResellersProfile = ({ viewProfile, setViewProfile, selectedResellerId }) => {
  const [resellerData, setResellerData] = useState(null);

  useEffect(() => {
    const fetchResellerProfile = async () => {
      try {
         if (!selectedResellerId) {
          console.error('Selected reseller ID is missing.');
          return;
        }
        
        // Replace the endpoint with the actual API endpoint to fetch franchisor profile data
        const response = await axios.get(`https://api.afribook.world/reseller/getProfile/${selectedResellerId}`);

        if (response.status === 200) {
          const data = response.data;
          console.log('Reseller profile fetch successful:', data);

          setResellerData(data);
        } else {
          console.error('Error fetching reseller profile, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching reseller profile:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };

    // Fetch the profile data when the component mounts or when selectedFranchisorId changes
    if (viewProfile && selectedResellerId) {
      fetchResellerProfile();
    }
  }, [viewProfile, selectedResellerId]);

  return (
    <div>
      <Modal dismissible show={viewProfile} onClose={() => setViewProfile(false)}>
        <Modal.Header>Profile</Modal.Header>
        <Modal.Body>
          {resellerData ? (
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Full Name: <span>{resellerData.fullName}</span>
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Role: <span>{resellerData.role}</span>
              </p>
              {/* Add other profile details based on your API response */}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setViewProfile(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResellersProfile;
