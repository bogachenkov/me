import React from 'react';
import './style.scss';
import TimelineItem from './TimelineItem/index';

const Timeline: React.FC = () => {
  return (
    <ul className="Timeline">
      <TimelineItem 
        date="С Ноября 2018 по Июнь 2019"
        position="Младший фронтенд-разработчик"
        org='"Омега Системс", Москва'
        description="Занимался разработкой клиентской части приложения системы видеоаналитики, в частности, 
        принимал участие в переходе с Flash-плееров на HTML5 Video и оптимизации задержки трансляции видеопотока с камер.
        Написал часть приложения, отвечающую за мониторинг процессов системы
        (загрузка процессоров и оперативной памяти серверов, количество активных аналитик и видеопотоков)
        Также в дополнение к основному приложению было разработано приложение для управления лицензиями на продукты компании.
        "
      />
      <TimelineItem 
        date="С Ноября 2017 по Июль 2018"
        position="Веб-разработчик"
        org="Фриланс, Москва"
        description="
        Занимался fullstack-разработкой веб-приложений. Из наиболее масштабных работ можно выделить
        приложение для поиска записей правонарушений по базе данных, разработанное для ГАИ.
        Приложение было написано на стеке React + Redux + Koa.js + Oracle.
        Также я хотел бы упомянуть о разработке сайта об учёте цистерн и тахографов в рамках перевозки опасных грузов и веществ.
        В данном случае использовался следующий стек: HTML + CSS (Blade) + Laravel + MySQL.
        "
      />
    </ul>
  );
};

export default Timeline;