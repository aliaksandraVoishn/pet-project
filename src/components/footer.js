import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.textBlock}>
        <p>©2024, All rights reserved</p>
      </div>
    </footer>
  );
}
