import React from "react";

import Transactions from "./transactions/Transactions";
import SalesMetrics from "./salesMetrics/SalesMetrics";



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

{/* Sales metrics */}
      <div className="bg-white mt-4">
  
<SalesMetrics />
      </div>
      
 {/* Transactions */}
          <div className="bg-white mt-8">
            <Transactions
            />
      </div>

        </div>

      </div>





    </div>



  )
}

export default Dashboard