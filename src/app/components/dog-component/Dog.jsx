"use client"
import styles from './Dog.module.css';
// DogComponent.js
import React, { lazy, Suspense } from 'react';

const LazyDogImage = lazy(() => import('../dog-component/LazyDog'));

const DogComponent = ({ dogImage }) => {
  return (
    <div className={styles.dogContainer}>
      <h2>Dog Image:</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDogImage dogImage={dogImage} />
      </Suspense>
    </div>
  );
};

export default DogComponent;


