// components/ChatList.js
import React from 'react';
import Chatbar from './Chatbar';

const ChatList = ({ chatData }) => {
  return (
    <div className="space-y-4">
      {chatData.map((chat, index) => (
        <Chatbar
          key={index}
          profileImage={chat.profileImage}
          tutorName={chat.tutorName}
          lastMessage={chat.lastMessage}
          time={chat.time}
          unreadCount={chat.unreadCount}
        />
      ))}
    </div>
  );
};

export default ChatList;
