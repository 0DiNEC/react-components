import React from 'react';
import { FC } from 'react';
import './search.css';

const Search: FC = () => {
  return (
    <div className="form-search">
      <input type="text" className="search-input" placeholder="write text" />
      <button type="submit" className="search-button">
        search
      </button>
    </div>
  );
};

export default Search;
