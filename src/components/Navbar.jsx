// import React from 'react'
// import { Link } from 'react-scroll';
// import './Navbar.css'

// const Navbar = () => {
//     return (
//         <div className='navContainer'>
//             <div className='logo'>
//                 <Link href="/">
//                     <img src={logo} className="logoImg" alt="PlantPal" />
//                     <p className='logoText'>PlantPal</p>
//                 </Link>
//             </div>
//             <div className='links'>
//                 <Link to="home" smooth={true} duration={500} className='link'>Home</Link>
//                 <Link to="aboutUs" smooth={true} duration={500} className='link'>About Us</Link>
//                 <Link to="HelpSupport" smooth={true} duration={500} className='link'>Help & Support</Link>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="nav-container">
            <div className="logo">
                <a href="/" className="logo-link">
                    <img src={logo} className="logo-img" alt="PlantPal" />
                    <p className="logo-text">PlantPal</p>
                </a>
            </div>

            {/* Mobile menu button */}
            <button
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop links */}
            <div className="links desktop-links">
                <Link to="home" smooth={true} duration={500} className='link'>Home</Link>
                <Link to="aboutUs" smooth={true} duration={500} className='link'>About Us</Link>
                <Link to="HelpSupport" smooth={true} duration={500} className='link'>Help & Support</Link>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="home" smooth={true} duration={500} className='link'>Home</Link>
                    <Link to="aboutUs" smooth={true} duration={500} className='link'>About Us</Link>
                    <Link to="HelpSupport" smooth={true} duration={500} className='link'>Help & Support</Link>
                </div>
            )}

        </nav>
    );
};

export default Navbar;