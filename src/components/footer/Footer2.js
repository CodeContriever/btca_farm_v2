import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer2 = () => {
  return (
    <div className="bg-white py-20">

      <div className="container mx-auto px-6">

        <div className="flex items-center justify-center pb-12">

          <div className="flex flex-col items-center justify-center gap-12 ">

            <div>
              <Link to="/home">
                <img src="/farmLogo.png" className="w-32 h-32 md:w-48 md:h-48" alt="BTCA Logo" />
              </Link>
            </div>

            <h3 className="order-2 text-2xl lg:text-5xl text-gray-800 font-extrabold">
              BTC Africa Farm
            </h3>

            <div className="order-3 text-gray-800 flex gap-8">
              <FiFacebook className="h-6 w-6" />
              <FiTwitter className="h-6 w-6" />
              <FiInstagram className="h-6 w-6" />
            </div>

          </div>

        </div>

      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-12 text-gray-800 font-semibold lg:px-64 mt-8">
        {footerLinks.map((link, index) => (
          <Link key={index} to={link.to} className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
            {link.label}
          </Link>
        ))}
      </div>

    </div>
  );
};

const footerLinks = [
  { to: '/help', label: 'Help' },
  { to: '/faq', label: 'FAQ' },
  { to: '/terms', label: 'General Terms & Conditions' },
  { to: '/risk_notice', label: 'Risk Notice' },
  { to: '/policy', label: 'Data & Privacy policy' },
];

export default Footer2;
