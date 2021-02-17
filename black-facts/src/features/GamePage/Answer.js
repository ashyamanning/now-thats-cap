import React, { useState } from 'react';
import foodData from '../../data/foodData'

export default function Answer() {
  const [answer, setAnswer] = useState('')
  console.log(foodData[0])

  return (
    <div>
      <h3>Answer: {foodData[0].answer}</h3>
      <p>Region: {foodData[0].region}</p>
      <h4>Did you Know:</h4>  
      <p>{foodData[0].description}</p>
    </div>
  );
}
