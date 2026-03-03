import React from 'react';

/** Ссылки на сервисы */
type ServiceLinksProps = {
  items: string[];
};

export const ServiceLinks = ({ items }: ServiceLinksProps) => (
  <ul className="service-list" style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0, margin: 0 }}>
    {items.map(item => <li key={item}><button style={{ color: '#0044bb', textDecoration: 'none', fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer' }}>{item}</button></li>)}
  </ul>
);
