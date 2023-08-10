import React from 'react'
import './TodoContainer.css';

function TodoItem({
  text, 
  completed,
  onComplete,
  onDelete
}){
    return(
      <li style={{
        padding: '0px 5px 15px 5px'
      }}>
        <div className='todoItemContainer'>
        <div
          onClick={onComplete}
          className='selectedItem'>
          <span className="material-symbols-outlined" style={{
            paddingLeft: '15px',
            paddingRight: '15px'
          }}>
              {`${completed ? "check_box": "check_box_outline_blank"}` }
          </span>
          <p className={`todoItemText ${completed && "todoItemTextCompleted"}`}> {text} </p>
        </div>
          <div 
            onClick={onDelete}
            className= 'closeItem' 
            style={{
              borderLeft: '1px solid black',
              height: '100%',
              gridColumn: '2',
              gridRow: '1',
              display: 'grid',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <span className="material-symbols-outlined" style={{
            }}>
            delete
            </span>  
          </div>

        </div>
      </li>
    );
  }
export {TodoItem};