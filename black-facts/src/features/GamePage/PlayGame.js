import React, {useState, useEffect} from 'react';
import Questions from './Questions';
import categoryData from '../../data/categoryData'
import blackhistoryData from '../../data/blackhistoryData'
import countriesData from '../../data/countriesData'
import foodData from '../../data/foodData'
import musicData from '../../data/musicData'
import artData from '../../data/artData'
import popcultureData from '../../data/popcultureData'
import { useSelector } from 'react-redux';
import './css/playgame.css'
const PlayGame = () => {
    const category = useSelector(state => state.category);
    // local state of questions to be mapped through
    const [questions, setQuestions] = useState([]);
    //
    let questionCards = questions.map((el) => {
        return <Questions question={el}/>
    })
    useEffect(() => {
        const fetchHelper = (arr) => {
            debugger
            const arrCopy = arr.slice(0, 25)
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
            {questionCards}
        </div>
    )
}
export default PlayGame;