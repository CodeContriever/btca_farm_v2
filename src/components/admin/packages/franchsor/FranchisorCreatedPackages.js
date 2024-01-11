import React, { useState, useEffect } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Modal, Button } from 'flowbite-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAdminSigninData } from '../../../../store/admin/Signin';

import { Alert } from 'flowbite-react';


const FranchisorCreatedPackages = () => {
  const signinData = useSelector(selectAdminSigninData);

  const [franchisorCreatedPackages, setFranchisorCreatedPackages] = useState([]);
  const [editingPackage, setEditingPackage] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [packageToDelete, setPackageToDelete] = useState(null);
    const [alert, setAlert] = useState(null);



  useEffect(() => {
    // Fetch packages on component mount
    const fetchPackages = async () => {
      try {
        const accessToken = signinData?.accessToken || '';
        const response = await axios.get('https://api.afribook.world/package/getFranchisorPackages', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setFranchisorCreatedPackages(response.data.data); // Access 'data' property if needed
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, [signinData]); // Dependency array includes signinData to re-run effect when it changes

 const handleEditClick = (index) => {
  setEditingPackage({ ...franchisorCreatedPackages[index] });
};


const handleEditPackage = async (updatedPackage) => {
  try {
    const response = await axios.post(
      'https://api.afribook.world/package/editFranchisorPackage',
      updatedPackage,
      {
        headers: {
          Authorization: `Bearer ${signinData?.accessToken || ''}`,
        },
      }
    );

    console.log('Package edited successfully');

    // Show success message using Alert component
        setAlert(
          <Alert color="success" onDismiss={() => setAlert(null)}>
           {response.message}
          </Alert>
        );

    // Fetch the updated list of packages
    const fetchPackagesResponse = await axios.get('https://api.afribook.world/package/getFranchisorPackages', {
      headers: {
        Authorization: `Bearer ${signinData?.accessToken || ''}`,
      },
    });

    // Update the package list with the fetched data
    setFranchisorCreatedPackages(fetchPackagesResponse.data.data);

    // Clear the editingPackage state
    setEditingPackage(null);
  } catch (error) {
    console.error('Error editing package:', error);
    // Handle error (e.g., show an error message to the user)
      // Show error message using Alert component
      setAlert(
        <Alert color="failure" onDismiss={() => setAlert(null)}>
        Failed to edit package, please try again.
        </Alert>
      );
    
    setEditingPackage(null);
  }
};


  const handleDeleteClick = (index) => {
    setPackageToDelete({ ...franchisorCreatedPackages[index] });
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      console.log('Deleting package with packageId:', packageToDelete.packageId);
      
      const response = await axios.post(
        'https://api.afribook.world/package/deleteFranchisorPackage',
        { packageId: packageToDelete.packageId },
        {
          headers: {
            Authorization: `Bearer ${signinData?.accessToken || ''}`,
          },
        }
      );

      console.log('Package deleted successfully');

          // Show success message using Alert component
        setAlert(
          <Alert color="success" onDismiss={() => setAlert(null)}>
           {response.message}
          </Alert>
        );

      setFranchisorCreatedPackages(franchisorCreatedPackages.filter((pkg) => pkg.packageId !== packageToDelete.packageId));

      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting package:', error);

         // Show error message using Alert component
      setAlert(
        <Alert color="failure" onDismiss={() => setAlert(null)}>
        Failed to delete package, please try again.
        </Alert>
      );

      setIsDeleteModalOpen(false);
    }
  };


  const handleDeleteCancel = () => {
    setPackageToDelete(null);
    setIsDeleteModalOpen(false);
  };


  return (
    <div>

      {alert}

      <h3 className="text-lg font-semibold text-gray-800 mb-4">Created Packages</h3>

      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
        {/* Display created packages */}
        {franchisorCreatedPackages.map((pkg, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <h3 className="mb-2 text-2xl font-semibold">{pkg.packageName}</h3>
            <p>Date Created: {new Date(pkg.dateCreated).toLocaleDateString()}</p>
            <p>Description: {pkg.description}</p>
            <p>Duration: {pkg.duration} days</p>
            {/* <p>Initial Reward: {pkg.initialReward}</p>
            <p>Monthly Reward: {pkg.monthlyReward}</p>
            <p>Yearly Reward: {pkg.yearlyReward}</p> */}
            <p>Package ID: {pkg.packageId}</p>
            <p>Price: ${pkg.price}</p>
             <p>Reward: ${pkg.reward}</p>
            <p>Status: {pkg.status}</p>

            <div className="flex gap-4">
              {/* Edit button */}
              <MdEdit onClick={() => handleEditClick(index)} className="cursor-pointer" />

              {/* Delete button */}
              <MdDelete onClick={() => handleDeleteClick(index)} className="cursor-pointer" />
            
            </div>
          </div>
        ))}


      </div>

    

      {/* Edit Package Modal */}
      {editingPackage && (
        <Modal show={!!editingPackage} onClose={() => setEditingPackage(null)}>
          <Modal.Header>Edit Package</Modal.Header>
          <Modal.Body>
            <label>Package Name:</label>
            <input
              type="text"
              value={editingPackage.packageName}
              onChange={(e) => setEditingPackage({ ...editingPackage, packageName: e.target.value })}
            />
            <label>Description:</label>
            <input
              type="text"
              value={editingPackage.description}
              onChange={(e) => setEditingPackage({ ...editingPackage, description: e.target.value })}
            />
            {/* Add similar input fields for other package details (duration, initialReward, etc.) */}
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => handleEditPackage(editingPackage)} color="primary">
              Save
            </Button>
            <Button onClick={() => setEditingPackage(null)} color="secondary">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <Modal show={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
          <Modal.Header>Confirm Deletion</Modal.Header>
          <Modal.Body>Are you sure you want to delete this package?</Modal.Body>
          <Modal.Footer>
            <Button onClick={handleDeleteConfirm} color="danger">
              Yes
            </Button>
            <Button onClick={handleDeleteCancel} color="secondary">
              No
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default FranchisorCreatedPackages;
