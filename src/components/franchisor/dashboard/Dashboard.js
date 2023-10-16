import React, { useState } from "react";
import ReferralLink from "./ReferralLink";
import Dashbar from "./Dashbar";
import TabButton from "./TabButton";
import MiningStatus from "./MiningStatus";
import Indicator from "./indicator/Indicataor";
import PriceSection from "./PriceSection";
import Load from "./loads/Load";
import FarmSpeed from "./farmSpeed/FarmSpeed";
import Packages from "./packages/Packages";
import FarmHistory from "./transactions/FarmHistory";
import FrozenHistory from "./transactions/FrozenHistory";


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


          {/* Dashbar */}
          <div className="mt-8">
            <Dashbar />
          </div>



          {/* Tabs */}
          <div
            className='w-[100%] mb-6 mt-8'
          >

            {/*TabButtons: Myfarm, farm and frozen history buttons */}
            <div className="border-2 border-gray-200 bg-gray-100 flex justify-between flex-nowrap mb-6 overflow-x-auto rounded-md">

              <TabButton active={activeButton === 'myFarm'} onClick={() => handleButtonClick('myFarm')}>
                My Farm
              </TabButton>

              <TabButton
                active={activeButton === 'history'}
                onClick={() => handleButtonClick('FarmHistory')}
              >
                Farm History
              </TabButton>

              <TabButton
                active={activeButton === 'history'}
                onClick={() => handleButtonClick('FrozenHistory')}
              >
                Frozen History
              </TabButton>

            </div>

            {/* myFarm content */}
            {activeButton === 'myFarm' && (

              <div className="">

                {/* First grid box: Mining Factor, My Farm & Total Farmed Amount */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

                  <MiningStatus
                    heading="Mining Factor"
                    status="40.0 %"
                    logoSrc="/logo.png"
                    label="BTCA"
                    value="Max Load For Mining"
                  />

                  <MiningStatus
                    heading="My Farm"
                    status="Inactive"
                    logoSrc="/logo.png"
                    label="BTCA"
                    value="Available Max Load"
                  />

                  <MiningStatus
                    heading="Total Farmed Amount"
                    logoSrc="/logo.png"
                    label="BTCA"
                    value={
                      <>
                        <svg
                          className="plc-svgIcon resIndicatorPrice__icon"
                          height="24"
                          width="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* ... SVG path here ... */}
                        </svg>
                        BTCA
                      </>
                    }
                  />

                </div>

                {/* ########  Indicator  ######## */}
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-8">
                  <div className="box-border border-2 border-gray-300 rounded-md p-9 flex flex-col lg:flex-row items-center justify-around">

                    <div className="text-center">
                      <Indicator />
                    </div>

                  </div>
                </div>

                {/* Second Grid box */}
                {/* Market & Community price */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
                  <PriceSection title="Market Price" />
                  <PriceSection title="Community Price" />
                </div>


                {/* ######## */}
                {/* Farm Status */}
                <div
                  class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-8"
                >

                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* 1: Status guage */}
                    <div className="p-4">
                      <div className="p-6 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <div className="flex flex-col justify-center gap-8">

                          {/* Status gauge */}
                          <svg className="w-full" height="207" width="232" fill="none" viewBox="0 0 232 207">
                            {/* ... SVG Paths ... */}
                          </svg>

                          {/* Increase License Button */}
                          <button
                            type='submit'
                            className="w-full bg-[#A020F0] rounded-lg text-base text-white px-4 py-2 font-medium font-Inter"
                          >
                            Increase License
                          </button>

                          {/* Frozen section */}
                          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-4">
                            <div className="px-4 py-4 text-gray-900 bg-white border shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                              <h2>Frozen</h2>
                              <div className="flex flex-row justify-between items-center gap-4">
                                <img
                                  className="h-6 w-6"
                                  alt="BTCA logo"
                                  src="/logo.png"
                                />
                                <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z" />
                                </svg>
                                <p className="text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap">BTCA</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>


                    {/* 2: Max Load */}
                    <div className="p-4">

                      {/* Max Load Status */}
                      <div className="rounded-md overflow-hidden p-6 flex flex-col justify-between bg-[#4B0F70] shadow-none">
                        {/* Header: maxload status */}
                        <div className="flex items-center justify-between mb-4">
                          <p className="mb-0 mt-0 font-inter text-base font-medium leading-5 text-white">
                            MAX LOAD Status
                          </p>
                        </div>

                        {/* Load status widgets container */}
                        <div className="gap-4 grid flex-1 md:grid-rows-3">
                          {/* Total MaxLoad Card */}
                          <Load
                            title="Total Max Load"
                            value="0"
                            unit="BTCA"
                            background="bg-opacity-12 bg-white"
                            textColor="text-black opacity-50"
                          />

                          {/* Available Maxload */}
                          <Load
                            title="Available max load"
                            value="0"
                            unit="BTCA"
                            background="bg-opacity-12 bg-white"
                            textColor="text-black opacity-50"
                          />

                          {/* Used MaxLoad */}
                          <Load
                            title="Used Max Load"
                            value="0"
                            unit="BTCA"
                            background="bg-opacity-12 bg-white"
                            textColor="text-black opacity-50"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* ######## */}
                {/* Farm speed */}
                <div className="w-full">

                  <FarmSpeed />

                </div>



                {/* Third Grid box */}
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


            {/* FarmHistory content */}
            {activeButton === 'FarmHistory' && (

              <FarmHistory />

            )}


            {/* FrozenHistory content */}
            {activeButton === 'FrozenHistory' && (
              <FrozenHistory />
            )}

          </div>

        </div>

      </div>





    </div>



  )
}

export default Dashboard