import React from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navContainer'>
            <div className='logo'>
                <Link href="/">
                    <img src={logo} className="logoImg" alt="PlantPal" />
                    <p className='logoText'>PlantPal</p>
                </Link>
            </div>
            <div className='links'>
                <Link to="home" smooth={true} duration={500} className='link'>Home</Link>
                <Link to="aboutUs" smooth={true} duration={500} className='link'>About Us</Link>
                <Link to="HelpSupport" smooth={true} duration={500} className='link'>Help & Support</Link>
            </div>
        </div>
    )
}

export default Navbar
