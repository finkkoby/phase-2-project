import { Link, useOutletContext } from'react-router-dom';
import { useEffect } from'react';

function Home() {
    const [toggleNavBar] = useOutletContext()
    useEffect(() => {
        toggleNavBar(false);
    }, [])
    return (
        <div className='home-body'>
            <h4>Welcome to my favorites!</h4>
            <Link to="/songs" className='home-link'>Songs</Link>
            <Link to="/books" className='home-link'>Books</Link>
            <Link to="/tv-movies" className='home-link'>TV & Movies</Link>
        </div>
    )
}

export default Home;