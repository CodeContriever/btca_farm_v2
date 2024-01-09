import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav1 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);
  const [signinDropdownOpen, setSigninDropdownOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignupDropdownToggle = () => {
    setSignupDropdownOpen(!signupDropdownOpen);
  };

  const handleSigninDropdownToggle = () => {
    setSigninDropdownOpen(!signinDropdownOpen);
  };

  const mobileSignupOptions = [
    { to: '/franchisor/signup', label: 'Franchisor' },
    { to: '/reseller/signup', label: 'Reseller' },
    { to: '/farmer/signup', label: 'Farmer' },
  ];

  const mobileSigninOptions = [
    { to: '/franchisor/signin', label: 'Franchisor' },
    { to: '/reseller/signin', label: 'Reseller' },
    { to: '/farmer/signin', label: 'Farmer' },
  ];

  const signupOptions = [
    { to: '/franchisor/signup', label: 'As Franchisor' },
    { to: '/reseller/signup', label: 'As Reseller' },
    { to: '/farmer/signup', label: 'As Farmer' },
  ];

  const signinOptions = [
    { to: '/franchisor/signin', label: 'As Franchisor' },
    { to: '/reseller/signin', label: 'As Reseller' },
    { to: '/farmer/signin', label: 'As Farmer' },
  ];

  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <Link to="/home" className="flex items-center justify-between mr-4">
            <img src="/logo.png" className="mr-3 h-6 lg:h-8" alt="BTCA Logo" />
            <span className="text-md lg:text-2xl font-semibold whitespace-nowrap dark.text-white">
              BTCA_FARM
            </span>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-800 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <span>&#10005;</span>
            ) : (
              <span>&#9776;</span>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <div
            className={`relative group ${signupDropdownOpen ? 'active' : ''}`}
          >
            <button
              onClick={handleSignupDropdownToggle}
              className={`${
                signupDropdownOpen
                  ? 'text-white bg-[#A020F0] hover:bg-blue-800'
                  : 'text-gray-800'
              } font-medium text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 rounded-lg`}
            >
              <span className="font-bold cursor-pointer">Signup</span>
              {signupDropdownOpen ? (
                <span className="ml-2">&#9650;</span>
              ) : (
                <span className="ml-2">&#9660;</span>
              )}
            </button>

            {signupDropdownOpen && (
              <ul className="absolute left-0 mt-2 py-2 space-y-2 bg-white border border-gray-300 rounded-lg group-hover:block">
                {signupOptions.map((option, index) => (
                  <li key={index}>
                    <Link
                      to={option.to}
                      className="block px-4 py-2 text-gray-800 hover:text-[#A020F0]"
                    >
                      {option.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className={`relative group ${signinDropdownOpen ? 'active' : ''}`}
          >
            <button
              onClick={handleSigninDropdownToggle}
              className={`${
                signinDropdownOpen
                  ? 'text-white bg-[#A020F0] hover:bg-blue-800'
                  : 'text-gray-800'
              } font-medium text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 rounded-lg`}
            >
              <span className="font-bold cursor-pointer">Signin</span>
              {signinDropdownOpen ? (
                <span className="ml-2">&#9650;</span>
              ) : (
                <span className="ml-2">&#9660;</span>
              )}
            </button>
            {signinDropdownOpen && (
              <ul className="absolute left-0 mt-2 py-2 space-y-2 bg-white border border-gray-300 rounded-lg group-hover:block">
                {signinOptions.map((option, index) => (
                  <li key={index}>
                    <Link
                      to={option.to}
                      className="block px-4 py-2 text-gray-800 hover:text-[#A020F0]"
                    >
                      {option.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col p-4 gap-4 font-medium">
            <div>
              <button
                onClick={handleSignupDropdownToggle}
                className="font-bold cursor-pointer"
              >
                Signup
                {signupDropdownOpen ? (
                  <span className="ml-2">&#9650;</span>
                ) : (
                  <span className="ml-2">&#9660;</span>
                )}
              </button>
              <ul className={`ml-4 ${signupDropdownOpen ? 'block' : 'hidden'}`}>
                {mobileSignupOptions.map((option, index) => (
                  <li key={index}>
                    <Link
                      to={option.to}
                      onClick={handleMobileMenuToggle}
                      className="hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                    >
                      {`Signup as ${option.label}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="my-2" />

            <div>
              <button
                onClick={handleSigninDropdownToggle}
                className="font-bold cursor-pointer"
              >
                Signin
                {signinDropdownOpen ? (
                  <span className="ml-2">&#9650;</span>
                ) : (
                  <span className="ml-2">&#9660;</span>
                )}
              </button>
              <ul className={`ml-4 ${signinDropdownOpen ? 'block' : 'hidden'}`}>
                {mobileSigninOptions.map((option, index) => (
                  <li key={index}>
                    <Link
                      to={option.to}
                      onClick={handleMobileMenuToggle}
                      className="hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                    >
                      {`Signin as ${option.label}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav1;
