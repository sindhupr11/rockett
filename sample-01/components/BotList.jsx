// components/BotList.js
export default function BotList() {
  // Sample bots data
  const bots = [
    {
      id: 1,
      name: 'Spanish Tutor',
      lastMessage: 'Great job on completing your lesson!',
      unreadCount: 2,
      flag: '🇪🇸'
    },
    {
      id: 2,
      name: 'French Bot',
      lastMessage: 'Bonjour! Ready for your next challenge?',
      unreadCount: 0,
      flag: '🇫🇷'
    }
  ];

  return (
    <div className="flex flex-col overflow-y-scroll h-full px-4 py-2">
      {bots.map(bot => (
        <div key={bot.id} className="flex items-center py-3 border-b">
          {/* Bot Profile Picture */}
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg">{bot.flag}</div>

          {/* Bot Info */}
          <div className="ml-4 flex-1">
            <div className="flex justify-between">
              <h3 className="font-semibold">{bot.name}</h3>
              {/* Unread Message Count */}
              {bot.unreadCount > 0 && (
                <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full">{bot.unreadCount}</span>
              )}
            </div>
            {/* Last Message */}
            <p className="text-gray-600 text-sm">{bot.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
