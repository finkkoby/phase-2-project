import { NavLink, Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className='navbar'>
            <div>
                <NavLink to="/songs">Songs</NavLink>
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/tv-movies">TV & Movies</NavLink>
            </div>
            <div>
                <NavLink to="/add-new">Add New</NavLink>
                <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default NavBar;