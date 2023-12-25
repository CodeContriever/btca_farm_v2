import React from 'react';
import TotalBuyers from './TotalBuyers';


const SalesMetrics = () => {



  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Total Buyers */}
        <div className="">
         <TotalBuyers />
        </div>

    
              
      </div>

   
    </div>
    
  );
}

export default SalesMetrics;
