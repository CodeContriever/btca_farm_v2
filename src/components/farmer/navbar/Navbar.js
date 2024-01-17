import React, {
  useState,
  // useEffect
} from 'react'
// import Notification from './Notification';
// import Profile from './Profile';
import Menu from './Menu';




const NavBar = ({ onNavigate }) => {
  const [activeButton, setActiveButton] = useState(null);


  const handleHamburgerClick = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };


  // const handleNotificationButtonClick = () => {
  //   // Handle notification button click (e.g., open the dropdown)
  //   setActiveButton(activeButton === 'notifications' ? null : 'notifications');
  // };

  return (
    <nav>
      <div className="flex flex-wrap justify-between items-center">

        <div className="flex items-center justify-center order-3 lg-order-1">

                  <div className="flex flex-row items-center lg-gap-8 w-[100%]">
                      
                      {/* Logo */}
            <div>
              
                    <a href="/home" className="flex items-center justify-between mr-4">
      <img src="/logo.png" className="mr-3 h-6 lg:h-8" alt="BTCA Logo" />
      <span className="self-center text-md lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
        BTCA_FARM
      </span>
    </a>      
           </div>
            
                      {/* Menu */}
                      <div>
                          <Menu activeButton={activeButton} handleHamburgerClick={handleHamburgerClick} onNavigate={onNavigate} />
                          </div>

          </div>

        </div>


        <div className="flex items-center justify-center order-3 lg-order-3">

          <div className="flex flex-row lg-gap-8 w-[100%]">

            {/* Desktop Nav items */}
            <div class="hidden md:flex items-center justify-between order-1 md:w-auto " id="nav_items">
              <ul class="flex flex-col mt-4 font-medium md:flex-row lg:space-x-8 md:mt-0">

                {/* Home */}
                {/* <li>
                  <a href="/home" class="block py-2 pl-3 pr-4 hover:text-[#A020F0] rounded lg:bg-transparent text-gray-700  lg:p-0 dark:text-white" aria-current="page">Home</a>
                </li> */}


              </ul>

            </div>


            {/* Notifications */}
            {/* <div className="relative flex flex-col justify-center items-center gap-4" tabIndex="0">
                          <Notification />
            </div> */}

                      {/* Profile */}
                      {/* <div>
                        <Profile />
                      </div> */}
          

          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
