'use client';

import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [botName, setBotName] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log('Creating Bot:', botName, areaOfInterest);
    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md">
        <h2 className="text-lg font-semibold">Create New Bot</h2>
        <input
          type="text"
          placeholder="Bot Name"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="w-full border rounded p-2 mt-2"
        />
        <textarea
          placeholder="Area of Interest"
          value={areaOfInterest}
          onChange={(e) => setAreaOfInterest(e.target.value)}
          className="w-full border rounded p-2 mt-2"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="mt-4 ml-2 bg-gray-300 rounded p-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="mt-4 bg-purple-600 text-white rounded p-2"
          >
            Create Bot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
