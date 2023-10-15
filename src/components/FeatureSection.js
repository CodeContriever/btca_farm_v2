import React from 'react';

const FeatureItem = ({ title, description, icon }) => {
  return (

    <div className="grid md:grid-cols-2">
      <div className="flex flex-col items-start">
        <h3 className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-purple-600 dark:text-white">
          {title}
        </h3>
        <p className="order-2 md:order-1 text-gray-500 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 dark:text-gray-400 max-w-full">
          {description}
        </p>
      </div>
      <div className="order-1 md:order-2">{icon}</div>
    </div>
  );
};

const features = [
  {
    title: 'Max minting',
    description: 'Monthly mining over the course of 12 months. The process is entirely on the BTCA blockchain.',
    icon: <img src='btca_axe.svg' alt='btca_axe' />,
  },

  {
    title: 'Operating term',
    description: 'Smart Contracts allow you to mine for a period of one year, providing uninterrupted mining during the entire operating term.',
    icon: <img src='btca_bell.svg' alt='btca_bell' />,
  },

  {
    title: 'Fast transactions',
    description: 'All mining transactions are available in the app. You can easily spend, transfer and freeze (mine) more coin again.',
    icon: <img src='btca_axe.svg' alt='btca_axe' />,
  },

  {
    title: 'Safety & security',
    description: 'The user is the sole owner of all access keys to his wallet and all the coins in it.',
    icon: <img src='btca_hand.svg' alt='afriwit' />,
  }
];

const FeatureSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-24">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon} // Pass the icon from the feature object
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
