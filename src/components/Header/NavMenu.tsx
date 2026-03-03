import React from 'react';

/** Меню навигации с пунктами */
type NavMenuProps = {
  items: string[];
};

export const NavMenu = ({ items }: NavMenuProps) => (
  <nav style={{ display: 'flex', marginBottom: '10px' }}>
    {items.map((item) => (
      <a key={item} href="#" style={{ marginRight: 10, color: '#1a0dab' }}>{item}</a>
    ))}
  </nav>
);
