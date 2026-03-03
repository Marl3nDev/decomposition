import React from 'react';

/** Список популярных ссылок */
type PopularLinksProps = {
  items: string[];
};

export const PopularLinks = ({ items }: PopularLinksProps) => (
  <div style={{ flex: 1 }}>
    <h3>Посещаемое</h3>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);
