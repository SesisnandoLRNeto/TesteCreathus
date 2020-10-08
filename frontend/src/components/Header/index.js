import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { RiFacebookBoxLine } from 'react-icons/ri'
import logo from '../../assets/creathus.png'

import './styles.css'

const Header = () => (
    <header id='main-header'>
        <img src={logo} alt='Logo' />
        <ul>
        <a 
        href="https://www.facebook.com/institutocreathus" 
        aria-label="Facebook (opens in a new tab)" 
        target="_blank" 
        rel="noopener noreferrer">
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <RiFacebookBoxLine/>
            </IconContext.Provider>
        </a>
        <a 
        href="https://www.instagram.com/institutocreathus/" 
        aria-label="Instagram (opens in a new tab)" 
        target="_blank" 
        rel="noopener noreferrer">
           <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <FaInstagram />
           </IconContext.Provider>
        </a>
        <a 
        href="https://www.linkedin.com/company/instituto-creathus/" 
        aria-label="LinkedIn (opens in a new tab)" 
        target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <FaLinkedin/>
            </IconContext.Provider>
        </a>
        </ul>
    </header>  
);

export default Header;