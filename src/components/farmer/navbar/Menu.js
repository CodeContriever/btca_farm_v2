import React from 'react'

const Menu = ({ activeButton, handleHamburgerClick, onNavigate }) => {
  return (
      <div className="order-1 box-border relative cursor-pointer transition duration-300" tabIndex="0">
      <button
        onClick={() => handleHamburgerClick('menu')}
        data-drawer-target="drawer-navigation"
        data-drawer-toggle="drawer-navigation"
        aria-controls="drawer-navigation"
        className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover-bg-gray-100 focus:bg-gray-100 dark-focus-bg-gray-700 focus-ring-2 focus-ring-gray-100 dark-focus-ring-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white"
      >
        {/* Hamburger icon */}
        <div>☰</div>
      </button>

      {activeButton === 'menu' && (
        <div className="items-center justify-start lg:hidden flex w-[100%] order-1 bg-gray-400" id="mobile-menu-2" tabIndex="-1">

          <ul className="bg-white w-64 absolute top-8 z-10 flex flex-col justify-center p-4 gap-4 mt-4 font-medium lg:flex-row lg-space-x-8 lg-mt-0">

            {/* Dashboard */}
            <li onClick={() => handleHamburgerClick('menu')}>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('dashboard')}>Dashboard</button>
            </li>

                {/* Packages */}
            <li onClick={() => handleHamburgerClick('menu')}>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('packages')}>Packages</button>
            </li>

              {/* Mining */}
            <li onClick={() => handleHamburgerClick('menu')}>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('mining')}>Mining</button>
            </li>        

            {/* Transactions */}

 <li onClick={() => handleHamburgerClick('menu')}>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('transactions')}>Transactions</button>
            </li>

             

            {/* Pending Sales */}
             {/* <li onClick={() => handleHamburgerClick('menu')}>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('pendingSales')}>Pending Sales</button>
            </li> */}

            {/* Approved Sales */}
             {/* <li onClick={() => handleHamburgerClick('menu')}>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('approvals')}>Approved Sales</button>
            </li> */}

            {/* Payments */}
             {/* <li onClick={() => handleHamburgerClick('menu')}>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('payments')}>Payments</button>
            </li> */}
            

            {/* Orders */}
             {/* <li onClick={() => handleHamburgerClick('menu')}>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('orders')}>Orders</button>
            </li> */}

            {/* Signout */}
                 <li onClick={() => handleHamburgerClick('menu')} className=' space-y-2 border-t border-gray-200'>
              <button className="cursor-pointer text-gray-800 hover:text-[#A020F0] focus:text-[#A020F0]" onClick={() => onNavigate('signout')}>Signout</button>
            </li>


          </ul>
        </div>
      )}
    </div>
  )
}

export default Menu