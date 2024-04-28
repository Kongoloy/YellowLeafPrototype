import './Header.scss'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Hamburger from './Hamburger';
import { useState, useEffect } from 'react';
import BlackDropFilter from '../hero/BlackDropFilter';

const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView();
    }
}

export default function Header() {
    const [isDropDown, setIsDropDown] = useState(false);
    const dropDown = () => {
        setIsDropDown(!(isDropDown))
    }

    return (
        <>
            {isDropDown && <BlackDropFilter position='fixed' width='100vw' height='100vh' />}
            <header className='header-container'>
                <nav className="navbar-container">
                    <h1>YellowLeaf</h1>
                    <ul className="navbar-link-container">
                        <li>
                            <a href="#aboutus" onClick={() => scrollToElement('aboutus')}>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#location">
                                Location
                            </a>
                        </li>
                        <li>
                            <a href="#menu" onClick={() => scrollToElement('menu')}>
                                Menu
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => scrollToElement('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className='navbar-icon-container'>
                        <a href="https://www.facebook.com/YellowLeafSaima7/">
                            <FacebookIcon className='navbar-icon' />
                        </a>
                        <a href="https://www.instagram.com/yellowleaf.coffee/">
                            <InstagramIcon className='navbar-icon' />
                        </a>
                        <Hamburger isDropDown={isDropDown} dropDown={dropDown} />
                    </div>
                </nav>
            </header>

        </>
    )
}