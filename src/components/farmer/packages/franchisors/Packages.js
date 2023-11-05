import React from 'react'
import { Button, Modal } from 'flowbite-react';

const FranchisorPackages = ({ viewPackages, setViewPackages }) => {

  return (
      <div>
                 <Modal dismissible show={viewPackages} onClose={() => setViewPackages(false)}>
        <Modal.Header>Packages</Modal.Header>
        <Modal.Body>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 lg:space-x-2">              
           {/* <!-- Packages --> */}
              <div class="flex flex-col gap-8 p-6 mx-auto max-w-lg text-center  bg-[#00247E] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  {/* package name */}
                  <h3 class="mb-4 text-2xl font-semibold">Starter</h3>

                  <hr />

                  {/* Freezing MAX Load */}
                  <div className='flex flex-col gpa-2'>
                      <p>Up to 0.125BTCA</p>
                      <p>Freezing MAX Load</p>
                  </div>

                  <hr />

                   {/* Mining Reward */}
                  <div className='flex flex-col gpa-2'>
                      <p>0.5BTCA</p>
                      <p>Mining Reward per month</p>
                  </div>

                  <hr />


                   {/* Expected Mining */}
                  <div className='flex flex-col gpa-2'>
                      <p>4.8BTCA</p>
                      <p>Expected Mining</p>
                  </div>

                  <hr />

                   {/* Validity */}
                  <div className='flex flex-col gpa-2'>
                      <p>1 year</p>
                      <p>Validity</p>
                  </div>

                  <hr />

                    {/* Unfreezing Term */}
                  <div className='flex flex-col gpa-2'>
                      <p>$10</p>
                      <p>Unfreezing Term</p>
                  </div>

                  <hr />

                  <button>Activate</button>
                  
            
                      </div>
                      

                        {/* <!-- Packages 2--> */}
              <div class="flex flex-col gap-8 p-6 mx-auto max-w-lg text-center  bg-[#00247E] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  {/* package name */}
                  <h3 class="mb-4 text-2xl font-semibold">Starter</h3>

                  <hr />

                  {/* Freezing MAX Load */}
                  <div className='flex flex-col gpa-2'>
                      <p>Up to 0.125BTCA</p>
                      <p>Freezing MAX Load</p>
                  </div>

                  <hr />

                   {/* Mining Reward */}
                  <div className='flex flex-col gpa-2'>
                      <p>0.5BTCA</p>
                      <p>Mining Reward per month</p>
                  </div>

                  <hr />


                   {/* Expected Mining */}
                  <div className='flex flex-col gpa-2'>
                      <p>4.8BTCA</p>
                      <p>Expected Mining</p>
                  </div>

                  <hr />

                   {/* Validity */}
                  <div className='flex flex-col gpa-2'>
                      <p>1 year</p>
                      <p>Validity</p>
                  </div>

                  <hr />

                    {/* Unfreezing Term */}
                  <div className='flex flex-col gpa-2'>
                      <p>$10</p>
                      <p>Unfreezing Term</p>
                  </div>

                  <hr />

                  <button>Activate</button>
                  
            
                      </div>
                      

                        {/* <!-- Packages 3--> */}
              <div class="flex flex-col gap-8 p-6 mx-auto max-w-lg text-center  bg-[#00247E] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  {/* package name */}
                  <h3 class="mb-4 text-2xl font-semibold">Starter</h3>

                  <hr />

                  {/* Freezing MAX Load */}
                  <div className='flex flex-col gpa-2'>
                      <p>Up to 0.125BTCA</p>
                      <p>Freezing MAX Load</p>
                  </div>

                  <hr />

                   {/* Mining Reward */}
                  <div className='flex flex-col gpa-2'>
                      <p>0.5BTCA</p>
                      <p>Mining Reward per month</p>
                  </div>

                  <hr />


                   {/* Expected Mining */}
                  <div className='flex flex-col gpa-2'>
                      <p>4.8BTCA</p>
                      <p>Expected Mining</p>
                  </div>

                  <hr />

                   {/* Validity */}
                  <div className='flex flex-col gpa-2'>
                      <p>1 year</p>
                      <p>Validity</p>
                  </div>

                  <hr />

                    {/* Unfreezing Term */}
                  <div className='flex flex-col gpa-2'>
                      <p>$10</p>
                      <p>Unfreezing Term</p>
                  </div>

                  <hr />

                  <button>Activate</button>
                  
            
              </div>
           
          
         
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='gray' onClick={() => setViewPackages(false)}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FranchisorPackages