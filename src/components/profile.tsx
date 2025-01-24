import React from 'react';
import Avatar from './avatar';

const Profile: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar src="/default-avatar.png" alt="Ilma" />
      <div>
        <p className="text-xl font-semibold text-gray-700">Ilma</p>
        <p className="text-sm text-gray-500">ilma@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
