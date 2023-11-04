import React from "react";
import Transactions from "./transactions/Transactions";
import Users from "./users/Users";

const Analytics = () => {


  return (
    <div className="container mx-auto px-6">
      <h1 className="text-2xl font-medium mt-6 mb-4 text-gray-800">Analytics</h1>

  {/* Users */}
      <div className="bg-white mt-4">
  
<Users />
      </div>
      
 {/* Transactions */}
          <div className="bg-white mt-8">
            <Transactions
            />
      </div>
      

      </div>

  


  );
}

export default Analytics;
