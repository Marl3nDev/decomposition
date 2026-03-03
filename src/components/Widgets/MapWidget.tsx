import React from 'react';

/** Виджет карты */
type MapWidgetProps = {
  title: string;
  description: string;
};

export const MapWidget = ({ title, description }: MapWidgetProps) => (
  <div style={{ flex: 1 }}>
    <h3 style={{ color: '#1a0dab' }}>{title}</h3>
    <p>{description}</p>
  </div>
);
