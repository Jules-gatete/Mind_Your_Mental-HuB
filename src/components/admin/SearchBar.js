import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="mb-4">
      <input 
        type="text" 
        placeholder="Search users..." 
        onChange={handleInputChange} 
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
