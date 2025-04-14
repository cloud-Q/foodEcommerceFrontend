import React, { useState } from 'react';
import './Searchbar.scss';
import { IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Searchbar = () => {
  const [query, setQuery] = useState('');
  
  return (
    <div className="searchbar">
      <input 
        type="text" 
        placeholder="Search for products..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Searchbar;