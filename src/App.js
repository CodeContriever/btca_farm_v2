// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './utils/auth';

import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import AccessDeniedPage from './pages/AccessDeniedPage';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import VerifyOTP from './pages/auth/VerifyOTP';
import Role from './pages/auth/Role';
import Reset from './pages/auth/Reset';
import Franchisor from './pages/franchisor';
import EditProfile from './pages/franchisor/EditProfile';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route path="access-denied" element={<AccessDeniedPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verify_OTP" element={<VerifyOTP />} />
              <Route path="/role" element={<Role />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/reset" element={<Reset />} />

              {/* Catch-all route for /franchisor and its children */}
              <Route
                path="/franchisor/*"
                element={<Navigate to="/franchisor/profile" replace />}
              />
              <Route path="/franchisor/profile" element={<Franchisor />} />
              <Route path="/franchisor/edit_profile" element={<EditProfile />} />

              {/* Add the Dashboard route, but remove it from here */}
              {/* <Route path="/franchisor/dashboard" element={<Dashboard />} /> */}

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </Provider>
      </AuthProvider>
    </div>
  );
};

export default App;
