import React from 'react';
import { FC } from 'react';
import style from './Search.module.css';

const Search: FC = () => {
  return (
    <div className={style.fSearch}>
      <input type="text" className={style.input} placeholder="write text" />
      <button type="submit" className={style.button}>
        search
      </button>
    </div>
  );
};

export default Search;
