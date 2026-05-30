import { NavLink } from "react-router-dom";

function Head() {
    return (
        <header className="header">
            <div className="logo">
                Lab15 React Site
            </div>

            <nav className="nav">
                <NavLink to="/">Новости</NavLink>
                <NavLink to="/about">О проекте</NavLink>
                <NavLink to="/contacts">Контакты</NavLink>
            </nav>
        </header>
    );
}

export default Head;