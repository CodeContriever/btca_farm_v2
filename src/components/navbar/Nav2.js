import React from 'react'
import { useState } from "react";



const Nav2 = () => {

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    if (buttonName === activeButton) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  return (

    <nav class="bg-white py-4 px-4">

      {/* Nav Items */}
      <div class="flex flex-wrap justify-between items-center">

        {/* logo */}
        <div class="order-2 lg:order-1 flex justify-start items-center gap-4 lg:gap-8">

          {/* Logo */}
          <a href="/home" class="flex items-center justify-between mr-4">
            <img
              src="/logo.png"
              class="mr-3 h-6 lg:h-8"
              alt="BTCA Logo"
            />

            <span class="self-center text-md lg:text-2xl font-semibold whitespace-nowrap dark:text-white">BTCA_FARM</span>
          </a>

        </div>

        {/* Hamburger menu */}
        <div
          className=" order-1 box-border relative cursor-pointer  transition duration-300 "
          tabIndex="0"
        >
          <button
            onClick={() => handleButtonClick('menu')}
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <span class="sr-only">Toggle sidebar</span>

          </button>

          {activeButton === 'menu' && (
            <div
              class="items-center justify-start lg:hidden  flex  w-[100%] order-1 bg-white"
              id="mobile-menu-2"
              tabIndex="-1"
            >

              <ul
                class="bg-white w-64 absolute top-8 z-10 flex flex-col justify-center p-4 gap-4 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">

                {/* Dashboard */}
                <li>
                  <a href="/dashboard"
                    class="lg:bg-transparent text-[#A020F0] text-md lg:text-base dark:text-white"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </li>

                {/* activation*/}
                <li>
                  <a href="/activation"
                    class="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                  >
                    Activation
                  </a>
                </li>

                {/* license key*/}
                <li>
                  <a href="/license"
                    class="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                  >
                    License key
                  </a>
                </li>

                {/* Wallet*/}
                <li>
                  <a href="/wallet"
                    class="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                  >
                    Wallet
                  </a>
                </li>

                {/* payout*/}
                <li>
                  <a href="/payout"
                    class="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                  >
                    Payout
                  </a>
                </li>

                <hr />

                {/* home*/}
                <li>
                  <a href="/home"
                    class="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                  >Home
                  </a>
                </li>

                {/* signout*/}
                <li>
                  <a href="/signout"
                    class="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                  >
                    Signout
                  </a>
                </li>

              </ul>

            </div>
          )}

        </div>

        {/* Nav items */}
        <div class="hidden w-full md:flex items-center justify-between order-2 md:w-auto " id="nav_items">
          <ul class="flex flex-col mt-4 font-medium md:flex-row lg:space-x-8 md:mt-0">

            {/* Home */}
            <li>
              <a href="/dashboard" class="block py-2 pl-3 pr-4 hover:text-[#A020F0] rounded lg:bg-transparent text-gray-700  lg:p-0 dark:text-white" aria-current="page">Dashboard</a>
            </li>

            {/* Wallet */}
            <li>
              <a href="/wallet" class="block py-2 pl-3 pr-4 hover:text-[#A020F0]  rounded lg:bg-transparent text-gray-700 lg:p-0 dark:text-white" aria-current="page">Wallet</a>
            </li>

            {/* Support */}
            <li>
              <a href="/support" class="block py-2 pl-3 pr-4  hover:text-[#A020F0]  rounded lg:bg-transparent text-gray-700 lg:p-0 dark:text-white" aria-current="page">Support</a>
            </li>

            {/* Statistics */}
            <li>
              <a href="/statistics" class="block py-2 pl-3 pr-4  hover:text-[#A020F0]  rounded lg:bg-transparent text-gray-700 lg:p-0 dark:text-white" aria-current="page">Statistics</a>
            </li>


          </ul>

        </div>

        {/* Notifications, language & Profile */}
        <div class="flex items-center justify-center order-3 lg:order-2 ">

          <div className='flex flex-row lg:gap-8 w-[100%]'>

            {/* <!-- Notifications --> */}
            <div
              class="relative flex flex-col justify-center items-center gap-4"
              tabIndex="0"
            >

              {/* Notification bell */}
              <button
                type="button"
                onClick={() => handleButtonClick('notification')}
                class="inline-flex relative  items-center px-4  py-2.5 text-sm font-medium text-center text-white bg-gray-400 rounded-lg ">

                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z" />
                </svg>


                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">8</div>
              </button>

              {/* <!-- Notification bell dropdowns --> */}
              {activeButton === 'notification' && (
                <div
                  class="w-64 lg:w-90 absolute top-12 right-8 z-10 overflow-hidden  my-4  text-base list-none bg-gray-800 divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                  id="notification-dropdown"
                  tabIndex="-1"
                >

                  <div
                    class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300"
                  >
                    Notifications
                  </div>

                  {/* Notifications */}
                  <div>

                    {/* 1 */}
                    <a
                      href="/1"
                      class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                    >

                      {/* avatar image and sender text */}
                      <div class="flex-shrink-0">

                        <img
                          class="w-11 h-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          alt="Bonnie Green avatar"
                        />

                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                            ></path>
                            <path
                              d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      {/* notification content */}
                      <div class="pl-3 w-full">
                        <div
                          class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                        >
                          New message from
                          <span class="font-semibold text-gray-900 dark:text-white"
                          >Bonnie Green</span
                          >: "Hey, what's up? All set for the presentation?"
                        </div>
                        <div
                          class="text-xs font-medium text-primary-600 dark:text-primary-500"
                        >
                          a few moments ago
                        </div>
                      </div>

                    </a>

                    {/* 2 */}
                    <a
                      href="/2"
                      class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                    >

                      {/* Avatar */}
                      <div class="flex-shrink-0">
                        <img
                          class="w-11 h-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                          alt="Jese Leos avatar"
                        />
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      {/* Notification contents */}
                      <div class="pl-3 w-full">
                        <div
                          class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                        >
                          <span class="font-semibold text-gray-900 dark:text-white"
                          >Jese leos</span
                          >
                          and
                          <span class="font-medium text-gray-900 dark:text-white"
                          >5 others</span
                          >
                          started following you.
                        </div>
                        <div
                          class="text-xs font-medium text-primary-600 dark:text-primary-500"
                        >
                          10 minutes ago
                        </div>
                      </div>

                    </a>

                    {/* 3 */}
                    <a
                      href="/3"
                      class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                    >
                      {/* Avatar */}
                      <div class="flex-shrink-0">
                        <img
                          class="w-11 h-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                          alt="Joseph McFall avatar"
                        />
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      {/* Notification content */}
                      <div class="pl-3 w-full">
                        <div
                          class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                        >
                          <span class="font-semibold text-gray-900 dark:text-white"
                          >Joseph Mcfall</span
                          >
                          and
                          <span class="font-medium text-gray-900 dark:text-white"
                          >141 others</span
                          >
                          love your story. See it and view more stories.
                        </div>
                        <div
                          class="text-xs font-medium text-primary-600 dark:text-primary-500"
                        >
                          44 minutes ago
                        </div>
                      </div>

                    </a>


                  </div>

                  {/* View all notifications */}
                  <a
                    href="/view_all"
                    class="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                  >
                    <div class="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      View all
                    </div>
                  </a>

                </div>
              )}

            </div>

            {/* <!-- Language with dropdowns --> */}
            <div class="relative flex flex-col gap-4">

              {/* Language button */}
              <button
                type="button"
                onClick={() => handleButtonClick('flag')}
                data-dropdown-toggle="apps-dropdown"
                class={`hidden lg:flex p-2  rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${activeButton === 'flag' ? 'bg-gray-800 text-gray-400' : 'text-gray-500'}`}
              >
                <span class="sr-only">View notifications</span>

                {/* <!-- Icon --> */}
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 rounded-full mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 3900 3900"
                >
                  <path fill="#b22234" d="M0 0h7410v3900H0z" />
                  <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    stroke-width="300"
                  />
                  <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                  <g fill="#fff">
                    <g id="d">
                      <g id="c">
                        <g id="e">
                          <g id="b">
                            <path
                              id="a"
                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                            />
                            <use y="420" />
                            <use y="840" />
                            <use y="1260" />
                          </g>
                          <use y="1680" />
                        </g>
                        <use x="247" y="210" />
                      </g>
                      <use x="494" />
                    </g>
                    <use x="988" />
                    <use x="1976" />
                    <use x="2470" />
                  </g>
                </svg>

              </button>

              {/* <!-- language Dropdown items --> */}
              {activeButton === 'flag' && (
                <div
                  class=" w-64 absolute top-12 right-8 z-10 my-4 text-base list-none bg-gray-500 rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  id="language-dropdown"
                >
                  <ul class="py-1" role="none">

                    {/* English */}
                    <li>
                      <a
                        href="/english"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            class="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-us"
                            viewBox="0 0 512 512"
                          >
                            <g fill-rule="evenodd">
                              <g stroke-width="1pt">
                                <path
                                  fill="#bd3d44"
                                  d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                  transform="scale(3.9385)"
                                />
                                <path
                                  fill="#fff"
                                  d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                  transform="scale(3.9385)"
                                />
                              </g>
                              <path
                                fill="#192f5d"
                                d="M0 0h98.8v70H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                transform="scale(3.9385)"
                              />
                            </g>
                          </svg>
                          English (US)
                        </div>
                      </a>
                    </li>

                    {/* Deutsch */}
                    <li>
                      <a
                        href="/Deutsch"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            class="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                          Deutsch
                        </div>
                      </a>
                    </li>

                    {/* Italiano */}
                    <li>
                      <a
                        href="/italiano"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            class="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fill-rule="evenodd" stroke-width="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                            </g>
                          </svg>
                          Italiano
                        </div>
                      </a>
                    </li>

                    {/*  中文 (繁體) */}
                    <li>
                      <a
                        href="/ 中文 (繁體)"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            class="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-cn"
                            viewBox="0 0 512 512"
                          >
                            <defs>
                              <path
                                id="a"
                                fill="#ffde00"
                                d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                              />
                            </defs>
                            <path fill="#de2910" d="M0 0h512v512H0z" />
                            <use
                              width="30"
                              height="20"
                              transform="matrix(76.8 0 0 76.8 128 128)"

                            />
                            <use
                              width="30"
                              height="20"
                              transform="rotate(-121 142.6 -47) scale(25.5827)"

                            />
                            <use
                              width="30"
                              height="20"
                              transform="rotate(-98.1 198 -82) scale(25.6)"

                            />
                            <use
                              width="30"
                              height="20"
                              transform="rotate(-74 272.4 -114) scale(25.6137)"

                            />
                            <use
                              width="30"
                              height="20"
                              transform="matrix(16 -19.968 19.968 16 256 230.4)"

                            />
                          </svg>
                          中文 (繁體)
                        </div>
                      </a>
                    </li>

                  </ul>

                </div>
              )}

            </div>

            {/* User profile menu */}
            <div class="relative flex flex-col justify-center items-center gap-4">

              {/* User profile button */}
              <button
                type="button"
                onClick={() => handleButtonClick('profile')}
                class={`flex mx-3 text-sm bg-gray-800 p-0.5 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${activeButton === 'apps' ? 'text-[#A020F0]' : 'text-gray-500'}`}
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt=""
                />
              </button>

              {/* <!-- User profile menu items--> */}
              {activeButton === 'profile' && (
                <div
                  class=" w-64 absolute top-12 right-20 lg:right-12 z-10 my-4  text-base list-none bg-gray-500 text-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                  id="dropdown"
                >

                  {/* User name and email */}
                  <div class="py-3 px-4">

                    <span
                      class="block text-sm font-semibold text-gray-900 dark:text-white"
                    >Neil Sims</span
                    >
                    <span
                      class="block text-sm text-gray-900 truncate dark:text-white"
                    >name@flowbite.com</span
                    >
                  </div>

                  {/* User account details & settings */}
                  {/*  */}
                  <ul
                    class="py-1 text-gray-700 dark:text-gray-300"
                    aria-labelledby="dropdown"
                  >

                    {/* Profile */}
                    <li>
                      <a
                        href="/profile"
                        class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >My profile</a>
                    </li>

                    {/* Account settings */}
                    <li>
                      <a
                        href="/settings"
                        class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >Account settings</a
                      >
                    </li>

                  </ul>

                  {/* Signout */}
                  <ul
                    class="py-1 text-gray-700 dark:text-gray-300"
                    aria-labelledby="dropdown"
                  >

                    <li>
                      <a
                        href="/signin"
                        class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Sign out</a
                      >
                    </li>

                  </ul>

                </div>
              )}
            </div>

          </div>

        </div>

      </div>

    </nav>

  )
}

export default Nav2