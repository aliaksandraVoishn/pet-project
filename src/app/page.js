import Header from "./components/header.js";
import styles from "./styles/home.module.css";
import ContentBlock from "./components/content-block.js";

export default function App() {
  return (
    <div className={styles.homePage}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <ContentBlock
        title="Drive Luxury, Feel the Difference."
        description="Discover exclusive holiday offers and make this season unforgettable.
          Explore our premium selection of vehicles today."
        text="Explore Models"
      />
    </div>
  );
}

//Структура (перехоод на home page находясь на home page )
//Git (попробовать что-то загрузить туда и как понимать что именно и когда лучше делать т.е. когда лучше коммитить, когда не стоит, как вернуться на на предыдущую версию)
// Хорошо ли написан код или нужна другая структура на page.js (сугубо компоненты ли можно дописывать html), хорошо ли написаны css файлы
//Нормально ли что я поместила видео именно сюда, а не загрузила как компонент

// 1.сделать компонент из видео компонент
