import React from 'react';

const UserList = ({ users, onUserSelect, onUserDelete }) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id} className="flex justify-between items-center p-2 border-b">
          <div onClick={() => onUserSelect(user)}>
            <h5 className="text-md font-medium">{user.name}</h5>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
          <button 
            onClick={() => onUserDelete(user.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
