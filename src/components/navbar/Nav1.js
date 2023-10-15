import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav1 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/statistics', label: 'Statistics' },
    { to: '/signin', label: 'Signin' },
    { to: '/signup', label: 'Signup' },
  ];

  return (
    <nav>
      <div className="flex justify-between items-center">

        <div className="flex justify-start items-center gap-4">
          <Link to="/home" className="flex items-center justify-between mr-4">
            <img src="/logo.png" className="mr-3 h-6 lg:h-8" alt="BTCA Logo" />
            <span className="text-md lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
              BTCA_FARM
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`${link.label === 'Signup'
                ? 'text-white bg-[#A020F0] hover:bg-blue-800'
                : 'text-gray-800'
                } font-medium text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 rounded-lg`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex md:hidden cursor-pointer">
          <button
            onClick={handleMobileMenuToggle}
            className="p-2 mr-2 text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6 bg-[#A020F0]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG Path */}
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col p-4 gap-4 font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  onClick={handleMobileMenuToggle}
                  className={`${link.label === 'Signup'
                    ? 'hover:text-[#A020F0]'
                    : 'hover:text-gray-800'
                    } text-md lg:text-base dark:text-white`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <hr />
            {/* Other menu items */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav1;
