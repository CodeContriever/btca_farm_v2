import React from "react";



const Transactions = () => {

  return (

    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Transactions
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">

        <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3 border-r">TRANSACTION ID</th>
                            <th scope="col" className="px-4 py-3 border-r">DATE</th>
              
                  <th scope="col" className="px-4 py-3 border-r">ITEM</th>
                      <th scope="col" className="px-4 py-3 border-r">FROM</th>
                  <th scope="col" className="px-4 py-3 border-r">QUANTITY</th>
                   <th scope="col" className="px-4 py-3 border-r">COST</th>
                            <th scope="col" className="px-4 py-3 border-r">STATUS</th>
                        </tr>
              </thead>
              
              <tbody>
                
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">56839485GB4562</th>
                            <td className="px-4 py-3 border-r">15 May 2021</td>
                      
                  <td className="px-4 py-3 border-r">Premium Package</td>
                        <td className="px-4 py-3 border-r">Company</td>
                  <td className="px-4 py-3 border-r">2</td>
                  <td className="px-4 py-3 border-r">$1370</td>
                  <td className="px-4 py-3 border-r">Completed</td>
                            
                        </tr>
                
                    </tbody>
            </table>
            
          </div>
          
            {/* <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
                    Showing
                    <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
            
            </nav> */}


        </div>

      </div>





    </div>



  )
}

export default Transactions