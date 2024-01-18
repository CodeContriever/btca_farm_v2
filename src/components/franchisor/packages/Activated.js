import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector } from "react-redux";
import { selectFranchisorSigninData } from "../../../store/franchisor/Signin";

import toast, { Toaster } from 'react-hot-toast';


const ActivatedPackages = () => {

  const signinData = useSelector(selectFranchisorSigninData);
const userId = signinData?.user?.userId || null;
   const accessToken = signinData?.accessToken || '';

 /* eslint-disable no-unused-vars */
  const [loading, setLoading] = useState(false);
  const [franchisorPackages, setFranchisorPackages] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://api.afribook.world/franchisor/getFranchisorCurrentPackages`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            status: 'Active',
            page: currentPage,
            pageSize: 10,
          },
        }
        );

        if (response.status === 200) {
          const responseData = response.data;
          console.log('franchisor activated packages fetch successful:', responseData);

          if (responseData.data && Array.isArray(responseData.data)) {
            // Check if transactions property exists in responseData.data
            const activatedPackages = responseData.data || [];

           // Filter packages with status "Pending"
            const activePackages = activatedPackages.filter(pkg => pkg.status === 'Active');
            console.log(activePackages)

            setFranchisorPackages(activePackages);
            
          } else {
            console.error('Invalid data format. Expected an array.');
            toast.error('Error: Invalid data format.');
          }

          
        } else {
          console.error('Error fetching franchisor activated packages, please try again later.');
          toast.error('Error fetching packages, please try again later.');
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
        toast.error('Error, please check your connection');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, currentPage, accessToken]);

  return (
    <div className="container mx-auto px-6">

        <div className="">
          <Toaster position='top-center' reverseOrder={false}></Toaster>
      </div>
      
      <div>
        <h1 className="text-gray-800 text-xl font-medium font-inter leading-6"> Activated Packages</h1>

        <div className="bg-white rounded-md shadow-lg p-4 mt-4">

          {franchisorPackages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">  No activated packages available, please subscribe.</p>
          ) : (
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0 lg:space-x-2">
              {franchisorPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  {/* <h3 className="mb-2 text-2xl font-semibold">{pkg.packageName}</h3> */}
                {/* <p>Description: {pkg.description}</p> */}
                  <p>From: {pkg.boughtFrom}</p>
                      <p>Buying Price: ${pkg.buyingPrice}</p>
                  <p>Minned: {pkg.minned}</p>
                    <p>Total Reward: {pkg.totalReward}</p>
                <p>Withdrawn: {pkg.withdrawn}</p>
              
                {/* <p>Status: {pkg.status}</p> */}
                {/* <p>Duration: {pkg.duration} days</p> */}
               
                <button
  className="bg-white p-2 rounded-md text-black"
  disabled
>
 {pkg.status}
</button>

                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">

             <div className="flex items-center space-x-4">

             <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Prev
              </button>
{/*             
            <div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white mx-2">{1 + (currentPage - 1) * 10}</span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">{franchisorPackages.length}</span>
            </span>
            </div> */}
             
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={franchisorPackages.length < 10}
                className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Next
              </button>
            </div>

          </nav>

        </div>

      </div>

    </div>
  );
};

export default ActivatedPackages;
