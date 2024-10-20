// components/Header.js
'use client';

import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold" style={{ color: 'black' }}>ChitchatGPT</h1>
      <div className="flex items-center space-x-4">
        <i className="fas fa-bell text-xl"></i>
        <img
          alt="User profile picture"
          className="w-10 h-10 rounded-full"
          src="https://storage.googleapis.com/a1aa/image/0KlsivfgvzSPGSFjEIjuxxlwUDkK8Xbyr4ZKIoYLYjuonL0JA.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
