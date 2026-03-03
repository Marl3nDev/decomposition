import React from 'react';
import { NewsItem } from './NewsItem';

/** Список новостей с рендерингом элементов */
export const NewsList = ({ items }: { items: { icon: string; title: string; link: string }[] }) => (
  <div>
    {items.map((item, index) => (
      <NewsItem key={index} {...item} />
    ))}
  </div>
);
