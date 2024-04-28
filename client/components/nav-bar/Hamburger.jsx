import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Hamburger.scss'

import { AnimatePresence, motion } from 'framer-motion';


export default function Hamburger({ isDropDown, dropDown }) {

    const scrollToElementAndClose = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
        dropDown()
    }

    return (
        <>
            <button onClick={dropDown} className='navbar-hamburger-button'>
                {isDropDown ? <CloseIcon className='navbar-icon cross' /> : <MenuIcon className='navbar-icon' />}
            </button>
            <AnimatePresence>
                {isDropDown &&
                    <motion.div initial={{ opacity: 0.5, x: 100 }} transition={{ duration: 0.25 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} className='navbar-hamburger-container'>

                        <ul className="navbar-hamburger-link-container">
                            <li>
                                <a href="#aboutus" onClick={() => scrollToElementAndClose('aboutus')}>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#location" onClick={() => scrollToElementAndClose('location')}>
                                    Location
                                </a>
                            </li>
                            <li>
                                <a href="#menu" onClick={() => scrollToElementAndClose('menu')}>
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => scrollToElementAndClose('contact')}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}