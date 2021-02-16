import React from 'react';
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import Questions from './Questions';

class Card extends React.Component {
    constructor () {
        super()
        this.state = {
            isFlipped: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

  

    render() {
    return (
      <div></div>
    )
  }
}

export default Card;