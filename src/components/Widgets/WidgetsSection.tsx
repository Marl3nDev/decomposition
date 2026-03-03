import React from 'react';

/** Контейнер виджетов */
export const WidgetsSection = ({ children }: { children: React.ReactNode }) => (
  <main style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>{children}</main>
);
