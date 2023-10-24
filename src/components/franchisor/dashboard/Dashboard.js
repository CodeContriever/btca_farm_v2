import React, { useState } from "react";
import ReferralLink from "./ReferralLink";
import TabButton from "./TabButton";
import Packages from "./packages/Packages";
import PendingSales from "./pendingSales/PendingSales";
import CurrentPackages from "./packages/CurrentPackages";


const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("myFarm");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (

    <div
      className="container mx-auto px-6"
    >

      <div className="">
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Dashboard
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">

          {/* Referral Link */}
          <div>
            <ReferralLink />
          </div>



          {/* Tabs */}
          <div
            className='w-[100%] mb-6 mt-8'
          >

            {/*TabButtons: Myfarm, farm and frozen history buttons */}
            <div className="border-2 border-gray-200 bg-gray-100 flex justify-between flex-nowrap mb-6 overflow-x-auto rounded-md">

              <TabButton active={activeButton === 'packages'} onClick={() => handleButtonClick('packages')}>
                Packages
              </TabButton>

              <TabButton
                active={activeButton === 'current_packages'}
                onClick={() => handleButtonClick('current_packages')}
              >
                Current Packages
              </TabButton>

              <TabButton
                active={activeButton === 'pending_sales'}
                onClick={() => handleButtonClick('pending_sales')}
              >
                Pending Sales
              </TabButton>

            </div>

            {/* Packages content */}
            {activeButton === 'packages' && (

              <div className="">

                {/* Farm Packages  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
                  <Packages
                    title="Package Title"
                    value="Package Value"
                    description="Package Description"
                  />
                </div>


              </div>

            )}


            {/* Current packagescontent */}
            {activeButton === 'current_packages' && (


              <div className="">

                {/* Farm Packages  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
                  <CurrentPackages
                    title="Package Title"
                    value="Package Value"
                    description="Package Description"
                  />
                </div>


              </div>

            )}


            {/* FrozenHistory content */}
            {activeButton === 'pending_sales' && (
              <PendingSales />
            )}

          </div>

        </div>

      </div>





    </div>



  )
}

export default Dashboard