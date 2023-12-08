"use client"
import React, { useEffect, useState } from 'react';
import DogComponent from '../components/dog-component/Dog';
import CatComponent from '../components/cat-component/Cat';
import { debounce } from 'lodash';
import styles from '../globals.css';

const App = () => {
  const [animalType, setAnimalType] = useState('');
  const [catFact, setCatFact] = useState('');
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("")
  const animalOptions = ['Select', 'Cat', 'Dog'];

  const debouncedHandleFormSubmit = debounce(async () => {
    try {
      setLoading(true);
      if (animalType === 'cat') {
        // Fetch cat fact
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setCatFact(data.fact);
        setDogImage(''); // Reset dog image
      } else if (animalType === 'dog') {
        // Fetch dog image
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
        setCatFact(''); // Reset cat fact
      }
      setErrorMessage("")
    } catch (error) {
      console.error(error);
      setErrorMessage("Server error")
    } finally {
      setLoading(false);
    }
  }, 600);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    debouncedHandleFormSubmit();
  };
  
  useEffect(()=>{
    debouncedHandleFormSubmit()
  },[animalType])

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <label>
          Select Animal From The Dropdown:
          <select value={animalType} onChange={(e) => setAnimalType(e.target.value)}>
            {animalOptions.map((option, index) => (
              <option key={index} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" style={{color:'crimson', backgroundColor:'peachpuff' ,cursor:'pointer'}} >Click to Get Info</button>
      </form>
                {!animalType && <div><h2 >You have not selected any option yet. Please select an option</h2></div>}
            {loading ? <div>Loading ...</div>:
            <div>
                {errorMessage && <div>{errorMessage}</div>}
                {animalType === 'cat' && <CatComponent catFact={catFact} />}
                {animalType === 'dog' && <DogComponent dogImage={dogImage} />}
            </div>}
    </div>
  );
};

export default App;
