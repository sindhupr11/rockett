// components/FloatingActionButton.js
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const FloatingActionButton = () => {
  const router = useRouter();

  const handleCreateBot = () => {
    router.push('/BotSetUp'); // Redirect to the BotSetUp page
  };

  return (
    <button
      onClick={handleCreateBot}
      className="fixed bottom-4 right-4 bg-purple-600 text-white rounded-full py-2 px-4 flex items-center justify-center shadow-lg hover:bg-purple-700 transition"
    >
      <i className="fas fa-plus mr-2"></i>
      Create Bot
    </button>
  );
};

export default FloatingActionButton;
