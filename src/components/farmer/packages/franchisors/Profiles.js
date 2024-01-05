import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import axios from 'axios';

const FranchisorsProfile = ({ viewProfile, setViewProfile, selectedFranchisorId }) => {
  const [franchisorData, setFranchisorData] = useState(null);

  useEffect(() => {
    const fetchFranchisorProfile = async () => {
      try {
         if (!selectedFranchisorId) {
          console.error('Selected franchisor ID is missing.');
          return;
        }
        
        // Replace the endpoint with the actual API endpoint to fetch franchisor profile data
        const response = await axios.get(`https://api.afribook.world/franchisor/getProfile/${selectedFranchisorId}`);

        if (response.status === 200) {
          const data = response.data;
          console.log('Franchisor profile fetch successful:', data);

          setFranchisorData(data);
        } else {
          console.error('Error fetching franchisor profile, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching franchisor profile:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };

    // Fetch the profile data when the component mounts or when selectedFranchisorId changes
    if (viewProfile && selectedFranchisorId) {
      fetchFranchisorProfile();
    }
  }, [viewProfile, selectedFranchisorId]);

  return (
    <div>
      <Modal dismissible show={viewProfile} onClose={() => setViewProfile(false)}>
        <Modal.Header>Franchisor Profile</Modal.Header>
        <Modal.Body>
          {franchisorData ? (
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Full Name: <span>{franchisorData.fullName}</span>
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Role: <span>{franchisorData.role}</span>
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

export default FranchisorsProfile;
