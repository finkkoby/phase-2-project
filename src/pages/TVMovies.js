import React, { useState, useEffect } from'react';
import TVMovieCard from '../components/TVMovieCard';
import { useOutletContext } from'react-router-dom';

function TVMovies() {
    const [toggleNavBar, , , , , movies, setMovies] = useOutletContext()

    useEffect(() => {
        toggleNavBar(true);
    }, [])

    function handleDelete(item) {
        fetch(`http://localhost:3000/tv-movies/${item.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => setMovies(movies.filter(movie => movie.id !== item.id)))
    }

    const moviesList = movies.map(movie => {
        return <TVMovieCard movie={movie} key={movie.id} onDelete={handleDelete} button={true}/>
    })

    return (
        <div className='item-list'>
            {moviesList}
        </div>
    )
}

export default TVMovies;