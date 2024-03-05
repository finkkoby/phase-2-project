import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/songs">Songs</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/tv-movies">TV & Movies</NavLink>
        </nav>
    )
}

export default NavBar;