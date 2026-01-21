import React from 'react'
import logo from '../assets/logo.png'
import './Footer.css'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerLeft'>
                <Link href="/">
                    <img src={logo} className="footerLogoImg" alt="Vite logo" />
                    <p className='footerLogoText'>PlantPal</p>
                </Link>
            </div>
            <div className='footerRight'>
                <Link to="home" smooth={true} duration={500} className='footerLink' >Home</Link>
                <Link to="aboutUs" smooth={true} duration={500} className='footerLink' >About Us</Link>
                <Link to="HelpSupport" smooth={true} duration={500} className='footerLink' >Help & Support</Link>
            </div>
        </div>
    )
}

export default Footer
