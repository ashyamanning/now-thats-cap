import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MenuButton from './MenuButton'
import SoloTeamNameForm from './SoloTeamNameForm'
import MultiplayerTeamNameForm from './MultiplayerTeamNameForm'
import { clearName } from './playerNameSlices/soloTeamNameSlice'
import '../MenuPage/css/menu.css'

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
                #NowThatsCap
            </h1>
            <h1>
                    MAIN MENU
                </h1>
            <div className="container">
                <div className="row cardContainer">
                    <div className="col">
                <div className="card  menuCard">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text">{soloDescription.description}</p>
                <div className="buttonDiv" >
                    <MenuButton description={soloDescription} target={soloTarget}/>
                </div>
                </div>
                </div>
                    </div>
                    <div className="col">
                <div className="card  menuCard">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text">{multiDescription.description}</p>
                <div className="buttonDiv">
                    <MenuButton description={multiDescription} target={multiTarget}/>
                </div>
                </div>
                </div>
                </div>
                    </div>
                    <div className="container aboutUsContainer">
                    <div className="jumbotron aboutUs justify-content-center">
                        <h1 className="display-4">ABOUT US</h1>
                        <ul>
                            <li className="aboutMeList">Tech Lead: Ashya Manning</li>
                            <li className="aboutMeList">UI/UX Manager: Uduakabasi Abasiurua</li>
                            <li className="aboutMeList">PR Manager: Sihame Bazi</li>
                            <li className="aboutMeList">PR Manager: Johanne Enama</li>
                            <li className="aboutMeList">Project Manager: Marvin Thompson</li>
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

