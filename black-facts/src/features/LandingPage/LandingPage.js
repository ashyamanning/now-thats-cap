import React from 'react';
import { useHistory } from "react-router-dom";
import './css/landing.css';
import nowthatscap from '../../assets/nowthatscap.png';
import blackfactseditionlogo from '../../assets/blackfactseditionlogo.png';


const LandingPage = () => {

    const history = useHistory();

    const handleClick = (e) => {
        history.push('/menu')
    }

    return (
        <div className="main-landing-container">
            <div className="ntc-logo-div"> 
                <div className="sub-box">
                    <div className="bfe-img-logo-div">
                        <img className="bfe-img-logo" src={blackfactseditionlogo}/>
                        <h3 className="edition-label"> Edition </h3>
                    </div>
                    <div className="enter-game">
                        <button onClick={handleClick} className="foc-btn">
                            Facts or Cap?
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default LandingPage
