// AdminProfiles.js
import React from 'react';
import { Button, Modal } from 'flowbite-react';
// import axios from 'axios';

const AdminProfile = ({ viewProfile, setViewProfile, adminDetails }) => {
  
  // const handleBlockAdmin = async () => {
  //   try {
  //     // Make a PUT request to the block admin endpoint
  //     await axios.put('https://api.afribook.world/admin/blockAdmin');

  //     // Optionally, you can handle success (e.g., show a success message)
  //     console.log('Admin blocked successfully!');
  //   } catch (error) {
  //     console.error('Error blocking admin:', error);
  //     // Handle error (e.g., show an error message to the user)
  //   }
  // };

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
              Full Name: <span>{adminDetails.fullName}</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Role: <span>{adminDetails.role?.roleType || 'N/A'}</span>
            </p>

            {/* Add other profile details as needed */}
          </div>
        </Modal.Body>

        <Modal.Footer className='flex flex-row justify-between'>
          {/* Block Admin button */}
          {/* <Button
            color='gray'
            onClick={handleBlockAdmin}
          >
            Block Admin
          </Button> */}

          <Button color='gray' onClick={() => setViewProfile(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProfile;
