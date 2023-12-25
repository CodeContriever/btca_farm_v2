import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CreatePackages from './farmer/CreatePackages';
import CreatedPackages from './farmer/CreatedPackages';

const Packages = () => {
  const [createdPackages, setCreatedPackages] = useState([]);

  return (
    <div className="container mx-auto px-6">
      <div className="">
        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">Packages</h1>

        <div className="bg-white rounded-md shadow-lg p-4 mt-4">
          {/* Package type selection */}
          <Tabs>
            <TabList>
              <Tab>Farmer</Tab>
              <Tab>Franchisor</Tab>
              <Tab>Reseller</Tab>
            </TabList>

            {/* Render selected packages */}
            <TabPanel>
              {/* create packages */}
              <CreatePackages createdPackages={createdPackages} setCreatedPackages={setCreatedPackages} />

              {/* Display Created packages */}
              <div className="mt-12">
                <CreatedPackages createdPackages={createdPackages} />
              </div>
            </TabPanel>

            {/* Similar TabPanel for franchisor and reseller */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Packages;
