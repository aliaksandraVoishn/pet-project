import styles from "../styles/home.module.css";

export default function HomePageBackground() {
  return (
    <video autoPlay muted loop className={styles.backgroundVideo}>
      <source src="/backgroundVideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
