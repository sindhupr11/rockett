import React from 'react'
import Chatbar from '../components/Chatbar'

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
  {
    profileImage: 'https://storage.googleapis.com/a1aa/image/QYrcMfphZXstRCByfCf44SKcET4CZFeMfERf0ERsDFD4ZaPB.jpg',
    tutorName: 'Japanese tutor',
    lastMessage: 'Oyasuminasai!',
    time: '04:20 PM',
    unreadCount: 5,
  },
]

const Page = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="max-w-md mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold" style={{color:'black'}}>ChitchatGPT</h1>
          <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-xl"></i>
            <img
              alt="User profile picture"
              className="w-10 h-10 rounded-full"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/0KlsivfgvzSPGSFjEIjuxxlwUDkK8Xbyr4ZKIoYLYjuonL0JA.jpg"
              width="40"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Search"
            type="text"
          />
        </div>
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
        <div className="fixed bottom-4 right-4">
          <button className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
