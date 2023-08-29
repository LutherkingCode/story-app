import React from 'react';
import styles from './home.module.css';


export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.heading}>Welcome to our Daily Journal</h1>
      <p className={styles.subheading}>Get track of every moment of yor life, create Explore and discover amazing content.</p>

    </div>
  );
}
