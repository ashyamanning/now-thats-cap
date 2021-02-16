import React, { useState, useEffect } from 'react'
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
            <div className="container">
                <h1>
                    MAIN MENU
                </h1>
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
                    <div className="jumbotron aboutUs">
                        <h1 className="display-4">ABOUT US</h1>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => history.push('/')}>Back to home</a>
                        </p>
                    </div>
            </div>
            <SoloTeamNameForm />
            <MultiplayerTeamNameForm />
        </div>
    )
}


export default Menu;

