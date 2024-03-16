import React, { useState } from 'react';

const App = () => {
  const originalArray = ['apple', 'banana', 'orange', 'grape', 'pineapple'];
  const [shuffledArray, setShuffledArray] = useState([]);

  const shuffleArray = () => {
    const array = [...originalArray];
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * array.length);
      [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledArray(array);
  };

  return (
    <div>
      <button onClick={shuffleArray}>Shuffle Array</button>
      <ul>
        {shuffledArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
