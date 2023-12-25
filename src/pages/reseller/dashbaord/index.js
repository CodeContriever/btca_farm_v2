import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/reseller/Sidebar';
import Footer from '../../../components/footer/Footer';
import NavBar from '../../../components/reseller/Navbar';
import Profile from '../../../components/reseller/profile/Profile';
import Dashboard from '../../../components/reseller/dashboard/Dashboard';
import Transactions from '../../../components/reseller/transactions/Transactions';
import Approvals from '../../../components/reseller/approvals/Approvals';
import Payments from '../../../components/reseller/payments/Payments';
import Orders from '../../../components/reseller/orders/Orders';
import Settings from '../../../components/reseller/settings/Settings';
import PendingSales from '../../../components/reseller/pendingSales/PendingSales';

const Reseller = () => {
  const [activeComponent, setActiveComponent] = useState('profile');

  useEffect(() => {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Check if the current path is '/franchisor' and update it to '/franchisor/profile'
    if (currentPath === '/reseller') {
      window.history.replaceState({}, document.title, '/reseller/profile');
    }

    // Check if the current path is '/franchisor/dashboard' and update the active component
    if (currentPath === '/reseller/dashboard') {
      setActiveComponent('dashboard');
    }
  }, []);

  // Handle navigation by updating the URL and the active component
  const handleNavigate = (path) => {
    // Update the URL and active component based on the path
    if (path === 'dashboard') {
      window.history.replaceState({}, document.title, '/reseller/dashboard');
      setActiveComponent('dashboard');
    } else {
      window.history.replaceState({}, document.title, `/reseller/${path}`);
      setActiveComponent(path);
    }
  };

  const renderComponent = () => {
    if (activeComponent === 'dashboard') {
      return <Dashboard />;
    } else if (activeComponent === 'transactions') {
      return <Transactions />;
       } else if (activeComponent === 'pendingSales') {
      return <PendingSales />;
    } else if (activeComponent === 'approvals') {
      return <Approvals />;
    } else if (activeComponent === 'payments') {
      return <Payments />;
    } else if (activeComponent === 'orders') {
      return <Orders />;
      } else if (activeComponent === 'profile') {
      return <Profile />;
    } else if (activeComponent === 'settings') {
      return <Settings />;
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

export default Reseller;
