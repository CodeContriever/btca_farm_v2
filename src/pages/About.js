import React from "react";
import { Link } from "react-router-dom";
import Nav1 from "../components/navbar/Nav1";
import Footer2 from "../components/footer/Footer2"
import TechCarousel from "../components/carousels/TechCarousel";
import StepperIcon from "../components/stepper/StepperIcon"
import StepText from "../components/stepper/StepText"
import MockupImage1 from "../components/mockups/MockupImage1";
import FeatureSection from "../components/FeatureSection";






const About = () => {
  const getBackgroundImage = () => {
    if (window.innerWidth < 768) {  // Small screens
      return 'url(bg_btca-6.jpg)';
    } else if (window.innerWidth < 1024) {  // Medium screens
      return 'url(bg_btca-9.jpg)';
    } else {  // Large screens
      return 'url(bg_btca-6.jpg)';
    }
  };

  return (
    <div
      className="">

      <header
        className='box-border w-[100%]  py-8 flex justify-center items-center bg-[#F9FAFB] sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >

        {/* Wrapper */}
        <div className="container mx-auto px-4">

          <Nav1 />

        </div>

      </header>

      <main
        className="bg-[#F9FAFB]"
      >

        {/* Hero section */}
        <section
          className="bg-[#F9FAFB] dark:bg-gray-900 py-24 md:py-48"
          style={{
            backgroundImage: getBackgroundImage(),
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div className="flex flex-row items-center justify-between">

              <div className=" ">
                {/* Hero heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#A020F0] tracking-tight leading-none  dark:text-white">Bitcoin Africa
                  <span className="block max-w-2xl text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                  >
                    the internet of blockchain giving wealth back to people
                  </span>
                </h1>

                {/* Hero descroption */}
                <p className="max-w-2xl mb-6 font-medium text-white mt-8 lg:mb-8 text-base sm:text-lg md:text-xl lg:text-md leading-7 dark:text-gray-400">Bitcoin Africa incorporates the best of blockchain technology in easy to use application to enables you to freely exchange assets, data and create wealth</p>

                {/* CTA  */}
                <div className="space-x-8">

                  <Link
                    className='px-5 py-2 text-base font-medium text-center text-white rounded-lg bg-[#A020F0]'
                  >
                    Whitepaper
                  </Link>

                  <Link className='px-5 py-2  text-base font-medium text-center text-white border border-gray-300 rounded-lg '
                  >
                    Play Video
                  </Link>

                </div>

              </div>

              {/* Hero image */}
              <div class="hidden lg:flex items-center justify-center">
                <img
                  src="logo.png"
                  alt="BTCA logo"
                  className="max-w-md"
                />
              </div>

            </div>

          </div>

        </section>

        {/* What is Bitcoin Farm*/}
        <section className="bg-[#F9FAFB] dark:bg-gray-900">

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div class="py-8 mx-auto max-w-screen-xl md:py-16 md:px-12">

              {/*  heading */}
              <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white text-center"
              >
                What is BITCOIN FARM
              </h1>

              {/* Hero desc */}
              <p class="mb-8 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7  text-gray-500  text-justify md:text-center  dark:text-gray-400 max-w-2xl md:max-w-full">Bitcoin Africa is an ever-expanding ecosystem of interconnected apps and services, built for a decentralized future. Bitcoin Africa, (BTCA), is the world’s first decentralised peer-to-peer digital currency and micro payment system designed for the Afro-Descendant community.  Bitcoin Africa (BTCA) will help Africans to build, transfer and retain wealth. And this innovation enables you to freely exchange assets and data across sovereign, decentralized blockchain.</p>

            </div>

          </div>

        </section>


        {/* BTCA Farm section */}
        <section
          className="bg-[#F9FAFB] dark:bg-gray-900 py-20"
          style={{
            backgroundImage: "url(bg_btca-8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div
              className="flex flex-row items-center justify-between"
            >

              {/* Texts, description and CTA  */}
              <div className=" ">

                {/* Heading */}
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none  text-[#A020F0] dark:text-white"
                >
                  BTCA Farm
                </h1>

                {/* Description */}
                <p class="max-w-5xl mb-6 text-white mt-8 md:mb-8 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 dark:text-gray-400">
                  Is an app for BTCA Coins mining using smart contracts. It allows you to secure mining opportunities by simply freezing coins in your FARM wallet. It uses the power of blockchain to give access to the global digital economy for millions of people in the emerging economies.
                </p>

                {/* CTA  */}
                <div className="flex items-center space-x-4">
                  {/* Play Store Button */}
                  <Link
                    to={'https://play.google.com/store/apps/details?id=your_app_package_name'}
                    className=" font-bold text-blue-500  transition duration-300"
                  >
                    <img
                      className="w-28 lg:w-52"
                      src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                      alt="Play Store Logo"
                    />
                    {/* Download on Play Store */}
                  </Link>

                  {/* Apple Store Button */}
                  <Link
                    to={'https://apps.apple.com/app/your_app_id'}
                    className="flex  transition duration-300"

                  >
                    <img
                      className="w-24 lg:w-48"
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                      alt="Apple Store Logo"
                    />
                    {/* Download on Apple Store */}
                  </Link>
                </div>

              </div>

              {/* image */}
              <div className="hidden lg:flex items-center justify-center">
                <img
                  src="btca_hand.svg"
                  alt="BTCA logo"
                // className="w-64 h-64"
                />
              </div>

            </div>

          </div>

        </section>


        {/* Feature section */}
        <section className="">
          <FeatureSection />
        </section>



        {/*How do I start earning section */}
        <section
          className="bg-[#F9FAFB] dark:bg-gray-900 py-20"
          style={{
            backgroundImage: "url(bg_btca-8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            {/* Heading */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl md:text-center md:py-16 lg:px-12">

              <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white text-center"
              >
                How Do I Start Earning With BTCA Farm
              </h1>

            </div>

            {/* Mockup & stepper */}
            <div className="flex justify-center items-center">

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Stepper 1 */}
                <div className="flex flex-col gap-12">

                  {/* Step 1 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="one.svg" imageAlt="one" />

                    <StepText heading="Register on the website" textColor="text-white" />

                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="two.svg" imageAlt="one" />

                    <StepText heading="Download BTCA wallet and Farm" textColor="text-white" />
                  </div>


                  {/* Step 3 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="three.svg" imageAlt="one" />

                    <StepText heading="Activate your mining space" textColor="text-white" />
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="four.svg" imageAlt="one"
                      customStyles={{ width: '60px', height: '60px', }}
                    />

                    <StepText heading="Send your coins to Farm App for mining" textColor="text-white" />
                  </div>

                  {/* Step 5 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="five.svg" imageAlt="one" customStyles={{ width: '120px', height: '60px', }}
                    />

                    <StepText heading="New coins can be mined 24/7 and sent to your main wallet, where you can spend them" textColor="text-white" />
                  </div>

                </div>

                {/* Mockup */}
                <div className="flex justify-center">
                  <MockupImage1 lightImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" darkImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" />
                </div>


                {/* Stepper 2 */}
                <div className="flex flex-col gap-12">

                  {/* Step 1 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="one.svg" imageAlt="one" />

                    <StepText heading="Step1" content="After installation, log in to the Ultima Farm;" textColor="text-white" />

                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="two.svg" imageAlt="one" />

                    <StepText heading="Step2" content="Create a Farm Wallet and send coins to it;" textColor="text-white" />

                  </div>


                  {/* Step 3 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="three.svg" imageAlt="one" />

                    <StepText heading="Step3" content="Enter into a smart contract;" textColor="text-white" />

                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="four.svg" imageAlt="one" customStyles={{ width: '80px', height: '60px', }}
                    />

                    <StepText heading="Step4" content="Coins will be mined to your wallet every month in equal amounts!" textColor="text-white" />

                  </div>

                </div>



              </div>

            </div>

          </div>

        </section>


        {/* APPS */}
        <section
          className="bg-[#F9FAFB] dark:bg-gray-900 py-20"

        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

              {/* heading */}
              <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white"
              >
                APPS
              </h1>

            </div>

            {/* Mockup & stepper */}
            <div className="flex justify-center items-center">

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                {/* Stepper 1 */}
                <div className="flex flex-col gap-12">

                  {/* BTCA WALLET */}
                  <div className="flex flex-row gap-8">

                    <div className="flex flex-col">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        BTCA
                      </h2>

                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        WALLET
                      </h2>
                    </div>

                    <img src="logo.png" alt="Farm_logo" className="w-12 h-12" />
                  </div>

                  {/* Step 1 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="one-v2.svg" imageAlt="one" />

                    <StepText heading="Easy" content="Easy and simple, with full control of your BTCA." />

                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="two-v2.svg" imageAlt="one" />

                    <StepText heading="Safe" content="The Private Key is only stored on your smartphone." />

                  </div>


                  {/* Step 3 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon
                      imageSrc="three-v2.svg"
                      imageAlt="one"
                      customStyles={{ width: '120px', height: '60px', }}
                    />

                    <StepText heading="Functional" content="Receive, send, store BTCA. Can be integrated in the application and the BTCA Farm and stores all mined coins." />

                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="four-v2.svg" imageAlt="one" />

                    <StepText heading="Transaction" content="Unprecedented level of security to date" />

                  </div>

                </div>

                {/* Mockup */}
                <div className="flex justify-center">
                  <MockupImage1 lightImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" darkImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" />
                </div>


                {/* Stepper 2 */}
                <div className="flex flex-col gap-12">

                  {/* BTCA FARM */}
                  <div className="flex flex-row gap-8">

                    <div className="flex flex-col">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        BTCA
                      </h2>

                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        FARM
                      </h2>
                    </div>

                    <img src="logo.png" alt="Farm_logo" className="w-12 h-12" />
                  </div>

                  {/* Step 1 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="one-v2.svg" imageAlt="one" customStyles={{ width: '120px', height: '60px', }}
                    />

                    <StepText heading="Safe" content="Secure and non-standard encryption of the Private Key and storing the encrypted data on your smartphone." />

                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon imageSrc="two-v2.svg" imageAlt="one" customStyles={{ width: '120px', height: '60px', }}
                    />

                    <StepText heading="Personal" content="Turn your smartphone into your efficient and ergonomic farm that brings you the most value!" />

                  </div>


                  {/* Step 3 */}
                  <div className="flex flex-row gap-4">

                    <StepperIcon
                      imageSrc="three-v2.svg"
                      imageAlt="one"
                      customStyles={{ width: '120px', height: '60px', }}
                    />

                    <StepText heading="Autonomous" content="The App can run without your participation, mining new BTCA for you. Link to download." />

                  </div>

                </div>



              </div>

            </div>


          </div>

        </section>

        {/*SEE EXPLORER*/}
        <section
          className="bg-[#4173a3] dark:bg-gray-900 py-20"
          style={{
            backgroundImage: "url(bg_btca-8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            {/* Heading */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

              {/* Heading */}
              <h1 className="mb-4  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white"
              >
                SEE EXPLORER
              </h1>

              <h3 className="mb-8 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-none text-gray-700 dark:text-white">
                OUR TECHNOLOGY
              </h3>

            </div>

            {/* Tecnologies */}
            <TechCarousel />



          </div>

        </section>



        {/*Ecosystem*/}
        <section
          className="bg-[#F9FAFB] dark:bg-gray-900 py-20"
          style={{
            // backgroundImage: "url(bg_btca-8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            {/* Heading */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

              <h1 className="mb-4  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white"
              >
                Ecosystem
              </h1>


            </div>

            {/* Ecosystem image */}
            <div className="flex items-center justify-center">
              <img
                src="Ecosystem.png"
                alt="BTCA logo"
              // className="max-w-md"
              />
            </div>


          </div>

        </section>


      </main>


      {/* Footer */}
      <footer
        className="p-4 bg-white sm:p-6 dark:bg-gray-800 border-t-2 border-gray-200"
      >
        {/* Wrapper */}
        <div
          className="container mx-auto px-6"
        >

          <Footer2 />

        </div>

      </footer >

    </div >
  )
}

export default About

