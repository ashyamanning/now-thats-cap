import React from 'react';
import SingleCard from './SingleCard';
import { useSelector } from 'react-redux';

import './css/playgame.css'

const PlayGame = () => {

    const score = useSelector(state => state.score);

    return (
        <div className="mainGameBoard">
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>

            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>

            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>

            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>

            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
        </div>
    )
}

export default PlayGame;