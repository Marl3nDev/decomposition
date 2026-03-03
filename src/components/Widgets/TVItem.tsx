import React from 'react';

/** Элемент телепрограммы */
type TVItemProps = {
  time: string;
  title: string;
};

export const TVItem = ({ time, title }: TVItemProps) => (
  <div>
    <span style={{ fontWeight: 'bold' }}>{time}</span> — <span>{title}</span>
  </div>
);
