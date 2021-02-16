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
    const soloDescription2 = {
        type: 'Home',
        description: 'Back to Home'
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
                    <div class="jumbotron aboutUs">
  <h1 class="display-4">ABOUT US</h1>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Back to home</a>
  </p>
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