import styles from "../styles/home.module.css";
export default function ContentBlock({ title, description, text }) {
  return (
    <div className={styles.mainContent}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button className={styles.buttonExplore}>{text}</button>
    </div>
  );
}
