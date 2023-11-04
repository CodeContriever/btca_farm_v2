import React from "react";



const Users = () => {

  return (

    <div
      className="container mx-auto px-6"
    >

      <div className="">

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Users
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8  mt-4">

   <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3 border-r">USER</th>
                            <th scope="col" className="px-4 py-3 border-r">USER ROLE</th>
                            <th scope="col" className="px-4 py-3 border-r">STATUS</th>
                  <th scope="col" className="px-4 py-3 border-r">LAST LOGIN</th>
                   <th scope="col" className="px-4 py-3 border-r">VIEW PROFILE</th>
                        </tr>
              </thead>
              
              <tbody>
                
                        <tr className="border-b dark:border-gray-700">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
                    <div className="flex flex-row gap-2 items-center">
                      <img className="w-11 h-11 rounded-full" src='' alt="Avatar" />
                      <h4>Jessse Leesee</h4>
                    </div>
                  </th>
                            <td className="px-4 py-3 border-r">Franchisor</td>
                            <td className="px-4 py-3 border-r">Active</td>
                  <td className="px-4 py-3 border-r">20 Nov 2022</td>
                  <td className="px-4 py-3 border-r"> <a href="/1" className="flex py-3 px-4 border-b hover-bg-gray-100 dark-hover-bg-gray-600 dark-border-gray-600">View</a>
                  </td>
                        
                            
                        </tr>
                
                    </tbody>
            </table>
            
          </div>
          
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
                    Showing
                    <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
            
            </nav>

        </div>

      </div>





    </div>



  )
}

export default Users