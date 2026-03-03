import React from 'react';

/** Посещаемое */
export const MostVisited = () => (
  <div>
    <h3 style={{ color: '#0044bb', fontSize: '18px' }}>Посещаемое</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li><button style={{ color: 'black', fontWeight: '700', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>Недвижимость</button> — о сталинках</li>
      <li><button style={{ color: 'black', fontWeight: '700', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>Маркет</button> — люстры</li>
      <li><button style={{ color: 'black', fontWeight: '700', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>Авто.ру</button> — привод 4х4</li>
    </ul>
  </div>
);
