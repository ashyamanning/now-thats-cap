
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Answer from './Answer'
import { useDispatch } from 'react-redux'
import {
   addScore,
   clearScore,
   incrementByAmount 
}  from '../Score/scoreSlice'
import selectCount from "../Score/scoreSlice"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function Questions({ question }) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [flip, setFlip] = useState(false)
  const [selectOption, setSelectOption] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const handleClick = (e) => {
    setSelectedAnswer(e.target.value)
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }; 
  const handleChange = (e) => {
    setSelectOption(e.target.value)
    console.log('choice', e.target.value)
  }
  const handleSubmit = () => {
     alert(`Submitting Name ${selectOption}`)
     if (selectedAnswer === question.answer) {
       debugger
       dispatch(addScore())
       debugger
     }
     // if correct, score ++
     // after submitted, disable
  }
  return (
    <div className='question'>
      <button type="button" onClick={handleOpen}>
        <label># BLACKFACTS</label>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              {console.log(question.question)}
                <h2 id="transition-modal-title">{question.question}</h2>
                <img src={question.image} width='300px'/>
                <div className='multiple-choice'>
                  {question.options.map((item, i) => {
                    return (
                      <div className='options' key={item.id}> 
                        <form onSubmit={handleSubmit}>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio" 
                                    name="inlineRadioOptions"
                                    id="inlineRadio1" 
                                    value={item}
                                    onChange={handleChange}
                                    checked={selectOption === item}
                                    onClick={handleClick}
                                    />
                            <label className="form-check-label" for="inlineRadio1">{item}</label>
                          </div>
                        </form>
                      </div>
                    )
                  })}
                </div>
                <div type="button" onClick={()=> setFlip(!flip)}>
                  {flip ? <Answer question={question}/> : <button type="button" onClick={handleSubmit}>Submit</button>}
                </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}