import React from 'react';

/** Табы новостей */
type NewsTabsProps = {
  tabs: string[];
  active: number;
  date: string;
};

export const NewsTabs = ({ tabs, active, date }: NewsTabsProps) => (
  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
    {tabs.map((tab, index) => (
      <span key={tab} style={{ color: '#0044bb', fontWeight: index === active ? 'bold' : 'normal', cursor: 'pointer', fontSize: '16px' }}>{tab}</span>
    ))}
    <span style={{ color: '#999999', fontSize: '12px' }}>{date}</span>
  </div>
);
