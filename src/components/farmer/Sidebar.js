import React, { useState } from 'react';
import axios from 'axios';

import { MdApps } from 'react-icons/md';
import { TfiPackage } from "react-icons/tfi";
import { GrTransaction } from "react-icons/gr";
import { PiSignOutBold } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { GiMining } from "react-icons/gi";

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFarmerSigninData } from '../../store/farmer/Signin';

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const Sidebar = ({ onNavigate, activeComponent }) => {
   const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const signinData = useSelector(selectFarmerSigninData);
  const refreshToken = signinData?.refreshToken || '';

   const handleSignoutButtonClick = (event) => {
    // Prevent the click event from propagating to the parent button
    event.stopPropagation();
    setOpenModal(true);
  };


  const handleSignout = async () => {
    try {
      await axios.post('https://api.afribook.world/account/logout', {
        refreshToken: refreshToken,
      });

      navigate('/farmer/signin');
    } catch (error) {
      console.error('Error during logout', error);
    }
  };

  return (
    <aside
      className="bg-white shadow-xl outline outline-offset-2 outline-3 outline-[#A020F0] box-border hidden lg:flex transition-transform duration-300 ease-in-out bottom-0 flex-shrink-0 w-80 max-h-screen-[calc(100vh-88px)] left-0 top-0 overflow-hidden sticky z-10 transform-none"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="w-full pt-8 pb-20 px-3 h-full bg-white dark-bg-gray-800">
        
        <ul className="space-y-6">

           {/* Dashboard */}
          <li>
            <button
              type="button"
              className={`flex items-center p-2 text-base font-medium text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]   rounded-lg dark:text-white dark:hover-bg-gray-700 group ${activeComponent === 'profile' ? 'active' : ''}`}
              onClick={() => onNavigate('dashboard')}
            >
                     <MdApps className="w-6 h-6 text-gray-800 dark:text-white" />
              <span className="ml-3">Dashboard</span>
            </button>
          </li>

            {/* Packages */}
          <li>
            <button
              type="button"
              className={`flex items-center p-2 text-base font-medium text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0] hover:bg-gray-100 rounded-lg dark:text-white dark:hover-bg-gray-700 group ${activeComponent === 'dashboard' ? 'active' : ''}`}
              onClick={() => onNavigate('packages')}
            >
              <TfiPackage className="w-6 h-6 text-gray-800 dark:text-white" /> 
              <span className="ml-3">Packages</span>
            </button>
          </li>

            {/* Pending Packages */}
          {/* <li>
            <button
              type="button"
              className={`flex items-center p-2 text-base font-medium text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0] hover:bg-gray-100 rounded-lg dark:text-white dark:hover-bg-gray-700 group ${activeComponent === '' ? 'active' : ''}`}
              onClick={() => onNavigate('pendingPackages')}
            >
              <TfiPackage className="w-6 h-6 text-gray-800 dark:text-white" /> 
              <span className="ml-3">Pending Packages</span>
            </button>
          </li> */}


          {/* Mining */}
          <li>
            <button
              type="button"
              className={`flex items-center p-2 text-base font-medium text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]  hover:bg-gray-100 rounded-lg dark:text-white dark:hover-bg-gray-700 group ${activeComponent === 'mining' ? 'active' : ''}`}
              onClick={() => onNavigate('mining')}
            >
              <GiMining className="w-6 h-6 text-gray-800 dark:text-white"/>
              
              <span className="ml-3">Mining</span>
            </button>
          </li>

        {/* Transactions */}
          <li>
            <button
              type="button"
              className={`flex items-center p-2 text-base font-medium text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0] hover:bg-gray-100 rounded-lg dark:text-white dark:hover-bg-gray-700 group ${activeComponent === 'dashboard' ? 'active' : ''}`}
              onClick={() => onNavigate('transactions')}
            >
              <GrTransaction className="w-6 h-6 text-gray-800 dark:text-white" />
              <span className="ml-3">Transactions</span>
            </button>
          </li>

         

          {/* Other sidebar items, such as Activation, License Key, etc. */}
          {/* ... */}
        </ul>


        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
           <li>
            <button
              type="button"
              className={`flex items-center p-2 text-base font-medium text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0] rounded-lg dark:text-white hover-bg-gray-100 dark:hover-bg-gray-700 group ${activeComponent === 'profile' ? 'active' : ''}`}
              onClick={() => onNavigate('profile')}
            >
              <ImProfile className="w-6 h-6 text-gray-800 dark:text-white" />
         
              <span className="ml-3">Profile</span>
            </button>
          </li>

         <li>
            <button
              type="button"
              className={`flex items-center p-2 text-base font-medium text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0] rounded-lg dark:text-white hover-bg-gray-100 dark:hover-bg-gray-700 group ${activeComponent === 'signout' ? 'active' : ''}`}
           onClick={handleSignoutButtonClick}
            >
              <PiSignOutBold className="w-6 h-6 text-gray-800 dark:text-white" />
              <span className="ml-3">Signout</span>
            </button>

            
          </li>


        </ul>

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
    </aside>
  );
};

export default Sidebar;
