import React from 'react';

/** Поле поиска */
export const SearchBar = () => (
  <div style={{ display: 'flex' }}>
    <input id="search-input" type="text" style={{ padding: '5px', border: '2px solid #ffdb4d', outline: 'none', width: '100%' }} />
    <button id="search-button" style={{ padding: '5px', backgroundColor: '#ffdb4d', border: 'none', cursor: 'pointer' }}>Найти</button>
  </div>
);
