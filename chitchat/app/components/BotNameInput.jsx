import React from 'react';

const BotNameInput = ({ botName, setBotName }) => {
  return (
    <div>
      <label className="font-semibold text-gray-700">Bot Name:</label>
      <input
        type="text"
        value={botName}
        onChange={(e) => setBotName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 text-black"
        placeholder="Enter your bot's name"
      />
    </div>
  );
};

export default BotNameInput;
