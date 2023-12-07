"use client"
import React from 'react';
import styles from './Footer.module.css'; // Add or create the CSS module for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 Hy Vee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
