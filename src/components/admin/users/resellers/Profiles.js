// UserProfile.js
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { selectAdminSigninData } from '../../../../store/admin/Signin';

const ResellerProfile = ({ viewProfile, setViewProfile, userId, resellerDetails }) => {
  const signinData = useSelector(selectAdminSigninData);

  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyUser = async () => {
    const accessToken = signinData?.accessToken || '';
    try {
      const response = await axios.put(
        'https://api.afribook.world/admin/verifyUser',
        {
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('User verification successful');
        setIsVerified(true);
        // Additional logic based on your requirements
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
            {/* Display user details from props */}
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Full Name: <span>{resellerDetails.fullName}</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Role: <span>{resellerDetails.role?.roleType || 'N/A'}</span>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className='flex flex-row justify-between'>
          {/* Verify user button */}
          <Button
            color='gray'
            onClick={handleVerifyUser}
            disabled={isVerified}
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

export default ResellerProfile;
