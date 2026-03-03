import React from 'react';
import { NewsBlock } from './News/NewsBlock';
import { RightPromo } from './RightPromo';

/** Верхняя панель с новостями и промо */
type HeaderSectionProps = {
  tabs: string[];
  news: { icon: string; title: string; link: string }[];
  currencies: string[];
  date: string;
};

export const HeaderSection = ({ tabs, news, currencies, date }: HeaderSectionProps) => (
  <header style={{ display: 'flex', justifyContent: 'space-between' }}>
    <NewsBlock tabs={tabs} news={news} currencies={currencies} date={date} />
    <RightPromo />
  </header>
);
