import React from 'react'
//hi

const Chatbar = ({ profileImage, tutorName, lastMessage, time, unreadCount }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img 
          alt={`Profile picture of ${tutorName}`} 
          className="w-10 h-12 rounded-full" 
          src={profileImage} 
          height="40" 
          width="50" 
        />
        <div>
          <h2 className="font-bold" style={{color:'black'}}>
            {tutorName}
          </h2>
          <p className="text-gray-500" style={{color:'#969696'}}>
            {lastMessage}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-gray-500">
          {time}
        </p>
        {unreadCount > 0 && (
          <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  )
}

export default Chatbar
