import React from 'react';
import Categories from './Categories';
import RandomizeBtn from './RandomizeBtn';
import './Css/categoryhome.css'


const CategoryHome = () => {


    return (
        <div className="catHomeMain">

            <div className="catHomeLogoDiv">
                <h1 className="catHomeLogo"> #NowThatsCap</h1>
            </div>

            <div className="catHomeCat">
                <Categories/>
            </div>

            <div className="catHomeRandBtn">
                <RandomizeBtn/>
            </div>
        </div>
    )
}

export default CategoryHome
