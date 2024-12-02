
import './NavBar.css';

export default function NavBar(){
    return (
        <header className="Header">
            <nav className = "navbar">
                <img src="/assets/logo.png" alt="error" className='nav-logo'/>
                <span className='reactFacts'>ReactFacts</span>
            </nav>
        </header>
    )
}