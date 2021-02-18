import React, { useState } from 'react';
import foodData from '../../data/foodData'

export default function Answer({question}) {
  const [answer, setAnswer] = useState()
  console.log(question)
  return (
    <div>
      <h3>Answer: {question.answer}</h3>
      <p>Region: {question.region}</p>
      <h4>Did you Know:</h4>  
      <p>{question.description}</p>
    </div>
  );
}
