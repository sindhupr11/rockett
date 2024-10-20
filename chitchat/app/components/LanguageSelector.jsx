import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-semibold text-gray-700">Bot Language:</label>
      <select
        className="p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{color:'black'}}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
