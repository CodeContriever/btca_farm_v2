import React, { useState } from 'react';

import TabButton from "../../TabButton"

import Farmers from './farmers/Farmers';
import Franchisors from './franchisors/Franchisors';
import Resellers from './resellers/Resellers';

const Users = () => {
      const [activeButton, setActiveButton] = useState("farmers");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
      <div className="container mx-auto px-6">
          
      <div className="">
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">Users</h1>

        <div className="bg-white rounded-md shadow-lg p-4 mt-4">
          {/* Package type selection */}

            {/* Tabs */}
          <div
            className='w-[100%] mb-6 mt-8'
          >

            {/*TabButtons:Farmer,Franchisor & Reseller*/}
            <div className="border-2 border-gray-200 bg-gray-100 flex justify-between flex-nowrap mb-6 overflow-x-auto rounded-md">

              <TabButton active={activeButton === 'farmers'} onClick={() => handleButtonClick('farmers')}>
               Farmers
              </TabButton>

              <TabButton
                active={activeButton === 'franchisors'}
                onClick={() => handleButtonClick('franchisors')}
              >
                Franchisors
              </TabButton>

                <TabButton
                active={activeButton === 'resellers'}
                onClick={() => handleButtonClick('resellers')}
              >
                Resellers
              </TabButton>

            </div>

            {/* Farmer content */}
            {activeButton === 'farmers' && (

              <div className="">

                <Farmers />
            
                
              </div>

            )}


            {/* Franchisor content */}
                      {activeButton === 'franchisors' && (
                          
              <div className="">
                <Franchisors />
              </div>

            )}

            {/* Reseller content */}
            {activeButton === 'resellers' && (

                          <div className="">
                              <Resellers />
                              
              </div>

            )}


          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Users;
