import React from 'react'

const AvailableBalance = () => {
  return (
      <div>
           {/* Available balance */}
          <div className="bg-white rounded-lg shadow-xl p-4 flex items-center">
              <div className="flex flex-col gap-8">
                  
                  <p>BTCA Available Balance</p>

              <div className="flex flex-row justify-between mt-8">
                      
        <div className='flex flex-row gap-2'>
                          <img className="h-12 w-12" alt="BTCA logo" src='' />
                           <p className="text-gray-900 font-medium">0</p>
                      </div>

                      <p>BTCA</p>
                      
      </div>
            </div>
          </div>
    </div>
  )
}

export default AvailableBalance