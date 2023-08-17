import React from 'react'
import './TodoItem.css';

function TodoItem({
  item, 
  completed,
  onComplete,
  onDelete
}){
  const [details, setDetails] = React.useState(false);
  return(
    <li style={{
      padding: '0px 5px 15px 5px'
    }}>
      <div className={`todoItemContainer ${details && 'todoItemContainerDetailed'}`}>
        <div
          onClick={onComplete}
          className='selectedItem'>
          <span className="material-symbols-outlined" style={{
            paddingLeft: '15px',
            paddingRight: '15px'
            }}
          >
              {`${completed ? "check_box": "check_box_outline_blank"}` }
          </span>
          <p className={`todoItemText ${completed && "todoItemTextCompleted"}`}> 
            {item.title} 
          </p>
          {item.prio && 
            <span className="material-symbols-outlined" style={{paddingLeft: '15px'}}>
                flag
            </span>
          }
          
        </div>
        <div 
          onClick={() =>{
            setDetails(state => !state)
          }}
          className= 'dropItem' 
        >
          <span className="material-symbols-outlined" style={{
          }}>
          {`${details ? "expand_circle_up":"expand_circle_down"}`}
          </span>  
        </div>
        
        <div 
          onClick={onDelete}
          className= 'closeItem' 
        >
          <span className="material-symbols-outlined" style={{
          }}>
          delete
          </span>  
        </div>
        
        {details &&
          <div className='detailContainer'> 
            <div className='comentsContainer'>
              {item.coments}
            </div>
            <div className='catContainer'>
              <p>{item.cat}</p>
            </div>
          </div>
        }
      </div>
    </li>
  );
}
export {TodoItem};