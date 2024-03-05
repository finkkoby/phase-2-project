import React, { useState, useEffect } from'react';
import TVMovieCard from '../components/TVMovieCard';

function TVMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/tv-movies`)
            .then(res => res.json())
            .then(movies => setMovies(movies));
    }, [])

    const moviesList = movies.map(movie => {
        return <TVMovieCard movie={movie} key={movie.id} />
    })

    return (
        <div className='item-list'>
            {moviesList}
        </div>
    )
}

export default TVMovies;