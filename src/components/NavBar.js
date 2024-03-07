import { NavLink, Link } from "react-router-dom";

function NavBar({ toggleNavBar, header }) {
    return (
        <nav className='navbar'>
            {header ? <div>
                <NavLink to="/songs">Songs</NavLink>
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/tv-movies">TV & Movies</NavLink>
            </div> : <div></div>}
            <div>
                <Link to="/">Home</Link>
                <NavLink to="/add-new">Add New</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;