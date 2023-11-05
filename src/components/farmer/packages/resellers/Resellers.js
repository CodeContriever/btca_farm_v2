import React from 'react'
import { useState } from 'react';


import { Button } from 'flowbite-react';
import { Pagination } from 'flowbite-react';
import ResellerPackages from './Packages';
import ResellersProfile from './Profiles';
import ResellersRating from './Ratings';

const Resellers = () => {
  const [viewProfile, setViewProfile] = useState(false);

   const [viewPackages, setViewPackages] = useState(false);



  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = function (page) {
  setCurrentPage(page);
};

  return (
    <div>
      <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ whiteSpace: 'nowrap' }}>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3 border-r">RESELLER</th>
                            <th scope="col" className="px-4 py-3 border-r">STATUS</th>
                            <th scope="col" className="px-4 py-3 border-r">LAST LOGIN</th>
                  <th scope="col" className="px-4 py-3 border-r">RATING</th>
              <th scope="col" className="px-4 py-3 border-r">PROFILE</th>
              <th scope="col" className="px-4 py-3 border-r">VIEW PACKAGES</th>
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
              <td className="px-4 py-3 border-r">Active</td>
              
              <td className="px-4 py-3 border-r">20 Nov 2022</td>

              {/* Rating */}
              <td className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white">
               <ResellersRating />
              </td>


              {/* Profile */}
<td className="px-4 py-3 border-r">
                <Button size='sm' color='teal' onClick={() => setViewProfile(true)} >View Profile</Button>
             <ResellersProfile viewProfile={viewProfile} setViewProfile={setViewProfile} />
               
              </td>


               {/*Packages  */}
              <td className="px-4 py-3 border-r">
              
                <Button size='sm' color='yellow' onClick={() => setViewPackages(true)} >View Packages</Button>
                
                 <ResellerPackages viewPackages={viewPackages} setViewPackages={setViewPackages} />
              </td>
                        
                            
                        </tr>
                
                    </tbody>
            </table>
            
          </div>
          
           <div className="flex overflow-x-auto sm:justify-center mt-8">
      <Pagination currentPage={currentPage} totalPages={3} onPageChange={onPageChange} showIcons />
      </div>
      
    </div>
  )
}

export default Resellers