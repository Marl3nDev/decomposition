import React from 'react';

/** Блок отображения курсов валют */
type CurrencyBarProps = {
  currencies: string[];
};

export const CurrencyBar = ({ currencies }: CurrencyBarProps) => (
  <div style={{ marginTop: '10px' }}>
    {currencies.map((currency, index) => {
      const parts = currency.split(' ');
      return (
        <span key={index} style={{ marginRight: '10px' }}>
          <span style={{ color: '#000000', fontWeight: 'bold' }}>{parts[0]} {parts[1]}</span>
          <span style={{ color: '#000000' }}> {parts[2]}</span>
          <span style={{ color: '#999999', fontSize: '12px' }}> {parts[3]}</span>
        </span>
      );
    })}
  </div>
);
