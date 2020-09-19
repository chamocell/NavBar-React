import React from 'react'
import './asset/NavTres.css'

const NavTres = () => {
    return (
        <>
          <header className="header">
            <div className="container">
              <div className="btn-menu">
                <label htmlFor="btn-menu">☰</label>
              </div>
              <div className="logo">
                <h1>ChamocellDev</h1>
              </div>
              <nav className="menu">
                <a href="#">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Blog</a>
                <a href="#">Login</a>
              </nav>
            </div>
          </header>  
          <div className="capa"></div>

          <input type="checkbox" id="btn-menu" />
          <div className="container-menu">
            <div className="cont-menu">
              <nav>
                <a href="#">Portafolio</a>
                <a href="#">Servicio</a>
                <a href="#">Suscribirse</a>
                <a href="#">Facebook</a>
                <a href="#">Youtube</a>
                <a href="#">Instagram</a>
              </nav>
              <label htmlFor="btn-menu">X</label> 
            </div>
          </div>
        </>
    )
}

export default NavTres
