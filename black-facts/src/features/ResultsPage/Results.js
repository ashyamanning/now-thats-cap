import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import "../ResultsPage/Css/results.css"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '640px',
    height: '480px',
    '& > *': {
      margin: theme.spacing(4),
    },
  },
}));

export default function Results(props) {
  const history = useHistory();
  const handleNewGame = () => {
    history.push("/menu")
  }
  const classes = useStyles();
  return (
    <div className="results_container">
      <Paper elevation={4} className="result">
        <Paper elevation={10} className="winner_scores">
          <div className="display_winners">
            <h2 className="winner_score_text">Winner is: Test</h2>
          </div>
          <div className="display_winners">
            <h2 className="winner_score_text">Score: Test</h2>
          </div>
        </Paper>
        <div className="button-div">
          <div className="button-div">
          <button type="button" class="btn btn-primary btn-lg btn-block" onClick={handleNewGame}>
            <p>New Game</p>
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-block">
            <p>New Category</p>
          </button>
          </div>
        </div>
      </Paper>
    </div>

  )
}

