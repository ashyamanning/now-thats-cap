import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MenuButton from './MenuButton'
import SoloTeamNameForm from './SoloTeamNameForm'
import '../MenuPage/css/menu.css'

const Menu = () => {
    const history = useHistory()
    const soloDescription = {
        type: 'Solo',
        description: 'Play a solo game!'
    }
    const multiDescription = {
        type: 'Multiplayer',
        description: 'Play together with friends!'
    }
    // the actual menu page 
    // child components will be rendered in the return below!
    
    return (
        <div className="menuPage">
            <div className="container">
                <h1>
                    MAIN MENU
                </h1>
            
                <div className="buttonDiv" data-toggle="modal" data-target="#exampleModalCenter">
                    <MenuButton description={soloDescription}/>
                </div>
                <div className="buttonDiv">
                    <MenuButton description={multiDescription}/>
                </div>
            
            </div>
            <SoloTeamNameForm />
        </div>
    )
}


export default Menu;
