import React from 'react'
import { useState } from 'react';


import { Button, Modal } from 'flowbite-react';
import { Pagination } from 'flowbite-react';

const Franchisors = () => {
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
                            <th scope="col" className="px-4 py-3 border-r">FRANCHISOR</th>
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
                  <td className="px-4 py-3 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white"><div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
              </div>
              </td>


              {/* Profile */}
<td className="px-4 py-3 border-r">
                <Button size='sm' color='teal' onClick={() => setViewProfile(true)} >View Profile</Button>
                 <Modal dismissible show={viewProfile} onClose={() => setViewProfile(false)}>
        <Modal.Header>profile</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        full name: <span>Johan Rodrigues</span>
                      </p>
                      
                       <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Role: <span>Franchisor</span>
            </p>
           
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='gray' onClick={() => setViewProfile(false)}>Ok</Button>
        </Modal.Footer>
      </Modal>
               
              </td>


               {/*Packages  */}
              <td className="px-4 py-3 border-r">
                <Button size='sm' color='yellow' onClick={() => setViewPackages(true)} >View Packages</Button>
                 <Modal dismissible show={viewPackages} onClose={() => setViewPackages(false)}>
        <Modal.Header>Packages</Modal.Header>
        <Modal.Body>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 lg:space-x-2">              
          {/* <!-- Pricing Card 1 --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Company</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$99</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul  class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span class="font-semibold">10 developers</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span class="font-semibold">24 months</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span class="font-semibold">24 months</span></span>
                  </li>
              </ul>
              <a href="/1" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                      </div>
                      
           
          
         
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='gray' onClick={() => setViewPackages(false)}>Ok</Button>
        </Modal.Footer>
      </Modal>
               
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

export default Franchisors