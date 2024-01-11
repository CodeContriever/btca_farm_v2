import React, { useState } from 'react';

import TabButton from "../TabButton"
import ActivatedPackages from './Activated';
import UnactivatedPackages from './Unactivated';
import PendingPackages from './PendingPackages';

const Packages = () => {
    const [activeButton, setActiveButton] = useState("activated");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }
  return (
    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Packages
        </h1>

        <div className="bg-white rounded-md shadow-lg p-4  mt-4">

             {/* Tabs */}
          <div
            className='w-[100%] mb-6 mt-8'
          >

            {/*TabButtons: Activated & Unactivated */}
            <div className="border-2 border-gray-200 bg-gray-100 flex justify-between flex-nowrap mb-6 overflow-x-auto rounded-md">

              <TabButton active={activeButton === 'activated'} onClick={() => handleButtonClick('activated')}>
                Activated
              </TabButton>


              <TabButton
                active={activeButton === 'pending'}
                onClick={() => handleButtonClick('pending')}
              >
                Pending
              </TabButton>

              <TabButton
                active={activeButton === 'unactivated'}
                onClick={() => handleButtonClick('unactivated')}
              >
                Unactivated
              </TabButton>

              

            </div>

            {/* Activated content */}
            {activeButton === 'activated' && (

              <div className="">
                <ActivatedPackages />
              </div>

            )}

                {/* Pending packages content */}
            {activeButton === 'pending' && (

              <div className="">
               <PendingPackages />
              </div>

            )}


            {/* Unactivated content */}
            {activeButton === 'unactivated' && (


              <div className="">

                <UnactivatedPackages />
              </div>

            )}




         

          </div>


        </div>

      </div>

          
          </div>
  )
}

export default Packages