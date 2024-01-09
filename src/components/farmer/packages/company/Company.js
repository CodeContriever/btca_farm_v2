// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import toast, { Toaster } from 'react-hot-toast';
// import { Button, Modal } from 'flowbite-react';
// import { selectFarmerSigninData } from '../../../../store/farmer/Signin';

// const Company = () => {
//   const signinData = useSelector(selectFarmerSigninData);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [farmerPackages, setFarmerPackages] = useState([]);
//   const [selectedPackageId, setSelectedPackageId] = useState('');
//   const [inputValue, setInputValue] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [modalInputValue, setModalInputValue] = useState('');

//   const packagesPerPage = 10;
//   const startIndex = (currentPage - 1) * packagesPerPage;
//   const endIndex = startIndex + packagesPerPage;
//   const visiblePackages = farmerPackages.slice(startIndex, endIndex);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       const accessToken = signinData?.accessToken || '';
//       try {
//         const response = await axios.get('https://api.afribook.world/package/getPackages/', {
//           headers: { Authorization: `Bearer ${accessToken}` },
//           params: { page: currentPage, pageSize: packagesPerPage },
//         });

//         if (response.status === 200) {
//           const { success, data } = response.data;
//           if (success && Array.isArray(data)) {
//             setFarmerPackages(data);
//           } else {
//             console.error('Invalid data format. Expected an array.');
//           }
//         } else {
//           console.error('Error fetching packages, please try again later.');
//           toast.error('Packages are not available, please try again later.');
//         }
//       } catch (error) {
//         console.error('Error fetching user packages:', error);
//         toast.error('Error, please check your connection');
//       }
//     };

//     fetchPackages();
//   }, [signinData, currentPage]);

//   const handleActivatePackage = async (pkg) => {
//     const accessToken = signinData?.accessToken || '';
//     let endpoint, data;

//     if (pkg.packageId.startsWith('company')) {
//       endpoint = 'https://api.afribook.world/subscription/subscribeToAPackage';
//       data = { packageId: pkg.packageId.replace('company', '') };

//       try {
//         const response = await axios.post(endpoint, data, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         if (response.data.success) {
//           console.log(`Package ${pkg.packageId} activated:`, response.data);
//           setFarmerPackages((prevPackages) =>
//             prevPackages.map((prevPkg) =>
//               prevPkg.packageId === pkg.packageId ? { ...prevPkg, status: 'Activated' } : prevPkg
//             )
//           );
//         } else {
//           console.error(`Failed to activate package ${pkg.packageId}:`, response.data.error);
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         console.error(`Error activating package ${pkg.packageId}:`, error);
//         toast.error('Error activating package. Please try again.');
//       }
//     } else if (pkg.packageId.startsWith('franchisor') || pkg.packageId.startsWith('reseller')) {
//       setSelectedPackageId(pkg.packageId);
//       setOpenModal(true);
//     } else {
//       toast.error('Invalid package type selected.');
//     }
//   };

//   const handleActivatePackageInModal = async () => {
//     if (!modalInputValue) {
//       toast.error('Please enter FPI or RPI.');
//       return;
//     }

//     const isFranchisor = selectedPackageId.startsWith('franchisor');
//     const isReseller = selectedPackageId.startsWith('reseller');

//     const endpoint = isFranchisor
//       ? 'https://api.afribook.world/subscription/subscribeToAPackageFromFranchisorPackages'
//       : 'https://api.afribook.world/subscription/subscribeToAPackageFromResellerPackages';

//     const data = {
//       packageId: selectedPackageId.replace('franchisor', '').replace('reseller', ''),
//       fpi: isFranchisor ? modalInputValue : undefined,
//       rpi: isReseller ? modalInputValue : undefined,
//     };

//     try {
//       const response = await axios.post(endpoint, data, {
//         headers: { Authorization: `Bearer ${signinData?.accessToken || ''}` },
//       });

//       if (response.data.success) {
//         console.log(`Package ${selectedPackageId} activated:`, response.data);
//         setFarmerPackages((prevPackages) =>
//           prevPackages.map((prevPkg) =>
//             prevPkg.packageId === selectedPackageId ? { ...prevPkg, status: 'Activated' } : prevPkg
//           )
//         );
//         setOpenModal(false);
//       } else {
//         console.error(`Failed to activate package ${selectedPackageId}:`, response.data.error);
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(`Error activating package ${selectedPackageId}:`, error);
//       toast.error('Error activating package. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto px-6">
//       <div className="">
//         <Toaster position="top-center" reverseOrder={false}></Toaster>
//       </div>
//       <div>
//         <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">Packages</h1>
//         <div className="bg-white rounded-md shadow-lg p-4 mt-4">
//           {Array.isArray(visiblePackages) && visiblePackages.length > 0 ? (
//             visiblePackages.map((pkg, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col gap-4 p-4 mx-auto max-w-lg text-center bg-[#A020F0] text-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
//               >
//                 <h3 className="mb-2 text-2xl font-semibold">{pkg.packageName}</h3>
//                 <p>Description: {pkg.description}</p>
//                 <p>Price: {pkg.price}</p>
//                 <p>Initial Reward: {pkg.initialReward}</p>
//                 <p>Monthly Reward: {pkg.monthlyReward}</p>
//                 <p>Yearly Reward: {pkg.yearlyReward}</p>
//                 <p>Status: {pkg.status}</p>
//                 <p>Duration: {pkg.duration} days</p>
//                 <hr />
//                 {pkg.status === 'Activated' ? (
//                   <button className="bg-gray-500 p-2 rounded-md text-white" disabled>
//                     Activated
//                   </button>
//                 ) : (
//                   <div className="flex gap-2">
//                     <select
//                       value={selectedPackageId}
//                       onChange={(e) => setSelectedPackageId(e.target.value)}
//                       className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     >
//                       <option value="" disabled>
//                         Activate
//                       </option>
//                       <option value={`company${pkg.packageId}`}>Buy from Company</option>
//                       <option value={`franchisor${pkg.packageId}`}>Buy from Franchisor</option>
//                       <option value={`reseller${pkg.packageId}`}>Buy from Reseller</option>
//                     </select>
//                     {selectedPackageId && (
//                       <div>
//                         <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
//                           <Modal.Header>Activate Package</Modal.Header>
//                           <Modal.Body>
//                             <input
//                               type="text"
//                               placeholder="Enter FPI or RPI"
//                               value={modalInputValue}
//                               onChange={(e) => setModalInputValue(e.target.value)}
//                               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                             />
//                           </Modal.Body>
//                           <Modal.Footer>
//                             <Button onClick={handleActivatePackageInModal}>
//                               Activate Package
//                             </Button>
//                             <Button color="gray" onClick={() => setOpenModal(false)}>
//                               Cancel
//                             </Button>
//                           </Modal.Footer>
//                         </Modal>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <div>
//               {farmerPackages && farmerPackages.length === 0
//                 ? 'No packages available'
//                 : 'Loading...'}
//             </div>
//           )}
//           <nav
//             className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
//             aria-label="Table navigation"
//           >
//             <div className="flex items-center space-x-1">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//               >
//                 Prev
//               </button>
//               <div>
//                 {farmerPackages.length > 0 && (
//                   <span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
//                     Showing
//                     <span className="font-semibold text-gray-900 dark:text-white mx-2">
//                       {1 + startIndex}
//                     </span>
//                     to
//                     <span className="font-semibold text-gray-900 dark:text-white mx-2">
//                       {Math.min(farmerPackages.length, endIndex)}
//                     </span>
//                     of
//                     <span className="font-semibold text-gray-900 dark:text-white mx-2">
//                       {farmerPackages.length}
//                     </span>
//                   </span>
//                 )}
//               </div>
//               <button
//                 onClick={() => setCurrentPage((prev) => prev + 1)}
//                 disabled={farmerPackages.length <= endIndex}
//                 className="px-3 py-1 border rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//               >
//                 Next
//               </button>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Company;
