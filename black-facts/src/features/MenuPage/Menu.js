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
                <div className="row cardContainer">
                    <div className="col">

                <div class="card  menuCard">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                <p className="card-text">{soloDescription.description}</p>
                <div className="buttonDiv" >
                    <MenuButton description={soloDescription}/>
                </div>
                </div>
                </div>
                    </div>
                    <div className="col">
                <div class="card  menuCard">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                <p className="card-text">{multiDescription.description}</p>
                <div className="buttonDiv">
                    <MenuButton description={multiDescription}/>
                </div>
                </div>
                </div>
                </div>
                    </div>
            
            </div>
            <SoloTeamNameForm />
        </div>
    )
}


export default Menu;

// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>