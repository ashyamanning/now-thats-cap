import React, {useState, useEffect} from 'react';
import Questions from './Questions';
import categoryData from '../../data/categoryData'
import blackhistoryData from '../../data/blackhistoryData'
import countriesData from '../../data/countriesData'
import foodData from '../../data/foodData'
import musicData from '../../data/musicData'
import artData from '../../data/artData'
import popcultureData from '../../data/popcultureData';
import Score from './../Score/Score.js';
import NewTimer from '../Timer/Timer'
import { useSelector } from 'react-redux';
import './css/playgame.css'
import { useHistory } from 'react-router-dom'

const PlayGame = ({ expiryTimeStamp }) => {
    const category = useSelector(state => state.category);
    const history = useHistory()
    // local state of questions to be mapped through
    const [questions, setQuestions] = useState([])
    //
    let questionCards = questions.map((el) => {
        return <Questions question={el}/>
    })

    useEffect(() => {
        const fetchHelper = (arr) => {
            // debugger
            const arrCopy = arr.slice(0, 20)
            console.log(arrCopy)
            setQuestions(arrCopy)
        }
        const fetchQuestions = (str) => {
            if (str === null) return;
            if (str === "Black History") {
               fetchHelper(blackhistoryData)
            } else if (str === "Pop Culture") {
               fetchHelper(popcultureData)
            }  else if (str === "Music") {
                fetchHelper(musicData) 
            } else if (str === "Art") {
                fetchHelper(artData)
            } else if (str === "Countries") {
                fetchHelper(countriesData)   
            } else if (str === "Food") {
                fetchHelper(foodData)
            }
        }
        fetchQuestions(category)
    }, [])
    return (
        <div className="mainGameBoard">
            <div className="questions-section left-div">
                {questionCards}
            </div>

            <div className="tracking-section right-div">
                <div className="score-div top-div">
                    <h1 className="score-label"> Score </h1>
                    
                    <div className="div-for-score">
                        <Score/> 
                    </div>

                </div>

                <div className="timer-div bottom-div"> 
                    <h1 className="timer-label"> <NewTimer expiryTimestamp={expiryTimeStamp}/> </h1>
                </div>
            </div>

        </div>
    )
}
export default PlayGame;