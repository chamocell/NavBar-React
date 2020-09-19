import React from 'react'
import './asset/NavBar.css'
import petro1 from '../img/petro1.png'

const NavBar = () => {
    return (
        <>
        <header>
        <nav>
            <div className="menu">
                <div className="brand">
                    <img src={petro1} alt=""/>
                </div>
                <div className="links">
                    <a href="#">Cuesos</a>
                    <a href="#">Plataforma</a>
                    <a href="#">Ayuda</a>
                    <a href="#">App</a>
                </div>
            </div>

            <div className="auth">
                <button className="login">Login</button>
            </div>
        </nav>
        </header>  
        <main>
        
        </main>
        </>
    )
}

export default NavBar
