import React from 'react';
import foodData from '../../data/foodData';
import ReactCardFlip from 'react-card-flip';

const SingleCard = () => {
     
    return (
        <div className='single-page'>
            <div className='question-card'>

            </div>
            <div className='answer-card'>

            </div>
            <div className='info-card'>
                {foodData.map((item, index) => {
                    return(
                        <div className='item'>
                            <img src={item.image} alt='img1' width='200px'/>
                            <h3>{item.name}</h3>
                            <p>{item.region}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SingleCard;

