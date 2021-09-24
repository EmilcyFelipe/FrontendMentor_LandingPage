import React from 'react'
import Logo from '../../images/logo.svg'
import './NavBar.css'
import Button from '../Button/Button'
import hamburguer from '../../images/icon-hamburger.svg'
import cross from '../../images/icon-close.svg'

export default function NavBar(){
    const [hamb,setHamb] = React.useState(false);
    function handleHamburguer(e){
        setHamb(!hamb);
        if(hamb){
            document.querySelector('.menu-nav').style.display='none'
            e.currentTarget.src=hamburguer
        }else{
            document.querySelector('.menu-nav').style.display='flex'
            e.currentTarget.src=cross
        }
    }
    return(
        <>
        <div className="navBar-wrapper">
            <div className="logo-wrapper">
                <a href="#1-slide"><img src={Logo} alt="Logo"/></a>
            </div>
            <div className="menu-nav">
                <a className="menu-option" href="#1-slide">Pricing</a>
                <a className="menu-option" href="#1-slide">Product</a>
                <a className="menu-option" href="#1-slide">About Us</a>
                <a className="menu-option" href="#1-slide">Careers</a>
                <a className="menu-option" href="#1-slide">Community</a>
            </div>
            <div className="nav-button">
                <Button/>
            </div>
            <div className="nav-hamburguer" >
                <img src={hamburguer} alt="" onClick={handleHamburguer}/>
            </div>
        </div>
        </>
    )
}