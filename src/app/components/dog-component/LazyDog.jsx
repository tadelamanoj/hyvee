"use client"

import React, { useState } from 'react';

const LazyDogImage = ({ dogImage }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div>
      {imageError ? (
        <p style={{ color: 'red' }}>Error loading image. Please try again later.</p>
      ) : (
        <img className="dog-image" src={dogImage} alt="Dog" onError={handleImageError} />
      )}
    </div>
  );
};

export default LazyDogImage;
