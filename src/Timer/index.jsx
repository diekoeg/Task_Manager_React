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
          <div className='individual-container'>
            <input className='input-time'
              disabled={isRunning && true}
              type="text" 
              value={minutes} 
              onChange={(event) =>{
                setMinutes(event.target.value);
              }}
            /> 
            <span>{'Mins'}</span>
          </div>
          <p>:</p>
          <div className='individual-container'>
            <input className='input-time' 
              disabled={isRunning && true}
              type="text" 
              value={seconds} 
              onChange={(event) =>{
                setSeconds(event.target.value);
              }}
            /> 
            <span>{'Sec'} </span>
          </div>
          
        </div>
        <div className='container-buttons'>
          <button className='button-time button-play' 
            onClick={() => {
              if(seconds === 0 && minutes === 0 ){
                setIsRunning(false)
                window.alert('Add Time')
              }else{
                setIsRunning(true)
              }
            }}>
              <span className="material-symbols-outlined">
                play_arrow
              </span>
            </button>
            <button className='button-time button-pause' 
            onClick={() => {
              setIsRunning(false)
            }}>
              <span className="material-symbols-outlined">
                pause
              </span>
            </button>

            <button className='button-time button-stop' 
            onClick={() => {
              setIsRunning(false)
              setMinutes(0)
              setSeconds(0)
            }}>
              <span className="material-symbols-outlined ">
                stop
              </span>
            </button>
        </div>
        
      </div>
      
    )
}

export {Timer}