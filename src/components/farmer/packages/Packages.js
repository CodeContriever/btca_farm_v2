import React, { useState } from "react";
import TabButton from "../TabButton";
import Company from './Company'
import Franchisors from './franchisors/Franchisors'
import Resellers from './resellers/Resellers'



const Packages = () => {
   const [activeButton, setActiveButton] = useState("company");
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

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">

           {/* Tabs */}
          <div
            className='w-[100%] mb-6 mt-8'
          >

            {/*TabButtons: Myfarm, farm and frozen history buttons */}
            <div className="border-2 border-gray-200 bg-gray-100 flex justify-between flex-nowrap mb-6 overflow-x-auto rounded-md">

              <TabButton active={activeButton === 'company'} onClick={() => handleButtonClick('company')}>
                Company
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

            {/* Company content */}
            {activeButton === 'company' && (

              <div className="">
                <Company />
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



  )
}

export default Packages