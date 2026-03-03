import React from 'react';
import { Page } from './components/Layout/Page';
import { HeaderSection } from './components/HeaderSection';
import { SearchSection } from './components/Header/SearchSection';
import { Banner } from './components/Banner/Banner';
import { WidgetsSection } from './components/Widgets/WidgetsSection';
import { WeatherWidget } from './components/Widgets/WeatherWidget';
import { MostVisited } from './components/Widgets/MostVisited';
import { GermanyMap } from './components/Widgets/GermanyMap';
import { TVGuide } from './components/Widgets/TVGuide';
import { LiveStream } from './components/Widgets/LiveStream';
import './App.css';

function App() {
  return (
    <Page>
      <HeaderSection
        tabs={["Сейчас в СМИ", "в Германии", "Рекомендуем"]}
        news={[
          { icon: "📰", title: "Путин упростил получение автомобильных номеров", link: "#" },
          { icon: "📰", title: "В команде Зеленского раскрыли план реформ на Украине", link: "#" },
          { icon: "📰", title: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье", link: "#" },
          { icon: "📰", title: "Суд закрыл дело Демпартии США против России", link: "#" },
          { icon: "📰", title: "На Украине призвали создать ракеты для удара по Москве", link: "#" }
        ]}
        currencies={["USD MOEX 63,52 +0,09", "EUR MOEX 70,86 +0,14", "НЕФТЬ 64,90 +1,63%"]}
        date="31 июля, среда 02 32"
      />
      <SearchSection services={["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё"]} />
      <div style={{ margin: '13px 0' }}>
        <span style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Найдётся все. Например, <span style={{ color: '#999999' }}>фаза луны сегодня</span></span>
      </div>
      <Banner />
      <WidgetsSection>
        <div style={{ flex: '1 1 30%', minWidth: '300px' }}>
          <WeatherWidget />
          <MostVisited />
        </div>
        <div style={{ flex: '1 1 30%', minWidth: '300px' }}>
          <GermanyMap />
          <TVGuide />
        </div>
        <div style={{ flex: '1 1 30%', minWidth: '300px' }}>
          <LiveStream />
        </div>
      </WidgetsSection>
    </Page>
  );
}

export default App;
