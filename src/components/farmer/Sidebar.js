import React from 'react';
import { MdApps } from 'react-icons/md';
import { TfiPackage } from "react-icons/tfi";
import { GrTransaction } from "react-icons/gr";
import { PiSignOutBold } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { GiMining } from "react-icons/gi";

const Sidebar = ({ onNavigate, activeComponent }) => {
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
              className={`flex items-center p-2 text-base font-medium text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0] rounded-lg dark:text-white hover-bg-gray-100 dark:hover-bg-gray-700 group ${activeComponent === 'support' ? 'active' : ''}`}
              onClick={() => onNavigate('signout')}
            >
              <PiSignOutBold className="w-6 h-6 text-gray-800 dark:text-white" />
              <span className="ml-3">Signout</span>
            </button>
          </li>


        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
