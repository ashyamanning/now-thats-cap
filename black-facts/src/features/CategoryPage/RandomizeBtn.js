import React from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addCategory } from './CategoryStateFolder/categorySlice.js';
import './Css/categories.css';
import categoryData from '../../data/categoryData';

const RandomizeBtn = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleRandom = (e) => {
        alert("Feature Coming Soon!!")
        // let randomCategory = categoryData[Math.floor(Math.random() * categoryData.length)]
        // dispatch(addCategory(e.currentTarget.randomCategory))
        // history.push(`/play`)
    }

    return (
        <div>
            <button onClick={handleRandom} className="select-btn-random">
                Random Category
            </button>
            
        </div>
    )
}

export default RandomizeBtn
