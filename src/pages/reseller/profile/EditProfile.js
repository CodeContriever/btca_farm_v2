import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

import Navbar from '../../../components/franchisor/Navbar';
import Footer from "../../../components/footer/Footer2";
import Input from "../../../components/form/Input"

import { Label, Select } from 'flowbite-react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useSelector } from "react-redux";
import { useDispatch, } from 'react-redux';
import { setResellerProfileData, } from '../../../store/reseller/Profile';

import { selectResellerSignupData } from '../../../store/reseller/Signup';






const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupData = useSelector(selectResellerSignupData);
  const { fullname, phoneNumber } = signupData?.data || {};
  useEffect(() => {
    if (fullname && phoneNumber) {
      setFormData((prevData) => ({
        ...prevData,
        firstName: fullname,
        phoneNumber: phoneNumber,
      }));
    }
  }, [fullname, phoneNumber]);

  const [activeSection, setActiveSection] = useState("form1");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const isForm1Active = activeSection === "form1";

  const handleNext = () => {
    if (isForm1Active) {
      handleSectionChange("form2");
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    handleSectionChange("form1");
  };

  const [date, setDate] = useState(new Date());
  // Function to handle when a day is clicked in the date picker
  const handleDateSelect = (selectedDate) => {
    // Update the selected date in the state
    setDate(selectedDate);
  };
  // Function to handle when the value of the date picker has changed
  const handleDateChange = (selectedDate) => {
    // Check if the selected date is different from the current date in the state
    if (selectedDate !== date) {
      // Update the selected date in the state
      setDate(selectedDate);
    }
  };

  const [formData, setFormData] = useState({
    "dob": "",
    "gender": "",
    "kin_full_name": "",
    "kin_phone": "",
    "kin_address": "",
    "g_full_name": "",
    "g_phone": "",
    "g_address": "",
    "g_user_id": "",
    "address_1": "",
    "address_2": "",
    "landmark": "",
    "city": "",
    "state": "",
    "country": "",
    "means_of_id": "",
    "id_number": "",
    "id_link": "",
    "account_number": "",
    "bank": ""

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async () => {
    try {
      // Send the POST request to the server
      const response = await axios.post(
        "https://api.afribook.world/reseller/applyReseller",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Axios Response:", response);

      if (response.status === 200) {
        // Handle successful submission
        const data = response.data;
        console.log("Data submitted successfully:", data);

        // Dispatch the entire data object to store it in the Redux store
        dispatch(setResellerProfileData(data)); // Dispatch the action

        if (data.success) {
          setSuccessModalVisible(true);

          // Navigate to the franchisor_profile page upon success
          navigate('/reseller/profile'); // Adjust the path as needed
        } else {
          toast.error("An error occurred, please try again later.");
        }
      } else {
        console.error("Error submitting form: Unexpected response status code", response.status);
      }
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error submitting form:", error);
    }
  };






  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const handleCloseSuccessModal = () => {
    setSuccessModalVisible(false); // Close the success modal
  };

  return (

    <div
      className="">

      {/* Header */}
      <header
        className='box-border w-[100%]  py-8 flex justify-center items-center bg-white  sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >

        {/* Wrapper */}
        <div className="container mx-auto px-4">

          <Navbar />

        </div>

      </header>



      <main
        className="bg-[#F9FAFB]"
      >

        {/* Wrapper */}
        <div className="container mx-auto px-4 py-20">

          <div className="">
            <Toaster position='bottom-center' reverseOrder={false}></Toaster>
          </div>

          <div className="grid grid-cols-3 gap-4">


            {/* Franchise form */}
            <div className="col-span-3 w-[100%]">

              <div
                className=''
              >

                {/* section heading */}
                <div className="mb-4">

                  <h1 className="mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6">
                   Reseller
                  </h1>

                </div>

                {isForm1Active ? (

                  <form
                    className='box-border  rounded-md px-8 py-8 bg-white shadow-lg'
                  >

                    {/* Personal infromation  input fields */}
                    <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                      <div class="flex flex-col gap-8 ">

                        {/* Heading */}
                        <div>
                          <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                            Personal Infromation
                          </h3>
                        </div>

                        <div className="flex flex-col gap-8">

                          {/* First Name */}
                          <div className="flex flex-col gap-0.5">

                            <Input
                              type="text"
                              name="firstName"
                              id="firstName"
                              value={fullname}
                              // disable
                              onChange={handleInputChange}
                              label="First Name"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>


                          {/* Phone Number */}
                          <div className="flex flex-col gap-0.5">

                            <Input
                              type="tel"
                              name="phoneNumber"
                              id="phoneNumber"
                              value={phoneNumber}
                              onChange={handleInputChange}
                              label="Phone Number"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/* Gender input field */}
                          <div
                            className="w-full"
                            id="select"
                          >

                            <div className="mb-0.5 block">
                              <Label
                                htmlFor="gender"
                                value="Select your gender"
                              />
                            </div>

                            <Select
                              id="gender"
                              required
                              className=""
                              {...formData.gender}
                            >
                              <option>
                                Male
                              </option>
                              <option>
                                Female
                              </option>
                              <option>
                                I prefer not to say
                              </option>
                            </Select>
                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Address input fields */}
                    <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                      <div class="flex flex-col gap-8">

                        {/* Heading */}
                        <div>
                          <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                            Address
                          </h3>
                        </div>

                        <div className="grid grid-rows-3 gap-8">

                          {/* Address 1 field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="address_1"
                              id="address_1"
                              value={formData.address_1}
                              onChange={handleInputChange}
                              label="Address_1"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/* Address 2 field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="address_2"
                              id="address_2"
                              value={formData.address_2}
                              onChange={handleInputChange}
                              label="Address 2"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/* Landmarkfield */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="landmark"
                              id="landmark"
                              value={formData.landmark}
                              onChange={handleInputChange}
                              label="Landmark"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/* City field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="city"
                              id="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              label="City"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/* State field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="state"
                              id="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              label="State"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/* Country field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="country"
                              id="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              label="Country"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                        </div>

                      </div>
                    </div>

                    {/* Next */}
                    <div
                      class=" flex  flex-col justify-center items-center mt-8"
                    >
                      <button
                        type="text"
                        className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium "
                        onClick={handleNext}
                      >
                        Next
                      </button>

                    </div>


                  </form>

                ) : (
                  <form
                    className='box-border  rounded-md px-8 py-8 bg-white shadow-lg'
                  >

                    {/* Means of identification input fields */}
                    <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                      <div class="flex flex-col gap-8">

                        {/* Heading */}
                        <div>
                          <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                            Means of identification
                          </h3>
                        </div>

                        <div className="flex flex-col gap-8">

                          {/* ID  field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="means_of_id"
                              id="means_of_id"
                              value={formData.means_of_id}
                              onChange={handleInputChange}
                              label="ID"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>


                          {/* ID Number field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="number"
                              name="id_number"
                              id="id_number"
                              value={formData.id_number}
                              onChange={handleInputChange}
                              label="ID Number"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>


                          {/* Date of Birth Field */}
                          <div
                            className="w-full flex flex-col gap-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >

                            <label for="date" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                            >
                              Date of Birth
                            </label>

                            <DatePicker
                              selected={date}
                              onSelect={handleDateSelect} // when day is clicked
                              onChange={handleDateChange} // only when the value has changed
                              name="dob"
                            />

                          </div>

                        </div>

                      </div>

                    </div>


                    {/* Next of kin input fields */}
                    <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                      <div class="flex flex-col gap-8">

                        {/* Heading */}
                        <div>
                          <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                            Next of kin
                          </h3>
                        </div>


                        <div className="flex flex-col gap-8">

                          {/*Next of Kin full name  field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="kin_full_name"
                              id="kin_full_name"
                              value={formData.kin_full_name}
                              onChange={handleInputChange}
                              label="Full Name"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/*Next of Kin fulladdress  field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="kin_address"
                              id="kin_address"
                              value={formData.kin_address}
                              onChange={handleInputChange}
                              label="Adress"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>


                          {/*Next of Kin phone number  field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="tel"
                              name="Kin_phone"
                              id="Kin_phone"
                              value={formData.kin_phone}
                              onChange={handleInputChange}
                              label="Phone Number"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>
                        </div>

                      </div>

                    </div>


                    {/* Guarantor or State director input fields */}
                    <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                      <div class="flex flex-col gap-8">

                        {/* Heading */}
                        <div>
                          <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                            Guarantor / State Director
                          </h3>
                        </div>

                        {/* details input fields */}
                        <div className="flex flex-col gap-8">

                          {/*Guarantor's full name  field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="text"
                              name="g_full_name"
                              id="g_full_name"
                              value={formData.g_full_name}
                              onChange={handleInputChange}
                              label="Full Name"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/*Guarantor's phone number  field */}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="tel"
                              name="g_phone"
                              id="g_phone"
                              value={formData.g_phone}
                              onChange={handleInputChange}
                              label="Phone Number"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>


                          {/*Guarantor's address*/}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="tel"
                              name="g_address"
                              id="g_address"
                              value={formData.g_address}
                              onChange={handleInputChange}
                              label="Address"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                          {/*Guarantor's ID*/}
                          <div className="flex flex-col gap-1">

                            <Input
                              type="number"
                              name="g_user_id"
                              id="g_user_id"
                              value={formData.g_user_id}
                              onChange={handleInputChange}
                              label="ID"
                              required
                              labelClasses="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                              inputClasses="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Back and Submit buttons */}

                    <div
                      class=" flex  flex-row justify-between  mt-8"
                    >

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
                        <button
                          type="submit"
                          className="flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-3 py-2.5  text-white font-medium "
                          onSubmit={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>

                    </div>

                  </form>
                )

                }

              </div>

            </div>

          </div>
        </div>
      </main>

      {/* Success Modal */}
      {successModalVisible && (
        <div
          id="deleteModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleCloseSuccessModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <h2>Success!</h2>
              <p>Your form has been submitted successfully.</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      < footer
        className="p-4 bg-white sm:p-6 dark:bg-gray-800 border-t-2 border-gray-200"
      >
        {/* Wrapper */}
        < div
          className="container mx-auto px-4"
        >

          <Footer />

        </div >

      </footer >


    </div>



  )
}

export default EditProfile