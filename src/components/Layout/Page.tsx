import React from 'react';

/** Контейнер страницы с центрированием и фоновым цветом */
export const Page = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
    {children}
  </div>
);
