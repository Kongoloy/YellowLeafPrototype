import './Header.scss'
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PlaceIcon from '@mui/icons-material/Place';
export default function Header() {
    return (
        <header className='header-container'>
            <nav className="navbar-container">
                <h1>YellowLeaf</h1>
                <ul className="navbar-link-container">
                    <li>
                        <a href="#aboutus">
                            <InfoIcon className='navbar-icon' />
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#location">
                            <PlaceIcon className='navbar-icon' />
                            Location
                        </a>
                    </li>
                    <li>

                        <a href="#menu">
                            <MenuBookIcon className='navbar-icon' />
                            Menu
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}