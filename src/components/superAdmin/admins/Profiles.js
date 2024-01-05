import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'flowbite-react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { selectSuperAdminSigninData } from '../../../store/superAdmin/Signin';

const AdminProfile = ({ viewProfile, setViewProfile, userId, adminDetails }) => {
  console.log(adminDetails)
  const signinData = useSelector(selectSuperAdminSigninData);
  const accessToken = signinData?.accessToken || '';

  const [isActivated, setIsActivated] = useState(false);
  const [isBlocked, setIsBlocked] = useState(adminDetails.is_blocked === 1);

  useEffect(() => {
    // Set initial blocked state based on adminDetails
    setIsBlocked(adminDetails.is_blocked === 1);
  }, [adminDetails.is_blocked]);

  const handleActivateAdmin = async () => {
    try {
      const response = await axios.put(
        'https://api.afribook.world/admin/activateAdmin',
        {
          username: adminDetails.username,
          id: adminDetails.id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        const responseData = response.data;

        console.log(responseData);

        console.log('Admin activated successfully');

        setIsActivated(true);
        // Reset isBlocked state if admin is activated
        setIsBlocked(false);
        // Additional logic based on your requirements
      } else {
        console.error('Error activating admin');
      }
    } catch (error) {
      console.error('Error activating admin:', error);
    }
  };

  const handleBlockAdmin = async () => {
    try {
      const response = await axios.put(
        'https://api.afribook.world/admin/blockAdmin',
        {
          username: adminDetails.username,
          id: adminDetails.id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        const responseData = response.data;

        console.log(responseData);

        console.log('Admin blocked successfully');

        setIsBlocked(true);
        // Reset isActivated state if admin is blocked
        setIsActivated(false);
        // Additional logic based on your requirements
      } else {
        console.error('Error blocking admin');
      }
    } catch (error) {
      console.error('Error blocking admin:', error);
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
            {/* Display admin details from props */}
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Full Name: <span>{adminDetails.full_name}</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Username: <span>{adminDetails.username}</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Role: <span>{adminDetails.role || 'N/A'}</span>
            </p>

            {/* Add other profile details as needed */}
          </div>
        </Modal.Body>

        <Modal.Footer className='flex flex-row justify-between'>
          {/* Verify user button */}
          <Button
            color='gray'
            onClick={handleActivateAdmin}
            disabled={isActivated}
          >
            {isActivated ? 'Activated' : 'Activate Admin'}
          </Button>

          {/* Block Admin button */}
          <Button
            color='gray'
            onClick={handleBlockAdmin}
            disabled={isBlocked}
          >
            {isBlocked ? 'Blocked' : 'Block Admin'}
          </Button>

          {/* <Button color='gray' onClick={() => setViewProfile(false)}>
            Ok
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProfile;
