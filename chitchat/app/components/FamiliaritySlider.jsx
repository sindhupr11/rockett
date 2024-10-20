import React from 'react';

const FamiliaritySlider = ({ familiarityLevel, setFamiliarityLevel }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-semibold text-gray-700">Familiarity Level: {familiarityLevel}</label>
      <input
        type="range"
        min="0"
        max="5"
        value={familiarityLevel}
        onChange={(e) => setFamiliarityLevel(Number(e.target.value))}
        className="slider w-full"
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>0 - Beginner</span>
        <span>5 - Fluent</span>
      </div>
    </div>
  );
};

export default FamiliaritySlider;
