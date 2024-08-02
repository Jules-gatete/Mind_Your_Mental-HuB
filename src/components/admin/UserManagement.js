import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import UserDetails from './UserDetails';
import SearchBar from './SearchBar';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // Fetch users from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    // Assign types to the fetched users
    const usersWithTypes = data.map(user => ({
      ...user,
      type: getRandomType()  // Assign a random type for demonstration
    }));
    
    setUsers(usersWithTypes);
  };

  const getRandomType = () => {
    const types = ['youth', 'mentalHealthProfessional', 'communityModerator'];
    return types[Math.floor(Math.random() * types.length)];
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleUserUpdate = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setSelectedUser(null);
  };

  const handleUserDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setSelectedUser(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const youthUsers = filteredUsers.filter(user => user.type === 'youth');
  const mentalHealthProfessionals = filteredUsers.filter(user => user.type === 'mentalHealthProfessional');
  const communityModerators = filteredUsers.filter(user => user.type === 'communityModerator');

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">User Management</h3>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col md:flex-row gap-4">
        <UserCard 
          title="Youth Users" 
          users={youthUsers} 
          onUserSelect={handleUserSelect}
          onUserDelete={handleUserDelete}
        />
        <UserCard 
          title="Mental Health Professionals" 
          users={mentalHealthProfessionals} 
          onUserSelect={handleUserSelect}
          onUserDelete={handleUserDelete}
        />
        <UserCard 
          title="Community Moderators" 
          users={communityModerators} 
          onUserSelect={handleUserSelect}
          onUserDelete={handleUserDelete}
        />
      </div>
      {selectedUser && (
        <UserDetails 
          user={selectedUser} 
          onUserUpdate={handleUserUpdate}
          onUserDelete={handleUserDelete}
        />
      )}
    </div>
  );
};

export default UserManagement;
