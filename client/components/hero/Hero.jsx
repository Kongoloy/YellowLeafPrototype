import Logo from "./Logo"
import "./Hero.scss"

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-img-container">
                <div className="hero-blackdrop-filter" />
                <div className="hero-welcome-container">
                    <Logo color={'#fda71c'} />
                    <h1>YellowLeaf</h1>
                    <h2>8:00 - 17:00</h2>
                </div>
            </div>

        </div>
    )
}