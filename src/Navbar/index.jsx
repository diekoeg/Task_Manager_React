import React from 'react'
import './Navbar.css'

function Navbar() {
  // Para el manejo de la navbar del panel derecho
  const [navbarState, setNavbarState] = React.useState(1); 

  const navs = [
    {text: "Progress", selected: true, value: 1},
    {text: "Tasks completed", selected: false, value: 2},
    {text: "Timer", selected: false, value: 3}
  ]



  return (
    <div style={{
      gridRow: 1,
      width: '100%'
    }}>
      <nav className='nav-links'>
        <ul>
          {navs.map((page) => (
            <li key={page.value} 
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