import React from 'react';
import { NewsTabs } from './NewsTabs';
import { NewsList } from './NewsList';
import { CurrencyBar } from './CurrencyBar';

/** Блок новостей */
type NewsBlockProps = {
  tabs: string[];
  news: { icon: string; title: string; link: string }[];
  currencies: string[];
  date: string;
};

export const NewsBlock = ({ tabs, news, currencies, date }: NewsBlockProps) => (
  <div style={{ width: '70%' }}>
    <NewsTabs tabs={tabs} active={0} date={date} />
    <NewsList items={news} />
    <CurrencyBar currencies={currencies} />
  </div>
);
