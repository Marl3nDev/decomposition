import React from 'react';

/** Рекламный баннер */
export const Banner = () => (
  <div style={{ backgroundColor: '#333', color: '#fff', padding: '15px', textAlign: 'center', position: 'relative' }}>
    <h2>Форсаж: Хоббс и Шоу</h2>
    <p>В кино с 1 августа</p>
    <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', position: 'absolute', bottom: '0', left: '0', margin: '15px', borderRadius: '5px' }}>Смотрите трейлер</button>
  </div>
);
