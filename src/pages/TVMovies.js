import React, { useState, useEffect } from'react';
import TVMovieCard from '../components/TVMovieCard';

function TVMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/tv-movies`)
            .then(res => res.json())
            .then(movies => setMovies(movies));
    }, [])

    function handleDelete(item) {
        fetch(`http://localhost:3000/tv-movies/${item.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => setMovies(movies.filter(movie => movie.id !== item.id)))
    }

    const moviesList = movies.map(movie => {
        return <TVMovieCard movie={movie} key={movie.id} onDelete={handleDelete}/>
    })

    return (
        <div className='item-list'>
            {moviesList}
        </div>
    )
}

export default TVMovies;