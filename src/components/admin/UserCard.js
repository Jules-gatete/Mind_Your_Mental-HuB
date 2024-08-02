import React from 'react';
import UserList from './UserList';

const UserCard = ({ title, users, onUserSelect, onUserDelete }) => {
  return (
    <div className="w-full md:w-1/3 p-4 bg-white shadow rounded-lg">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <UserList 
        users={users} 
        onUserSelect={onUserSelect} 
        onUserDelete={onUserDelete} 
      />
    </div>
  );
};

export default UserCard;
