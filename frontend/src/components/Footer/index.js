import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IconContext } from 'react-icons'

import './styles.css'

const Footer = () => (
    <footer id='main-footer'>
        <IconContext.Provider  value={{ color: "white", className: "icon" }}>
            <HiOutlineLocationMarker/>
        </IconContext.Provider>
        <div></div>
        <p id='endereco'>
            Rua Dr. Elviro Dantas nº 587, Loteamento Parque Sucupiras, CEP: 69082-640, Bairro Coroado, Manaus, Amazonas.
        </p>
    </footer>  
);

export default Footer;