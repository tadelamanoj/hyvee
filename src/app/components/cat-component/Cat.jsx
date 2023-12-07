"use client"
import React from 'react';
import styles from './Cat.module.css';

const CatComponent = ({ catFact }) => {
  return (
    <div className={styles.catContainer}>
      <h2>Cat Fact</h2>
      <p className={styles.catFact}>{catFact}</p>
    </div>
  );
};

export default CatComponent;
