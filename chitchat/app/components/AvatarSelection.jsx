import React from 'react';

const AvatarSelection = ({ selectedAvatar, setAvatar }) => {
  const avatarOptions = [
    '/avatars/avatar1.png', // Assuming you have avatar images in the public/avatars folder
    '/avatars/avatar2.png',
    '/avatars/avatar3.png',
    '/avatars/avatar4.png',
  ];

  return (
    <div className="flex flex-col space-y-2">
      <label className="font-semibold text-gray-700">Select Avatar:</label>
      <div className="flex space-x-4">
        {avatarOptions.map((avatarUrl, index) => (
          <img
            key={index}
            src={avatarUrl}
            alt={`Avatar ${index + 1}`}
            className={`w-16 h-16 rounded-full object-cover cursor-pointer transition ${
              selectedAvatar === avatarUrl ? 'ring-4 ring-purple-500' : 'ring-2 ring-gray-300'
            }`}
            onClick={() => setAvatar(avatarUrl)}
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarSelection;
