import React from 'react';
import Screen from '../../components/ui/Screen';
import Container from '../../components/ui/Container';
import Work from '../../components/Work';

import beautyPointImg from '../../images/Colored/beauty.jpg';
import licencesImg from '../../images/Colored/licences.jpg';
import gaiImg from '../../images/Colored/gai.jpg';
import gmailImg from '../../images/Colored/gmail.jpg';
import dropboxImg from '../../images/Colored/dropbox.jpg';
import bracesImg from '../../images/Colored/braces.jpg';
import criosImg from '../../images/Colored/crios.jpg';
import worldImg from '../../images/Colored/world-infographics.jpg';

import WorkLinks from '../../components/WorkLinks';

const Portfolio:React.FC = () => {
  return (
    <>
      <Screen id="world-infographics">
        <Container centered>
          <Work title="World Infographics"
                img={worldImg}
                tags={['React', 'TypeScript', 'D3.js', 'Apollo Client', 'CSS Grid']}>
            <p>
              Визуализация мировых данных 
            </p>
            <p>
              Примеры графиков и карт на D3.js, основанных на мировой статистике.
              Представлены данные о плотности населения стран, численности населения, площади стран, количества границ и другие.
            </p>
            <WorkLinks
              demo="https://bogachenkov.github.io/world-visual/"
              repo="https://github.com/bogachenkov/world-visual"
            />
          </Work>
        </Container>
      </Screen>

      <Screen id="beauty-point">
        <Container centered>
          <Work title="Beauty Point"
                img={beautyPointImg}
                tags={['React', 'Redux', 'Moment', 'CSS Grid']}>
            <p>
              Панель управления салоном красоты. </p>
            <p>
              Приложение показывает таймлайны в реальном времени, а также позволяет добавлять и редактировать записи на указанные дату и время,
              посчитав необходимые затраты по времени и стоимость выбранных услуг, учитывая свободные интервалы.
            </p>
            <WorkLinks
              demo="https://bogachenkov.github.io/beauty-point/"
              repo="https://github.com/bogachenkov/beauty-point/tree/master"
              design="https://dribbble.com/shots/5760237-Beauty-Point-Dashboard"
            />
          </Work>
        </Container>
      </Screen>
      
      <Screen id="gai">
        <Container centered>
        <Work title="Поиск правонарушений"
                img={gaiImg}
                tags={['React', 'Redux', 'Sagas', 'Typescript', 'Koa.js', 'Oracle']}>
            <p>
              Система поиска фотофиксаций, разработанная для УГИБДД по Чеченской Республике </p>
            <p>
              Данная система позволяет на основе заданных параметров поиска 
              (например, все результаты за заданный промежуток времени / в конкретное время / в конкретном месте / по госномеру и т.д.) 
              получать из базы данных записи с информацией о правонарушении.
              Также реализованы галерея изображений, включенных в результат запроса, выдача результатов запроса в виде Excel-файла,
              панель управления пользователями и журнал истории запросов данных пользователей с гибкой настройкой фильтров поиска.
            </p>
          </Work>
        </Container>
      </Screen>

      <Screen id="license-server">
        <Container centered>
        <Work title="Сервер лицензий"
                img={licencesImg}
                tags={['React', 'Redux', 'Sagas', 'Koa.js', 'MongoDB']}>
            <p>
              Сервер лицензий ПО системы видеоаналитики. </p>
            <p>
              Данное приложение было разработано в дополнение к системе видеоаналитики и позволяет генерировать лицензии на использование данной системы,
              включающие в себя количество и тип доступных аналитик. Также в фунционал приложения входят панель управления выданными лицензиями, проверка их на подлинность,
              генерация PDF-, JSON- и Excel-файлов, словарь аналитик и панель управления пользователями с распределением их ролей.
            </p>
          </Work>
        </Container>
      </Screen>
      
      <Screen id="gmail">
        <Container centered>
        <Work title="GMail"
                img={gmailImg}
                tags={['React', 'Redux', 'HTML', 'SCSS']}>
            <p>
              Вариант реализации почтового сервиса от Google </p>
            <p>
              В качестве демонстрации реализованы отправка, выделение и удаление как отдельных сообщений, так и диалогов полностью.
            </p>
            <WorkLinks
              demo="https://bogachenkov.github.io/gmail-redesign/"
              repo="https://github.com/bogachenkov/gmail-redesign"
              design="https://www.behance.net/gallery/65813265/Gmail-Redesign"
            />
          </Work>
        </Container>
      </Screen>
      
      <Screen id="curly-braces">
        <Container centered>
        <Work title="Curly Braces"
                img={bracesImg}
                tags={['React', 'Redux', 'Express', 'MongoDB']}>
            <p>Прототип социальной сети для разработчиков</p>
            <p>
              Приложение включает в себя возможность регистрации/авторизации,
              профили пользователей с различными разделами, такими как Личная информация, Образование и опыт работы,
              возможность подключения своего репозитория Github, ленту новостей с комментариями и поиску по тэгам, а также
              список вакансий с возможностью отклика и уведомлениях об отклике на Вашу вакансию.
            </p>
            <WorkLinks
              demo="https://curly-braces.herokuapp.com/"
              repo="https://github.com/bogachenkov/cb"
            />
          </Work>
        </Container>
      </Screen>
      
      <Screen id="dropbox">
        <Container centered>
        <Work title="Dropbox"
                img={dropboxImg}
                tags={['React', 'Redux', 'HTML', 'CSS Grid']}>
            <p>
              Редизайн одноименного файл-хостинга
            </p>
            <p>
              В данном приложении присутствуют два режима отображения файлов - списком или через плитки,
              в качестве демонстрации реализованы выделение и удаление одного или нескольких файлов. 
            </p>
            <WorkLinks
              demo="https://bogachenkov.github.io/dropbox-redesign/"
              repo="https://github.com/bogachenkov/dropbox-redesign/tree/master"
              design="https://www.behance.net/gallery/27742991/Redesing-Dropbox"
            />
          </Work>
        </Container>
      </Screen>
      
      <Screen id="crios">
        <Container centered>
        <Work title="Crios"
                img={criosImg}
                tags={['React', 'HTML', 'Flexbox', 'CSS Grid']}>
            <p>Простой пример вёрстки лендинга</p>
            <WorkLinks
              demo="https://bogachenkov.github.io/crios-landing/"
              repo="https://github.com/bogachenkov/crios-landing/tree/master"
              design="https://www.behance.net/gallery/43662859/Crios-Free-Clean-and-Modern-PSD-Web-Template"
            />
          </Work>
        </Container>
      </Screen>
      
    </>
  );
};

export default React.memo(Portfolio);