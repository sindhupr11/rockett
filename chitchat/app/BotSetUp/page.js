'use client';

import React, { useState } from 'react';
import BotNameInput from '../components/BotNameInput';
import LanguageSelector from '../components/LanguageSelector';
import FamiliaritySlider from '../components/FamiliaritySlider';
import AvatarSelection from '../components/AvatarSelection';
import AreaOfInterestInput from '../components/AreaOfInterestInput';

const BotSetupPage = () => {
  const [botName, setBotName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [language, setLanguage] = useState('en');
  const [familiarityLevel, setFamiliarityLevel] = useState(0);
  const [areaOfInterest, setAreaOfInterest] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center">Create Your Bot</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Bot Name Input */}
        <BotNameInput botName={botName} setBotName={setBotName} />

        {/* Pre-built Avatar Selection */}
        <AvatarSelection selectedAvatar={avatar} setAvatar={setAvatar} />

        {/* Language Selector */}
        <LanguageSelector language={language} setLanguage={setLanguage} />

        {/* Familiarity Level Slider */}
        <FamiliaritySlider familiarityLevel={familiarityLevel} setFamiliarityLevel={setFamiliarityLevel} />

        {/* Area of Interest Description Box */}
        <AreaOfInterestInput areaOfInterest={areaOfInterest} setAreaOfInterest={setAreaOfInterest} />

        {/* Submit Button */}
        <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition duration-300">
          Create Bot
        </button>
      </div>
    </div>
  );
};

export default BotSetupPage;
