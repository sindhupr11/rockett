import React from 'react';

const AreaOfInterestInput = ({ areaOfInterest, setAreaOfInterest }) => {
  return (
    <div>
      <label className="font-semibold text-gray-700">Area of Interest:</label>
      <textarea
        value={areaOfInterest}
        onChange={(e) => setAreaOfInterest(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 text-black"
        rows="3"
        placeholder="Describe your area of interest"
      />
    </div>
  );
};

export default AreaOfInterestInput;
