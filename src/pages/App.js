import React from 'react';
import { Routes, Route, } from "react-router-dom"


// import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyOTP from "./pages/VerifyOTP";
import Signin from "./pages/Signin";
import Reset from "./pages/Reset";
import Recovery from "./pages/Recovery";
import NotFoundPage from "./pages/NotFoundPage";
import AccessDeniedPage from "./pages/AccessDeniedPage";
// import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import FranchisorProfile from './pages/profiles/Franchisor';
import Dashboard from "./pages/Dashboard";
import Activation from "./pages/Activation";
import License from "./pages/License";
import Support from "./pages/Support";
import Wallet from "./pages/Wallet";
import Withdrawal from "./pages/Withdrawal";
// import Franchisor from "./pages/Franchisor";
import Franchisor from './pages/franchisor/index'
import Reseller from "./pages/Reseller";
import Applications from "./pages/Applications";
import Statistics from './pages/Statistics';
import Role from './pages/Role';

import AdminDashboard from "./pages/AdminDashboard";

import { AuthProvider } from './utils/auth';
import RequireAuth from './utils/RequireAuth';

// import { RegistrationDataProvider } from './contexts/RegistrationDataContext'
import { Provider } from 'react-redux';
import store from './store';


import Test from './pages/Test';



const App = () => {
  return (
    <div>
      <AuthProvider >

        {/* <RegistrationDataProvider> */}
        <Provider store={store}>

          <Routes>
            <Route exact path='/' element={< AboutUs />} />
            <Route exact path='/about' element={< AboutUs />} />
            <Route exact path='/statistics' element={< Statistics />} />
            < Route path='/signup' element={< Signup />} />
            < Route path='/verify_email' element={< VerifyEmail />} />
            < Route path='/verify_OTP' element={< VerifyOTP />} />
            < Route path='/role' element={< Role />} />
            < Route path='/signin' element={< Signin />} />
            < Route path='/reset' element={< Reset />} />
            < Route path='/recovery' element={< Recovery />} />
            < Route path="*" element={< NotFoundPage />} />
            < Route path="/access-denied" element={< AccessDeniedPage />} />


            < Route element={<RequireAuth>< AboutUs /></RequireAuth>} path="/home" />
            < Route element={<RequireAuth>< Profile /></RequireAuth>} path="/profile" />
            <Route element={<Dashboard />} path="/dashboard" />
            < Route path='/activation' element={< Activation />} />
            < Route path='/license' element={< License />} />
            < Route path='/support' element={< Support />} />
            < Route path='/wallet' element={< Wallet />} />
            < Route path='/withdrawal' element={< Withdrawal />} />
            {/* < Route path='/franchise' element={< Franchise />} /> */}
            {/* < Route path='/reseller' element={< Reseller />} /> */}
            < Route path='/applications' element={< Applications />} />
            < Route path='/test' element={< Test />} />

            <Route
              element={
                <RequireAuth
                  requiredRoles={['superadmin', 'admin']}>
                  <AdminDashboard />
                </RequireAuth>
              }
              path="/admin_dashboard"
            />

            <Route
              element={
                <Franchisor />
              }
              // element={
              //   <RequireAuth
              //     requiredRoles={['franchise']}>
              //     <Franchise />
              //   </RequireAuth>
              // }
              path="/franchisor"
            />

            <Route
              element={
                <FranchisorProfile />
              }
              // element={
              //   <RequireAuth
              //     requiredRoles={['franchise']}>
              //     <Franchise />
              //   </RequireAuth>
              // }
              path="/franchisor_profile"
            />

            <Route
              element={
                <Reseller />
              }
              // element={
              //   <RequireAuth
              //     requiredRoles={['reseller']}>
              //     <Reseller />
              //   </RequireAuth>
              // }
              path="/reseller"
            />


          </Routes>

        </Provider>

        {/* </RegistrationDataProvider> */}

      </AuthProvider>

    </div>

  )
}

export default App