import React, { useEffect} from 'react';
import { useTimer } from 'react-timer-hook';
import { useHistory } from 'react-router-dom'

const NewTimer =  ({ expiryTimestamp }) => {
    const history = useHistory()

    useEffect(() => {
        expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 90);
    }, [])

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
      console.log(seconds)

      useEffect(() => {
          if (!isRunning) {
              history.push('/results')
          }
      }, )

    return (
      <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 90);
        restart(time)
      }}>Restart</button> */}
    </div>
    )
}

export default NewTimer