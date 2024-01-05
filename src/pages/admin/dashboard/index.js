import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/admin/Sidebar'
import Footer from '../../../components/footer/Footer';
import NavBar from '../../../components/admin/navbar/Navbar';
import Dashboard from '../../../components/admin/dashboard/Dashboard';
import Admins from '../../../components/admin/admins/Admins';
import Users from '../../../components/admin/users/Users';
import Packages from '../../../components/admin/packages/Packages';
import Transactions from '../../../components/admin/transactions/Transactions';
import Signout from '../../../components/admin/signout/Signout';

// import PendingSales from '../../../components/admin/pendingSales/PendingSales'
// import Approvals from '../../../components/admin/approvals/Approvals';
// import Payments from '../../../components/admin/payments/Payments';
// import Orders from '../../../components/admin/orders/Orders';


const Admin = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  useEffect(() => {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Check if the current path is '/franchisor' and update it to '/franchisor/profile'
    if (currentPath === '/admin') {
      window.history.replaceState({}, document.title, '/admin/dashboard');
    }

    // Check if the current path is '/franchisor/dashboard' and update the active component
    if (currentPath === '/admin/dashboard') {
      setActiveComponent('dashboard');
    }
  }, []);

  // Handle navigation by updating the URL and the active component
  const handleNavigate = (path) => {
    // Update the URL and active component based on the path
    if (path === 'dashboard') {
      window.history.replaceState({}, document.title, '/admin/dashboard');
      setActiveComponent('dashboard');
    } else {
      window.history.replaceState({}, document.title, `/admin/${path}`);
      setActiveComponent(path);
    }
  };

  const renderComponent = () => {
    if (activeComponent === 'dashboard') {
      return <Dashboard />;
       } else if (activeComponent === 'admins') {
      return <Admins />;
    } else if (activeComponent === 'users') {
      return <Users />;
    } else if (activeComponent === 'packages') {
      return <Packages />;
    } else if (activeComponent === 'transactions') {
      return <Transactions />;
      // } else if (activeComponent === 'pendingSales') {
      // return <PendingSales />;
    // } else if (activeComponent === 'approvals') {
    //   return <Approvals />;
    // } else if (activeComponent === 'payments') {
    //   return <Payments />;
    // } else if (activeComponent === 'orders') {
    //   return <Orders />;
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

export default Admin;
