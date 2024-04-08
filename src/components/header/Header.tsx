import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    Nicholas Boari
                </a>
                <div className="nav__menu">
                    <ul className="nav_list grid">
                        <li className="nav__item">
                            <a href="" className="nav__link">Inicio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">Projetos</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">Habilidades</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>)
}

export default Header