import React, { useState, useEffect } from 'react';
import NavBar from '../../../components/farmer/navbar/Navbar';
import Sidebar from '../../../components/farmer/Sidebar';
import Footer from '../../../components/footer/Footer';
import Dashboard from '../../../components/farmer/dashboard/Dashboard'
import Packages from '../../../components/farmer/packages/Packages';
import Mining from '../../../components/farmer/mining/Mining';
import Transactions from '../../../components/farmer/transactions/Transactions'
import Profile from '../../../components/farmer/profile/Profile'
import Signout from '../../../components/farmer/signout/Signout';

const Farmer = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  useEffect(() => {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Check if the current path is '/franchisor' and update it to '/franchisor/profile'
    if (currentPath === '/farmer') {
      window.history.replaceState({}, document.title, '/farmer/dashboard');
    }

    // Check if the current path is '/franchisor/dashboard' and update the active component
    if (currentPath === '/farmer/dashboard') {
      setActiveComponent('dashboard');
    }
  }, []);

  // Handle navigation by updating the URL and the active component
  const handleNavigate = (path) => {
    // Update the URL and active component based on the path
    if (path === 'dashboard') {
      window.history.replaceState({}, document.title, '/farmer/dashboard');
      setActiveComponent('dashboard');
    } else {
      window.history.replaceState({}, document.title, `/farmer/${path}`);
      setActiveComponent(path);
    }
  };

  const renderComponent = () => {
    if (activeComponent === 'dashboard') {
      return <Dashboard />;
    } else if (activeComponent === 'packages') {
      return <Packages />;
    } else if (activeComponent === 'mining') {
      return <Mining />;
    } else if (activeComponent === 'transactions') {
        return <Transactions />;
        } else if (activeComponent === 'profile') {
      return <Profile />;
    } else if (activeComponent === 'signout') {
      return <Signout />;
    }
    // You can add more conditions for other components if needed.
  };
  

  return (
    <div>
      {/* Header */}
      <header className="box-border w-[100%] py-8 flex justify-center items-center bg-white sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]">
        <div className="container mx-auto px-4">
          <NavBar onNavigate={handleNavigate} />
        </div>
      </header>

      <main className="bg-[#F9FAFB]">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-3 gap-4">
            {/* Sidebar */}
            <div className="">
              <Sidebar onNavigate={handleNavigate} activeComponent={activeComponent} />
            </div>
            {/* Main section */}
            <section className="col-span-3 lg:col-span-2 w-full">
              {renderComponent()}
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-white sm:p-6 dark-bg-gray-800 border-t-2 border-gray-200">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Farmer;
