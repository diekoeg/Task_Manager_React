import React from 'react'

function TodoAddButton({showModal}) {


  return (
    <div style={{
      display:'grid',
      justifyContent: 'center',
      alignContent: 'center',
      paddingBottom: '15px',
      gridRow: '2',
      zIndex:'1'
    }}>
      <span 
        onClick={showModal}
        className="material-symbols-outlined" style={{
          gridRow: '2',
          }}>
      add_circle
      </span>
{/*       <button onClick="">
        +
      </button> */}
    </div>
  )
}

export {TodoAddButton};