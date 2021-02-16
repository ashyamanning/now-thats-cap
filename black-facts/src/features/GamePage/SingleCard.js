import React, { useState } from "react";
import foodData from "../../data/foodData";
import ReactCardFlip from "react-card-flip";
import Questions from "./Questions";
class SingleCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        <Questions/>
        {/* <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
          className="card"
        >
          <div className="front">
            <h1>#BLACKFACTS</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
          {/* <div className='modal'>
            
        </div> */}

          {/* <button onClick={this.handleClick}>Click to flip</button>
        </ReactCardFlip> */}
      </div> 
    );
  }
}
export default SingleCard;
