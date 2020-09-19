import React from 'react'
import './asset/NavDos.css'
const NavDos = () => {
    return (
        <>
          <header>
              <h1 className="logo">ChamocellDev</h1>
              <input type="checkbox" id="chk"/>
              <label htmlFor="chk" className="mostrar-menu">
                  <i className="fas fa-bars"></i>
              </label>
              <nav className="nav-links">
                  <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">SERVICE</a></li>
                  <li><a href="#">TEMPLATE</a></li>
                  <li><a href="#">LOGIN</a></li>
                  
              <label htmlFor="chk" className="ocultar-menu">
              <i className="fas fa-times"></i></label> 
              </ul>   
              </nav>
          </header>
          <main>
           
          </main>
        </>
    )
}

export default NavDos
