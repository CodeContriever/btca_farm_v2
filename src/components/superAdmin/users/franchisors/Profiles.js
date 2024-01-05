import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import axios from 'axios';

const UserProfile = ({ viewProfile, setViewProfile, userId }) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyUser = async () => {
    try {
      const response = await axios.put('https://api.afribook.world/admin/verifyUserAccount', {
        userId: userId,
      });

      if (response.status === 200) {
        console.log('User verification successful');
        setIsVerified(true); // Update local state to indicate that the user is verified
        // You can add any additional logic here based on your requirements
      } else {
        console.error('Error verifying user');
      }
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  return (
    <div>
      <Modal dismissible show={viewProfile} onClose={() => setViewProfile(false)}>
        <Modal.Header>
          Profile
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Full Name: <span>Johan Rodrigues</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Role: <span>Franchisor</span>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className='flex flex-row justify-between'>
          {/* Verify user button */}
          <Button
            color='gray'
            onClick={handleVerifyUser}
            disabled={isVerified} // Disable the button if already verified
          >
            {isVerified ? 'Verified' : 'Verify User'}
          </Button>

          <Button color='gray' onClick={() => setViewProfile(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;
