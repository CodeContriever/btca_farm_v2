import React, { useState } from "react";
import TabButton from "../TabButton";
import History from "./History";
import Wallet from "./Wallet";
import Balance from "./Balance";



const Transactions = () => {
   const [activeButton, setActiveButton] = useState("transactionHistory");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }



  return (
    

    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Transactions
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">

          {/* Transactions Tab */}
            <div className="border-2 border-gray-200 bg-gray-100 flex justify-between flex-nowrap mb-6 overflow-x-auto rounded-md">

              <TabButton active={activeButton === 'transactionHistory'} onClick={() => handleButtonClick('transactionHistory')}>
               Transaction History
              </TabButton>

              <TabButton
                active={activeButton === 'walletHistory'}
                onClick={() => handleButtonClick('walletHistory')}
              >
                Wallet History
              </TabButton>

              <TabButton
                active={activeButton === 'walletBalance'}
                onClick={() => handleButtonClick('walletBalance')}
              >
               Wallet Balance
              </TabButton>

          </div>
          
            {/* User/farmer transaction history */}
            {activeButton === 'transactionHistory' && (


              <div className="">

                <History />
              </div>

          )}
          
            {/* Wallet transaction history */}
            {activeButton === 'walletHistory' && (


              <div className="">

                <Wallet />
              </div>

          )}
          

              {/* Wallet Balanace */}
            {activeButton === 'walletBalance' && (

              <div className="">

              <Balance />
              </div>

            )}


      
          
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