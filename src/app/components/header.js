import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/home ">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/catalog">Auto</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/catalog/123">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
