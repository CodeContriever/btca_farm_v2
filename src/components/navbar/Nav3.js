import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';


// Create a Logo component
function Logo() {
  return (
    <a href="/home" className="flex items-center justify-between mr-4">
      <img src="/logo.png" className="mr-3 h-6 lg:h-8" alt="BTCA Logo" />
      <span className="self-center text-md lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
        BTCA_FARM
      </span>
    </a>
  );
}

// Create a MenuItem component
function MenuItem({ href, text }) {
  return (
    <li>
      <a href={href} className="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white" aria-current="page">
        {text}
      </a>
    </li>
  );
}



// Create a HamburgerMenu component
function HamburgerMenu({ activeButton, handleHamburgerClick }) {
  return (
    <div className="order-1 box-border relative cursor-pointer transition duration-300" tabIndex="0">
      <button
        onClick={() => handleHamburgerClick('menu')}
        data-drawer-target="drawer-navigation"
        data-drawer-toggle="drawer-navigation"
        aria-controls="drawer-navigation"
        className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
        <span className="sr-only">Toggle sidebar</span>
      </button>

      {activeButton === 'menu' && (
        <div className="items-center justify-start lg:hidden flex w-[100%] order-1 bg-gray-400" id="mobile-menu-2" tabIndex="-1">
          <ul className="bg-white w-64 absolute top-8 z-10 flex flex-col justify-center p-4 gap-4 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <MenuItem href="/dashboard" text="Dashboard" />
            <MenuItem href="/activation" text="Activation" />
            <MenuItem href="/license" text="License key" />
            <MenuItem href="/wallet" text="Wallet" />
            <MenuItem href="/payout" text="Payout" />
            <hr />
            <MenuItem href="/home" text="Home" />
            <MenuItem href="/signout" text="Signout" />
          </ul>
        </div>
      )}
    </div>
  );
}


