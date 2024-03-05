import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className='navbar'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/songs">Songs</NavLink>
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/tv-movies">TV & Movies</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;