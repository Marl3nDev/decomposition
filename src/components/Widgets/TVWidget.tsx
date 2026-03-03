import React from 'react';
import { TVItem } from './TVItem';

/** Виджет телепрограммы */
type TVWidgetProps = {
  programs: { time: string; title: string }[];
};

export const TVWidget = ({ programs }: TVWidgetProps) => (
  <div style={{ flex: 1 }}>
    <h3 style={{ color: '#1a0dab' }}>Эфир</h3>
    {programs.map((program, index) => (
      <TVItem key={index} {...program} />
    ))}
  </div>
);
