import React from 'react';

const UserDetails = ({ user, onUserUpdate, onUserDelete }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mt-4 md:mt-0 md:ml-4">
      <h4 className="text-lg font-semibold mb-2">User Details</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button 
        onClick={() => onUserDelete(user.id)} 
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
      {/* Add additional user update functionality here */}
    </div>
  );
};

export default UserDetails;
