import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAdminSigninData } from '../../../store/admin/Signin';

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const Menu = ({ activeButton, handleHamburgerClick, onNavigate }) => {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const signinData = useSelector(selectAdminSigninData);
  const refreshToken = signinData?.refreshToken || '';

  const handleSignout = async () => {
    try {
      await axios.post('https://api.afribook.world/account/logout', {
        refreshToken: refreshToken,
      });

      navigate('/admin/signin');
    } catch (error) {
      console.error('Error during logout', error);
    }
  };

  
  const handleSignoutButtonClick = (event) => {
    // Prevent the click event from propagating to the parent button
    event.stopPropagation();
    setOpenModal(true);
  };


    const handleMenuItemClick = (page) => {
    // Close the menu first
    handleHamburgerClick('menu');

    // Navigate to the selected page
    onNavigate(page);
  };

  
  return (
    <div className="order-1 box-border relative cursor-pointer transition duration-300" tabIndex="0">

      <div className='flex flex-row justify-center items-center gap-x-24'>
        <button
          onClick={() => handleHamburgerClick('menu')}
          data-drawer-target="drawer-navigation"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
          className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover-bg-gray-100 focus:bg-gray-100 dark-focus-bg-gray-700 focus-ring-2 focus-ring-gray-100 dark-focus-ring-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white"
        >
          <div>☰</div>
        </button>


        {/* Signout */}
        <div className="">
          <button onClick={handleSignoutButtonClick} className="outline-gray-800 cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]">Signout</button>
        </div>
      </div>



      {/* Menu items */}
      {activeButton === 'menu' && (
        <div className="items-center justify-start lg:hidden flex w-[100%] order-1 bg-gray-400" id="mobile-menu-2" tabIndex="-1">
          <ul className="bg-white w-64 absolute top-8 z-10 flex flex-col justify-center p-4 gap-4 mt-4 font-medium lg:flex-row lg-space-x-8 lg-mt-0">
      {/* Dashboard */}
            <li>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => handleMenuItemClick('dashboard')}>Dashboard</button>
            </li>

              {/* Admins */}
            <li>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => handleMenuItemClick('admins')}>Admins</button>
            </li>

            {/* Users */}
            <li>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => handleMenuItemClick('users')}>Users</button>
            </li>


             {/* Packages */}
            <li>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => handleMenuItemClick('packages')}>Packages</button>
            </li>

            {/* Transactions */}

 <li>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => handleMenuItemClick('transactions')}>Transactions</button>
            </li>

          </ul>
        </div>
      )}


      {/* Modal */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to signout?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleSignout}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>


    </div>
  );
};

export default Menu;
