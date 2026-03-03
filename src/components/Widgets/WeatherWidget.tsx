import React from 'react';

/** Виджет погоды */
export const WeatherWidget = () => (
  <div>
    <h3 style={{ color: '#0044bb', fontSize: '18px', fontWeight: 'bold' }}>Погода</h3>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '32px', marginRight: '10px' }}>☁️</span>
      <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000' }}>+17°</span>
      <div style={{ marginLeft: '10px', fontSize: '13px', color: '#000000' }}>
        Утром +17<br />днём +20
      </div>
    </div>
  </div>
);
