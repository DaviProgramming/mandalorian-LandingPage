import React from 'react'
import logo from '../css/Assets/star-wars-logo-png-transparent.png'
import '../css/main.css'
import hamburguer from '../css/Assets/hamburger_button_menu_icon_155296.png'
import close from '../css/Assets/close-button.png'
import { CloseButton } from 'react-bootstrap'
const Navbar = () => {

    const hamburguerActions = {
        call() {
            let menuHamburguer = document.querySelector(".hamburguer-navbar");

            menuHamburguer?.classList.remove("hide");
            menuHamburguer?.classList.add("fade");
        },
        hide() {
            let menuHamburguer = document.querySelector(".hamburguer-navbar");
            menuHamburguer?.classList.add("hide");
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-image">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar-hamburguer" onClick={hamburguerActions.call} >
                        <img src={hamburguer} alt="" />
                    </div>
                </div>
            </nav>

            <nav className='hamburguer-navbar hide'>
                <div className="hamburguer-container">
                    <div className="close-button" onClick={hamburguerActions.hide}>
                        <button><img src={close} alt="" /></button>
                    </div>
                    <div className="hamburguer-itens">
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Watch Now</a></li>
                            <li><a href=""> Trailer</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar