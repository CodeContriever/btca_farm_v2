import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { selectFarmerSigninData } from "../../../store/farmer/Signin";

const Profile = () => {
    const signinData = useSelector(selectFarmerSigninData);
  const accessToken = signinData?.accessToken || '';
  
  const [farmerData, setFarmerData] = useState({});
  const [activeSection, setActiveSection] = useState('form1');

    // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const isForm1Active = activeSection === 'form1';

  const handleNext = () => {
    if (isForm1Active) {
      handleSectionChange('form2');
    } else {
      // Handle form submission (add handleSubmit() function)
    }
  };

  const handleBack = () => {
    handleSectionChange('form1');
  };

  useEffect(() => {
    const fetchFarmerProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.afribook.world/reseller/getResellerProfile', {
          headers: {
         Authorization: `Bearer ${accessToken}`,
          },
        });
        setFarmerData(response.data);
      } catch (error) {
        console.error('Error fetching reseller profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFarmerProfile();
  }, [accessToken]); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="">
      <div className="">
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">Profile</h1>

        <div className="bg-white rounded-md shadow-lg p-4 mt-4">
          {isForm1Active ? (
            <div className='box-border  rounded-md px-8 py-8 bg-white shadow-lg'>
              {/* Personal Information Section  */}
              <section className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">
                {/* Section Title */}
                <div>
                  <h3 className="text-gray-800 text-lg font-medium leading-6">Personal Information</h3>
                </div>
                {/* Section data */}
                <div className="flex flex-col gap-8">
                  {/* First Name */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>First Name:</strong> {farmerData.firstName}
                    </p>
                  </div>
                  {/* Phone Number */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>Phone Number:</strong> {farmerData.phoneNumber}
                    </p>
                  </div>
                  {/* Date of birth */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>Date of Birth:</strong> {farmerData.dob}
                    </p>
                  </div>
                  {/* Gender */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>Gender:</strong> {farmerData.gender}
                    </p>
                  </div>
                </div>
              </section>

              {/* Address Section  */}
              <section className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">
                {/* Section Title */}
                <div>
                  <h3 className="text-gray-800 text-lg font-medium leading-6">Address</h3>
                </div>
                {/* Section data */}
                <div className="flex flex-col gap-8">
                  {/* Address 1 */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>Address 1:</strong> {farmerData.address_1}
                    </p>
                  </div>
                  {/* Address 2 */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>Address 2:</strong> {farmerData.address_2}
                    </p>
                  </div>
                  {/* Landmark */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>Landmark:</strong> {farmerData.landmark}
                    </p>
                  </div>
                  {/* City */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>City:</strong> {farmerData.city}
                    </p>
                  </div>
                  {/* State */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>State:</strong> {farmerData.state}
                    </p>
                  </div>
                  {/* Country */}
                  <div>
                    <p className="flex flex-col gap-0.5">
                      <strong>Country:</strong> {farmerData.country}
                    </p>
                  </div>
                </div>
              </section>

              {/* Next */}
              <div class="flex flex-col justify-center items-center mt-8">
                <button
                  type="text"
                  className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium "
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
           ) : (
                <div className='box-border  rounded-md px-8 py-8 bg-white shadow-lg'>
                  {/* Means of Identification Section  */}
                  <section className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">
                    {/* Section Title */}
                    <div>
                      <h3 className="text-gray-800 text-lg font-medium leading-6">Means of Identification</h3>
                    </div>
                    {/* Section data */}
                    <div className="flex flex-col gap-8">
                      {/* ID type */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>Means of Identification:</strong> {farmerData.means_of_id}
                        </p>
                      </div>
                      {/* ID Number */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>ID Number:</strong> {farmerData.id_number}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Next of kin Section  */}
                  <section className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">
                    {/* Section Title */}
                    <div>
                      <h3 className="text-gray-800 text-lg font-medium leading-6">Next of Kin</h3>
                    </div>
                    {/* Section data */}
                    <div className="flex flex-col gap-8">
                      {/* Next of kin full name */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>Full Name:</strong> {farmerData.kin_full_name}
                        </p>
                      </div>
                      {/* Next of kin phone number */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>Phone Number:</strong> {farmerData.kin_phone}
                        </p>
                      </div>
                      {/* Next of Kin Address */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>Address:</strong> {farmerData.kin_address}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Guarantor Section  */}
                  <section className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">
                    {/* Section Title */}
                    <div>
                      <h3 className="text-gray-800 text-lg font-medium leading-6">Guarantor</h3>
                    </div>
                    {/* Section data */}
                    <div className="flex flex-col gap-8">
                      {/* Guarantor full name */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>Full Name:</strong> {farmerData.g_full_name}
                        </p>
                      </div>
                      {/* Guarantor ID */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>ID:</strong> {farmerData.g_user_id}
                        </p>
                      </div>
                      {/* Guarantor phone number */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>Phone Number:</strong> {farmerData.g_phone}
                        </p>
                      </div>
                      {/* Guarantor Address */}
                      <div>
                        <p className="flex flex-col gap-0.5">
                          <strong>Address:</strong> {farmerData.g_address}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Back and Edit buttons */}
                  <div class="flex flex-row justify-between mt-8">
                    <div>
                      <button
                        type="text"
                        className="flex justify-center items-center text-base text-black font-medium focus:outline-none px-3 py-2.5"
                        style={{ border: "none", outline: "none" }}
                        onClick={handleBack}
                      >
                        Back
                      </button>
                  </div>
                  
                    <div>
                      <Link
                        to="/farmer/edit_profile"
                        className="flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-3 py-2.5 text-white font-medium "
                      >
                        Edit Profile
                      </Link>
                  </div>
                  
                </div>
                
                </div>
              )}
            </div>
          </div>
        </div>
      );
};
      


export default Profile;
