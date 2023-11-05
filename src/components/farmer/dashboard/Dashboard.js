import React from "react";
import AvailableBalance from "./balance/AvailableBalance";
import TotalFarmedAmount from "./balance/TotalFarmedAmount";
import ActivatedPackages from "./packages/ActivatedPackages";
import MiningReward from "./balance/MiningReward";
import FarmSpeed from "./farmSpeed/FarmSpeed";



const Dashboard = () => {

  return (

    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Dashboard
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">

          {/* Balance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AvailableBalance />
            <TotalFarmedAmount />
            <MiningReward />
          </div>
          
           {/* Farming Speed */}
          <div className="mt-12">
            <FarmSpeed />
          </div>
          
          {/* Activated Packages */}
          <div className="mt-12">
            <ActivatedPackages />
            </div>

        </div>

      </div>





    </div>



  )
}

export default Dashboard