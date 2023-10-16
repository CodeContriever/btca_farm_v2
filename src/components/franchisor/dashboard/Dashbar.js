import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Dashbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = () => {
    setActiveButton((prevActive) =>
      prevActive === 'FaChevronUpIcon' ? 'FaChevronDownIcon' : 'FaChevronUpIcon'
    );
  };

  const renderIcon = () => {
    const Icon = activeButton === 'FaChevronUpIcon' ? <FaChevronUp size={24} color="gray" /> : <FaChevronDown size={24} color="gray" />;
    return Icon;
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-gray-800 text-base lg:text-xl font-medium">
            BTCA Farming Dashboard
          </h2>
        </div>

        <div className="relative cursor-pointer w-64 border border-gray-300 px-4 py-3 transition duration-300 bg-gray-100 flex items-center pr-4 focus:outline-purple">
          <button
            className="flex flex-row gap-20 text-base font-medium cursor-pointer relative text-center"
            onClick={handleButtonClick}
          >
            Farming BTCA
            {renderIcon()}
          </button>
          {activeButton === 'chevronUpIcon' && (
            <div className="max-h-[300px]">
              <ul className="bg-white rounded-md list-none p-1 shadow-sm overflow-x-hidden absolute top-full z-10 border border-gray-300 left-0 right-0 max-h-none">
                <li className="block">
                  {/* Farming BTCA */}
                </li>
                <li className="block mt-4">
                  {/* Farming PLCUX */}
                </li>
                <li className="block mt-1">
                  {/* PLCUX */}
                </li>
                {/* Other list items */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashbar;