function NotificationButton({ isActive = true, onClick, notificationCount }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex relative items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-gray-400 rounded-lg ${isActive ? 'bg-gray-800 text-gray-400' : 'text-gray-500'}`}
    >
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z" />
      </svg>

      {isActive && notificationCount > 0 && (
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
          {notificationCount}
        </div>
      )}
    </button>
  );
}


function NotificationDropdown() {
  const [notifications, setNotifications] = useState([]);
  const [showAllNotifications, setShowAllNotifications] = useState(false);

  // Sample JSONPlaceholder API endpoint for posts
  const NOTIFICATIONS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(NOTIFICATIONS_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const toggleShowAllNotifications = () => {
    setShowAllNotifications(!showAllNotifications);
  };

  const displayedNotifications = showAllNotifications ? notifications : notifications.slice(0, 5);

  return (
    <div className="w-64 lg:w-90 absolute top-12 right-8 z-10 overflow-hidden my-4 text-base list-none bg-gray-400 divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark-bg-gray-700 rounded-xl" id="notification-dropdown" tabIndex="-1">
      {/* Notifications title */}
      <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark-bg-gray-600 dark:text-gray-300">
        Notifications
      </div>
      {/* Notifications */}
      {displayedNotifications.map((notification, index) => (
        <NotificationItem
          key={index}
          avatarUrl={notification.avatarUrl}
          sender={notification.sender}
          message={notification.message}
          timeAgo={notification.timeAgo}
        />
      ))}
      {notifications.length > 5 && !showAllNotifications && (
        <button onClick={toggleShowAllNotifications} className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover-bg-gray-100 dark-bg-gray-600 dark-text-white dark-hover:underline">
          <div className="inline-flex items-center">
            <svg aria-hidden="true" className="mr-2 w-4 h-4 text-gray-500 dark-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* View all icon */}
              <path fillRule="evenodd" d="M3 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3zm0 2v8h12V5H3z" />
            </svg>
            View all
          </div>
        </button>

      )}
    </div>
  );
}


function NotificationItem({ avatarUrl, sender, message, timeAgo }) {
  return (
    <a href="/1" className="flex py-3 px-4 border-b hover-bg-gray-100 dark-hover-bg-gray-600 dark-border-gray-600">
      <div className="flex-shrink-0">
        <img className="w-11 h-11 rounded-full" src={avatarUrl} alt="Avatar" />
        <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark-border-gray-700">
          <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            {/* Sender icon */}
            <path fillRule="evenodd" d="M3.293 12.293a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-1-1z" />
          </svg>
        </div>
      </div>
      <div className="pl-3 w-full">
        <div className="text-gray-500 font-normal text-sm mb-1.5 dark-text-gray-400">
          New message from <span className="font-semibold text-gray-900 dark-text-white">{sender}</span>: "{message}"
        </div>
        <div className="text-xs font-medium text-primary-600 dark-text-primary-500">
          {timeAgo}
        </div>
      </div>
    </a>
  );
}


function UserProfileDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Use useSelector to access 'franchisorData' from the Redux store
  const franchisorData = useSelector((state) => state.franchisor.franchisorData);

  const { fullname, email, role } = franchisorData?.data || {};

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative flex flex-col justify-center items-center" tabIndex="0">
      <button
        onClick={toggleDropdown}
        className="relative inline-flex items-center p-2 rounded-full cursor-pointer"
      >
        {/* Use a default SVG avatar when 'avatarUrl' is not available */}
        {franchisorData?.avatarUrl ? (
          <img
            src={franchisorData.avatarUrl}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <img
            class="w-8 h-8 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            alt=""
          />
        )}
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-64 p-2 bg-white border border-gray-300 shadow-lg rounded-md">
          <div className="text-sm text-gray-600 mb-2">
            <div>
              <strong>Name:</strong> {fullname || 'John Doe'}
            </div>
            <div>
              <strong>Email:</strong> {email || 'johndoe@example.com'}
            </div>
            <div>
              <strong>Role:</strong> {role || 'User'}
            </div>
          </div>
          <button
            onClick={() => {
              // Add your signout logic here
            }}
            className="block text-sm text-red-600 hover:text-red-800"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}





const FranchisorNavBar = () => {
  const [activeButton, setActiveButton] = useState(null);


  const handleHamburgerClick = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };


  const handleNotificationButtonClick = () => {
    // Handle notification button click (e.g., open the dropdown)
    setActiveButton(activeButton === 'notifications' ? null : 'notifications');
  };

  return (
    <nav>
      <div className="flex flex-wrap justify-between items-center">

        <div className="flex items-center justify-center order-3 lg-order-1">

          <div className="flex flex-row lg-gap-8 w-[100%]">

            <Logo />
            <HamburgerMenu activeButton={activeButton} handleHamburgerClick={handleHamburgerClick} />

          </div>

        </div>




        <div className="flex items-center justify-center order-3 lg-order-3">

          <div className="flex flex-row lg-gap-8 w-[100%]">

            {/* Desktop Nav items */}
            <div class="hidden md:flex items-center justify-between order-1 md:w-auto " id="nav_items">
              <ul class="flex flex-col mt-4 font-medium md:flex-row lg:space-x-8 md:mt-0">

                {/* Home */}
                <li>
                  <a href="/home" class="block py-2 pl-3 pr-4 hover:text-[#A020F0] rounded lg:bg-transparent text-gray-700  lg:p-0 dark:text-white" aria-current="page">Home</a>
                </li>


              </ul>

            </div>


            {/* Notifications */}
            <div className="relative flex flex-col justify-center items-center gap-4" tabIndex="0">
              <NotificationButton notificationCount={5} onClick={handleNotificationButtonClick} />
              {activeButton === 'notifications' && <NotificationDropdown />}
            </div>

            {/* User Profile Dropdown */}
            <UserProfileDropdown />

          </div>
        </div>

      </div>
    </nav>
  );
};

export default FranchisorNavBar;
