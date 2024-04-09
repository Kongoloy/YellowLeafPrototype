import './Header.css'
export default function Header() {
    return (
        <header className='header-container'>
            <nav className="navbar-container">
                <h1>YellowLeaf</h1>
                <ul className="navbar-link-container">
                    <li>
                        <a href="#aboutus">About us</a>

                    </li>
                    <li>
                        <a href="#location">Location</a>
                    </li>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>

                </ul>
            </nav>
        </header>
    )
}