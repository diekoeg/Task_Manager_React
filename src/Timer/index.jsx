import React from 'react'
import './styles.css'
import { TimerContext } from '../TodoContext/TimerContext'

function Timer() {
  const {
    setIsRunning,
    isRunning,
    minutes, 
    setMinutes,
    seconds,
    setSeconds,
  } = React.useContext(TimerContext)


    return (
      <div className='container'>
        <div className='time-container'>
          <input className='input-time'
            disabled={isRunning && true}
            type="text" 
            value={minutes} 
            onChange={(event) =>{
              setMinutes(event.target.value);
            }}
          /> 
          <p>:</p>
          <input className='input-time' 
            disabled={isRunning && true}
            type="text" 
            value={seconds} 
            onChange={(event) =>{
              setSeconds(event.target.value);
            }}
          /> 
        </div>

        <span>{'Mins'} {'Sec'} </span>
        <div>
          <button className='button-play' 
            onClick={() => {
              setIsRunning(true)
            }}>
              <span className="material-symbols-outlined">
                play_arrow
              </span>
            </button>
            <button className='button-play' 
            onClick={() => {
              setIsRunning(false)
            }}>
              <span className="material-symbols-outlined">
                pause
              </span>
            </button>
        </div>
        
      </div>
      
    )
}

export {Timer}