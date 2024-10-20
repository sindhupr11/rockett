// app/page.js
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ChatList from '../components/ChatList';
import FloatingActionButton from '../components/FloatingActionButton';

const chatData = [
  {
    profileImage: 'https://storage.googleapis.com/a1aa/image/u5zqMFachpbHC1XxCCa4ESkOebdUZ3fvMf2D0weouGeB65CdC.jpg',
    tutorName: 'French tutor',
    lastMessage: 'Good morning....',
    time: '09:34 PM',
    unreadCount: 2,
  },
  {
    profileImage: 'https://storage.googleapis.com/a1aa/image/2KjxMfkcLPgcCZVvXCabc4EDko9yVaMzNf7WpAejQ0CVcbbCdD.jpg',
    tutorName: 'Spanish tutor',
    lastMessage: 'How was the lesson?',
    time: '08:15 PM',
    unreadCount: 1,
  },
  {
    profileImage: 'https://storage.googleapis.com/a1aa/image/xGkpMfzcWZspDCDtCc34TKcE7MDKFoMbNN5DdEuPKQTF34AbD.jpg',
    tutorName: 'German tutor',
    lastMessage: 'Auf Wiedersehen!',
    time: '07:45 PM',
    unreadCount: 0,
  },
  {
    profileImage: 'https://storage.googleapis.com/a1aa/image/KZptMfghWQrcCCDyVCf4WRcE1WFTMvNBFp3PwQaPQFE94PFG.jpg',
    tutorName: 'Italian tutor',
    lastMessage: 'Ciao, see you later!',
    time: '06:23 PM',
    unreadCount: 3,
  },
  {
    profileImage: 'https://storage.googleapis.com/a1aa/image/QYrcMfphZXstRCByfCf44SKcET4CZFeMfERf0ERsDFD4ZaPB.jpg',
    tutorName: 'Japanese tutor',
    lastMessage: 'Oyasuminasai!',
    time: '04:20 PM',
    unreadCount: 5,
  },
  // New chat entry
  {
    profileImage: 'https://storage.googleapis.com/a1aa/image/NEW_IMAGE_URL.jpg', // Replace with a new image URL
    tutorName: 'New Language Tutor',
    lastMessage: 'Let’s start learning!',
    time: '10:00 PM',
    unreadCount: 0,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="max-w-md mx-auto p-4">
        <Header />
        <SearchBar />
        <ChatList chatData={chatData} />
        <FloatingActionButton />
      </div>
    </div>
  );
};

export default Page;
