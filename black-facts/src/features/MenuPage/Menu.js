import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MenuButton from './MenuButton'
import SoloTeamNameForm from './SoloTeamNameForm'
import MultiplayerTeamNameForm from './MultiplayerTeamNameForm'
import { clearName } from './playerNameSlices/soloTeamNameSlice'
import '../MenuPage/css/menu.css'
import fist from './css/images/fistlogo.png'
import marvin from './css/images/marvin.jpeg'
import sihame from './css/images/Sihame Bazi.jpg'
import johanne from './css/images/Johanne Enama.jpg'
import ashya from './css/images/Pursuit - Ashya Manning.jpg'
import uduakabasi from './css/images/Image from iOS.jpg'


const Menu = () => {
    // Setting useHistory and useDispatch hooks to variables
    const history = useHistory()
    const dispatch = useDispatch()
    // Grabbing the soloPlayerName state, going to clear it on load
    const name = useSelector((state) => state.soloPlayerName)
    const soloDescription = {
        type: 'Solo',
        description: 'Play a solo game!'
    }
    const soloDescription2 = {
        type: 'Home',
        description: 'Back to Home'
    }
    const multiDescription = {
        type: 'Multiplayer',
        description: 'Play together with friends!'
    }

    const soloTarget = "#exampleModalCenter"
    const multiTarget = "#exampleModalCenter2"
    useEffect(() => {
        dispatch(clearName())
    }, [])
    return (
        <div className="menuPage">
            <h1>
                    MAIN MENU
                </h1>
            <div className="container">
                <div className="row cardContainer">
                    <div className="col">
                <div className="card  menuCard">
                <img className="card-img-top imageTop" src={fist} alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text cardDescription">{soloDescription.description}</p>
                <div className="buttonDiv" >
                    <MenuButton description={soloDescription} target={soloTarget}/>
                </div>
                </div>
                </div>
                    </div>
                    <div className="col">
                <div className="card  menuCard">
                <img className="card-img-top imageTop" src={fist} alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text cardDescription">{multiDescription.description}</p>
                <div className="buttonDiv">
                    <MenuButton description={multiDescription} target={multiTarget}/>
                </div>
                </div>
                </div>
                </div>
                    </div>
                    <div className="container aboutUsContainer">
                    <div className="jumbotron aboutUs justify-content-center">
                        <h1 className="display-5 aboutUsTitle">ABOUT US</h1>
                        <ul>
                            <div className={"row"}>
                            <div className={"col imageContainer"}>     
                            <li className="aboutMeList">
                                <img src={ashya} alt={"ashya manning"} className={"aboutTeam"}/>
                                <p>Tech Lead: Ashya Manning </p>
                                </li>
                                </div>
                                <div className={"col imageContainer"}>    
                            <li className="aboutMeList">
                                <img src={uduakabasi} alt={"ashya manning"} className={"aboutTeam"}/>
                                <p>UI/UX Manager: Uduakabasi Abasiurua</p>
                                </li>
                                </div>

                                <div className={"col imageContainer"}>    
                            <li className="aboutMeList">
                            <img src={sihame} alt={"ashya manning"} className={"aboutTeam"}/>
                                <p>PR Manager: Sihame Bazi</p>
                                </li>
                                </div>

                                <div className={"col imageContainer"}>    
                            <li className="aboutMeList">
                            <img src={johanne} alt={"ashya manning"} className={"aboutTeam"}/>
                                <p>PR Manager: Johanne Enama</p>
                                </li>
                                </div>

                                <div className={"col imageContainer"}>    
                            <li className="aboutMeList">
                            <img src={marvin} alt={"ashya manning"} className={"aboutTeam"}/>
                                <p>Project Manager: Marvin Thompson</p>
                                </li>
                                </div>
                            </div>
                        </ul>
                        <p className="lead">
                        <div className="jumboButtonDiv">
                        <a className="btn btn-primary btn-lg btn-block backToHomeMenu" href="#" role="button" onClick={() => history.push('/')}>Back to home</a>
                        </div>
                        </p>
                    </div>
                    </div>
            </div>
            <SoloTeamNameForm />
          <MultiplayerTeamNameForm />
        </div>
    )
}


export default Menu;

