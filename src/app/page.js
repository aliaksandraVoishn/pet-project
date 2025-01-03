import styles from "../styles/home.module.css";
import ContentBlock from "../components/content-block.js";
import HomePageBackground from "../components/home-page-background.js";

export default function App() {
  return (
    <div className={styles.homePage}>
      <HomePageBackground />
      <ContentBlock
        title="Drive Luxury, Feel the Difference"
        description="Discover exclusive holiday offers and make this season unforgettable.
          Explore our premium selection of vehicles today."
        text="Explore Models"
      />
    </div>
  );
}

//сделать обновленный год на футере
