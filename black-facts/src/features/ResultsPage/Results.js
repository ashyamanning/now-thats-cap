import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import Paper from '@material-ui/core/Paper';
import "../ResultsPage/Css/results.css"
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { makeStyles } from "@material-ui/styles";
import Score from "../Score/Score"

export default function Results(props) {
  const score = useSelector(state => state.score);
  const soloPlayerName = useSelector(state => state.soloPlayerName);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'black',
      borderRadius: '2rem',
    },
    paper: {
      backgroundColor: "black",
      border: '10px solid #FF7D00',
      borderRadius: '2rem',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius:'2rem',
    },
  }));

  const handleShow = toggle => {
    setShow(toggle);
  };

  const handleNewGame = () => {
    history.push("/menu")
  };

  const handleNewCategories = () => {
    history.push("/categories")
  };

  const handleClose = () => {
    history.push("/")
  };

  return (
    <div className="results_container">
      <Paper elevation={4} 
      className="result" 
       onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap" >
        <Paper elevation={10} className="winner_scores" >
          <div className="display_winners" >
            <h2 className="winner_score_text">WELL DONE {soloPlayerName}!!!</h2>
          </div>
          <div className="display_winners">
            <h3 className="winner_score_text">Score:  
             <span className="spanScore">
                <Score />
              </span>
            </h3>
          </div>
        </Paper>
        <div className="buttonDiv row" >
          <div className="col">
            <button type="button" class="btn btn-primary btn-lg btn-block results_button" onClick={handleNewGame}>
              New Game
          </button>
          </div>
          <div className="col">
            <button type="button" class="btn btn-primary btn-lg btn-block results_button" onClick={handleNewCategories}>
              New categories
          </button>
          </div>
        </div>
        <div className="closeGame-div">
          <button type="button" class="btn btn-primary btn-lg btn-block results_button_exit" onClick={handleClose}>
            Exit Game
          </button>
        </div>
      </Paper>
      <Confetti
        recycle={show}
        numberOfPieces={600}
      />
    </div>

  )
}


