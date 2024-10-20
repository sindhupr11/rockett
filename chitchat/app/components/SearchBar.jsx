// components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        className="w-full p-2 border rounded-lg"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
