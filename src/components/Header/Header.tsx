import React from 'react';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { SearchBar } from './SearchBar';

type HeaderProps = {
  menuItems: string[];
};

/** Верхняя часть страницы с логотипом, навигацией и поиском */
export const Header = ({ menuItems }: HeaderProps) => (
  <header style={{ backgroundColor: '#ffffff', padding: '10px', marginBottom: '20px' }}>
    <NavMenu items={menuItems} />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Logo />
      <SearchBar />
    </div>
  </header>
);
