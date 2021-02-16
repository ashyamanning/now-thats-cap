import React, { useState } from "react";
import foodData from "../../data/foodData";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Answer from './Answer'


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

export default function Questions() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [flip, setFlip] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              {console.log(foodData[0].question)}
              
                <h2 id="transition-modal-title">{foodData[0].question}</h2>
                <img src={foodData[0].image} width='300px'/>
                <div>
                  {foodData[0].options.map((item, i) => {
                    return (
                      <div className='options' key={item.id}> 
                        <p>{item}</p>
                      </div>
                    )
                  })}
                </div>
                <div type="button" onClick={()=> setFlip(!flip)}>
                 
                  {flip ? <Answer/> : foodData[0].question}
                </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}



