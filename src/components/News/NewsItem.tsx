import React from 'react';

/** Элемент новости */
type NewsItemProps = {
  icon: string;
  title: string;
  link: string;
};

export const NewsItem = ({ icon, title, link }: NewsItemProps) => (
  <div style={{ marginBottom: '5px', lineHeight: '1.5', color: '#000000' }}>
    <span style={{ marginRight: '8px', fontSize: '16px' }}>{icon}</span>
    <a href={link} style={{ color: '#000000', textDecoration: 'none' }}>{title}</a>
  </div>
);
