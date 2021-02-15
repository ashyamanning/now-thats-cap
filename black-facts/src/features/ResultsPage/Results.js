import React from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import "../CategoryPage/Css/results.css"

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
            <Button variant="contained" color="primary" className="results_button">
              New Game
          </Button>
          </div>
          <div className="button-div">
            <Button variant="contained" color="primary" className="results_button">
              New Category
          </Button>
          </div>
        </div>
      </Paper>
    </div>

  )
}

