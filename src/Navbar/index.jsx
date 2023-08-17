import React from 'react'
import './Navbar.css'
import { TodoContext } from '../TodoContext'

function Navbar() {

  const navs = [
    {text: "Progress", selected: true, value: 1},
    {text: "Tasks completed", selected: false, value: 2},
    {text: "Timer", selected: false, value: 3}
  ]

  const{
    setNavbarState
  } = React.useContext(TodoContext);

  const[newNavbar, setNewNavbar] = React.useState(navs);

  return (
    <div style={{
      gridRow: 1,
      width: '100%',
      borderBottom:'1px solid black'
    }}>
      <nav className='nav-links'>
        <ul>
          {newNavbar.map((page) => (
            <li key={page.value} 
                onClick={() =>{

                  if (page.value === 1){
                    navs[0].selected = true;
                    navs[1].selected = false;
                    navs[2].selected = false;
                  } else if (page.value === 2) {
                    navs[0].selected = false;
                    navs[1].selected = true;
                    navs[2].selected = false;
                  } else{
                    navs[0].selected = false;
                    navs[1].selected = false;
                    navs[2].selected = true;
                  }
                  setNavbarState(page.value);
                  setNewNavbar(navs)
                }}
              className={`${page.selected && 'nav-links--selected'}`}> 
              {page.text} 
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export {Navbar}
/* 
{pages.map((page) => (
  <MenuItem key={page} onClick={handleCloseNavMenu}>
    <Typography textAlign="center">{page}</Typography>
  </MenuItem> */