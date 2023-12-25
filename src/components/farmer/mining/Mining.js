import React, { useState } from "react";
import TabButton from "../TabButton";

import History from "./History";
import MyFarm from "./farm/Farm";


const Mining = () => {
   const [activeButton, setActiveButton] = useState("myFarm");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }



  return (
    <div className="container mx-auto px-6">

      <div>

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Mining
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8 mt-4">

            {/* Transactions Tab */}
          <div className="border-2 border-gray-200 bg-gray-100 flex justify-between flex-nowrap mb-6 overflow-x-auto rounded-md">
            

            {/* My Farm */}
              <TabButton active={activeButton === 'myFarm'} onClick={() => handleButtonClick('myFarm')}>
               My Farm
            </TabButton>
            

            {/* Mining history */}
              <TabButton
                active={activeButton === 'miningHistory'}
                onClick={() => handleButtonClick('miningHistory')}
              >
                Mining History
              </TabButton>

            

          </div>


             {/* My Farm */}
           {activeButton === 'myFarm' && (
              <div className="">

                <MyFarm />
              </div>

          )}



          {/* Mining History */}
           {activeButton === 'miningHistory' && (
              <div className="">

                <History />
              </div>

          )}


        </div>
      </div>
    </div>
  );
};

export default Mining;
