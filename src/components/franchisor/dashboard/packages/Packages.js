import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Packages = () => {




  // const [packages, setPackages] = useState([]);

  return (
    <div className="bg-[#A020F0] rounded-lg overflow-hidden py-4 px-2 text-center text-white space-y-8">


      <hr />

      {/* Package item */}
      {/* <div className="space-y-4">
        {packages.map((packageItem) => (
          <div key={packageItem.id}>
            <h3 className="font-medium text-base">{packageItem.packageName}</h3>
            <p className="font-medium text-base">{packageItem.description}</p>
            <h3 className="font-medium text-base">
              {packageItem.initialReward}
            </h3>
            <h3 className="font-medium text-base">
              {packageItem.monthlyReward}
            </h3>
            <h3 className="font-medium text-base">
              {packageItem.yearlyReward}
            </h3>
            <h3 className="font-medium text-base">{packageItem.duration}</h3>
            <h3 className="font-medium text-base">{packageItem.price}</h3>
          </div>
        ))}
      </div> */}

      <hr />

      <div className="flex justify-center">

        <button className="flex flex-col items-center justify-center gap-2 px-20 py-1 font-medium text-base outline otline-1 outline-white">
          <AiOutlineStar />
          Activate
        </button>

      </div>
    </div>
  );
};

export default Packages;
