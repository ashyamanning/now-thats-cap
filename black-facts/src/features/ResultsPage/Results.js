import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    paddingTop: '10%',
    '& > *': {
      width: theme.spacing(80),
      height: theme.spacing(60),
    },
  },
}));



export default function Results(props) {

  const classes = useStyles();
    return (
      <div className={classes.root}>
      <Paper elevation={3} >
        <Paper elevation={10}>
          <h2>Winner is: Test</h2>
        </Paper>
        <Paper elevation={3}>
          <h2>What can Be</h2>
        </Paper>
      </Paper>
    </div>
  )
  
}

