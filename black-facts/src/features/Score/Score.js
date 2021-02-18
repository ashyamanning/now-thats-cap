import React from 'react'
import { useSelector } from 'react-redux'


const Score = () => {
    const currentScore = useSelector(state => state.score)

    return (
        <div>
            <h1>{currentScore.value}</h1>
        </div>
    )
}

export default Score