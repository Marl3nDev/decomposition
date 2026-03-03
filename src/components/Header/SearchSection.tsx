import React from 'react';
import { ServiceLinks } from './ServiceLinks';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

/** Поисковый блок */
type SearchSectionProps = {
  services: string[];
};

export const SearchSection = ({ services }: SearchSectionProps) => (
  <section className="search-section" style={{ display: 'flex', margin: '30px 0px 10px' }}>
    <div className="logo" style={{ alignSelf: 'flex-end', marginLeft: '-100px' }}>
      <Logo />
    </div>
    <div className="search-container" style={{ width: '100%' }}>
      <div className="service-links" style={{ marginBottom: '10px' }}>
        <ServiceLinks items={services} />
      </div>
      <div className="input-group">
        <SearchBar />
      </div>
    </div>
  </section>
);
