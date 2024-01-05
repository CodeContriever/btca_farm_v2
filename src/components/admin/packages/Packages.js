import React, { useState } from 'react';

import TabButton from "../../TabButton"

import FarmerCreatePackages from './farmer/FarmerCreatePackages';
import FarmerCreatedPackages from './farmer/FarmerCreatedPackages';

import FranchisorCreatePackages from './franchsor/FranchisorCreatePackages';
import FranchisorCreatedPackages from './franchsor/FranchisorCreatedPackages';

import ResellerCreatePackages from './reseller/ResellerCreatePackages';
import ResellerCreatedPackages from './reseller/ResellerCreatedPackages';

const Packages = () => {
      const [activeButton, setActiveButton] = useState("farmer");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  const [farmerCreatedPackages, setFarmerCreatedPackages] = useState([]);
  const [franchisorCreatedPackages, setFranchisorCreatedPackages] = useState([]);
    const [resellerCreatedPackages, setResellerCreatedPackages] = useState([]);

  return (
    <div className="container mx-auto px-6">
      <div className="">
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">Packages</h1>

        <div className="bg-white rounded-md shadow-lg p-4 mt-4">
          {/* Package type selection */}

            {/* Tabs */}
          <div
            className='w-[100%] mb-6 mt-8'
          >

            {/*TabButtons:Farmer,Franchisor & Reseller*/}
            <div className="border-2 border-gray-200 bg-gray-100 flex justify-between flex-nowrap mb-6 overflow-x-auto rounded-md">

              <TabButton active={activeButton === 'farmer'} onClick={() => handleButtonClick('farmer')}>
               Farmer
              </TabButton>

              <TabButton
                active={activeButton === 'franchisor'}
                onClick={() => handleButtonClick('franchisor')}
              >
                Franchisor
              </TabButton>

                <TabButton
                active={activeButton === 'reseller'}
                onClick={() => handleButtonClick('reseller')}
              >
                Reseller
              </TabButton>

            </div>

            {/* Farmer content */}
            {activeButton === 'farmer' && (

              <div className="">

                <div>
                  <FarmerCreatePackages farmerCreatedPackages={farmerCreatedPackages} setFarmerCreatedPackages={setFarmerCreatedPackages} />
                  </div>
                
                 {/* Display Created packages */}
              <div className="mt-12">
                <FarmerCreatedPackages farmerCreatedPackages={farmerCreatedPackages} />
                </div>
                
              </div>

            )}


            {/* Franchisor content */}
            {activeButton === 'franchisor' && (


              <div className="">

                 <div>
                  <FranchisorCreatePackages franchisorCreatedPackages={franchisorCreatedPackages} setFranchisorCreatedPackages={setFranchisorCreatedPackages} />
                  </div>
                
                 {/* Display Created packages */}
              <div className="mt-12">
                <FranchisorCreatedPackages franchisorCreatedPackages={franchisorCreatedPackages} />
                </div>
                
              </div>

            )}

            {/* Reseller content */}
            {activeButton === 'reseller' && (


              <div className="">

                <div>
                  <ResellerCreatePackages resellerCreatedPackages={resellerCreatedPackages} setResellerCreatedPackages={setResellerCreatedPackages} />
                  </div>
                
                 {/* Display Created packages */}
              <div className="mt-12">
                <ResellerCreatedPackages resellerCreatedPackages={resellerCreatedPackages} />
                </div>
              </div>

            )}


          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Packages;
