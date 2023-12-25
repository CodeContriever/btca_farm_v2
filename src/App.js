// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './utils/auth';

import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import AccessDeniedPage from './pages/AccessDeniedPage';
// import Signup from './pages/auth/Signup';
// import Signin from './pages/auth/Signin';
// import VerifyOTP from './pages/auth/VerifyOTP';
// import Role from './pages/auth/Role';
// import Reset from './pages/auth/Reset';


import FarmerSignup from './pages/farmer/auth/Signup'
import FarmerVerifyOTP from './pages/farmer/auth/VerifyOTP'
import FarmerSignin from './pages/farmer/auth/Signin'
import FarmerRole from './pages/farmer/auth/Role'
import FarmerResetPassword from './pages/farmer/auth/Reset'
import FarmerDashbaord from './pages/farmer/dashboard'
import EditFarmerProfile from './pages/farmer/profile/EditProfile';

import FranchisorSignup from './pages/franchisor/auth/Signup'
import FranchisorVerifyOTP from './pages/franchisor/auth/VerifyOTP'
import FranchisorSignin from './pages/franchisor/auth/Signin'
import FranchisorRole from './pages/franchisor/auth/Role'
import FranchisorResetPassword from './pages/franchisor/auth/Reset'
import FranchisorDashboard from './pages/franchisor/dashboard';
import EditFranchisorProfile from './pages/franchisor/profile/EditProfile';

import ResellerSignup from './pages/reseller/auth/Signup'
import ResellerVerifyOTP from './pages/reseller/auth/VerifyOTP'
import ResellerSignin from './pages/reseller/auth/Signin'
import ResellerRole from './pages/reseller/auth/Role'
import ResellerResetPassword from './pages/reseller/auth/Reset'
import ResellerDashboard from './pages/reseller/dashbaord';
import EditResellerProfile from './pages/reseller/profile/EditProfile';

import Admin from './pages/admin/dashboard';
import AdminSignup from './pages/admin/auth/Signup'
import AdminSignin from './pages/admin/auth/Signin'
import AdminVerifyOTP from './pages/admin/auth/VerifyOTP'
import AdminResetPassword from './pages/admin/auth/Reset'

import SuperAdmin from './pages/superAdmin/dashboard';
import SuperAdminSignup from './pages/superAdmin/auth/Signup'
import SuperAdminSignin from './pages/superAdmin/auth/Signin'
import SuperAdminVerifyOTP from './pages/superAdmin/auth/VerifyOTP'
import SuperAdminResetPassword from './pages/superAdmin/auth/Reset'


const App = () => {
  return (
    <div>
      <AuthProvider>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route path="access-denied" element={<AccessDeniedPage />} />
              {/* <Route path="/signup" element={<Signup />} />
              <Route path="/verify_OTP" element={<VerifyOTP />} />
              <Route path="/role" element={<Role />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/reset" element={<Reset />} /> */}

                 <Route path="/farmer/signup" element={<FarmerSignup />} />
              <Route path="/farmer/verify_OTP" element={<FarmerVerifyOTP />} />
              <Route path="/farmer/signin" element={<FarmerSignin />} />
                <Route path="/farmer/role" element={<FarmerRole />} />
                 <Route path="/farmer/reset_password" element={<FarmerResetPassword />} />

               {/* Catch-all route for /farmer and its children */}
              <Route
                path="/farmer/*"
                element={<Navigate to="/farmer/dashboard" replace />}
              />
              <Route path="/farmer/dashboard" element={<FarmerDashbaord />} />
              <Route path="/farmer/edit_profile" element={<EditFarmerProfile />} />

              

              <Route path="/franchisor/signup" element={<FranchisorSignup />} />
              <Route path="/franchisor/verify_OTP" element={<FranchisorVerifyOTP />} />
              <Route path="/franchisor/signin" element={<FranchisorSignin />} />
                <Route path="/franchisor/role" element={<FranchisorRole />} />
                 <Route path="/franchisor/reset_password" element={<FranchisorResetPassword />} />

              {/* Catch-all route for /franchisor and its children */}
              <Route
                path="/franchisor/*"
                element={<Navigate to="/franchisor/dashboard" replace />}
              />
              <Route path="/franchisor/dashboard" element={<FranchisorDashboard />} />
              <Route path="/franchisor/edit_profile" element={<EditFranchisorProfile />} />



               <Route path="/reseller/signup" element={<ResellerSignup />} />
              <Route path="/reseller/verify_OTP" element={<ResellerVerifyOTP />} />
              <Route path="/reseller/signin" element={<ResellerSignin />} />
                <Route path="/reseller/role" element={<ResellerRole />} />
              <Route path="/reseller/reset_password" element={<ResellerResetPassword />} />
              
              {/* Catch-all route for /reseller and its children */}
              <Route
                path="/reseller/*"
                element={<Navigate to="/reseller/dashboard" replace />}
              />

              <Route path="/reseller/dashboard" element={<ResellerDashboard />} />
              <Route path="/reseller/edit_profile" element={<EditResellerProfile />} />


              {/* Admin */}
              <Route path="/admin/signup" element={<AdminSignup />} />
              <Route path="/admin/signin" element={<AdminSignin />} />
              
                {/* Catch-all route for /admin and its children */}
                <Route
                path="/admin/*"
                element={<Navigate to="/admin/dashboard" replace />}
              />
              <Route path="/admin/dashboard" element={<Admin />} />
              
              <Route path="/admin/verify_OTP" element={<AdminVerifyOTP />} />

              <Route path="/admin/reset_password" element={<AdminResetPassword />} />


               {/* SuperAdmin */}
              <Route path="/super_admin/signup" element={<SuperAdminSignup/>} />
              <Route path="/super_admin/signin" element={<SuperAdminSignin />} />
              
                {/* Catch-all route for /admin and its children */}
                <Route
                path="/super_admin/*"
                element={<Navigate to="/super_admin/dashboard" replace />}
              />
              <Route path="/super_admin/dashboard" element={<SuperAdmin />} />
              
              <Route path="/super_admin/verify_OTP" element={<SuperAdminVerifyOTP />} />
              
               <Route path="/super_admin/reset_password" element={<SuperAdminResetPassword />} />

              

              <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </Router>
        </Provider>
      </AuthProvider>
    </div>
  );
};

export default App;
