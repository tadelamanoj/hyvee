"use client";
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Hy Vee</h1>
      <p className={styles.subtitle}>Your One-Stop Shop for Quality Products</p>
    </header>
  );
};

export default Header;
