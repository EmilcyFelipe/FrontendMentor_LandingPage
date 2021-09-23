import React from 'react'
import Logo from '../../images/logo.svg'
import './NavBar.css'
import Button from '../Button/Button'

export default function NavBar(){
    return(
        <>
        <div className="navBar-wrapper">
            <div className="logo-wrapper">
                <a href=""><img src={Logo} alt="Logo"/></a>
            </div>
            <div className="menu-nav">
                <a className="menu-option" href="">Pricing</a>
                <a className="menu-option" href="">Product</a>
                <a className="menu-option" href="">About Us</a>
                <a className="menu-option" href="">Careers</a>
                <a className="menu-option" href="">Community</a>
            </div>
            <Button/>
        </div>
        </>
    )
}