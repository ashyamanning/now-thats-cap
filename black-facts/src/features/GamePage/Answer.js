import React from 'react';

export default function Answer() {
  return (
    <div>
       {foodData.map((item, index) => {
                    return(
                        <div className='item'>
                            <img src={item.image} alt='img1' width='200px'/>
                            <h3>Answer: {item.answer}</h3>
                            <p>Region: {item.region}</p>
                            <h4>Did you Know:</h4>  
                            <p>{item.description}</p>
                        </div>
                    )
                })}
    </div>
  );
}
