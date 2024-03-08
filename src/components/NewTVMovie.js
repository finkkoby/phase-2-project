import { useState } from'react';
import { Navigate } from 'react-router-dom';
import TVMovieCard from './TVMovieCard';
import { useOutletContext } from 'react-router-dom';

function NewTVMovie() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [tv, setTv] = useState(false);
    const [movie, setMovie] = useState(false);
    const [image, setImage] = useState('');
    const [submited, setSubmitted] = useState(false);

    const [, , , , , movies, setMovies] = useOutletContext()

    const tvMovie = {
        title: title,
        year: year,
        type: tv ? 'tv' : 'movie',
        image: image
    }    

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleYearChange(e) {
        setYear(e.target.value);
    }

    function handleTVChange(e) {
        if(tv === movie) {
            setTv(!tv)
        } else {
            setTv(!tv)
            setMovie(!movie)
        }
    }

    function handleMovieChange(e) {
        if(movie === tv) {
            setMovie(!movie)
        } else {
            setMovie(!movie)
            setTv(!tv)
        }
    }

    function handleImageChange(e) {
        setImage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newMovie = {
            title: title,
            year: year,
            type: tv? 'tv' :'movie',
            image: image
        }

        fetch('http://localhost:3000/tv-movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(item => {
            setMovies([...movies, item])
            setSubmitted(true)
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='tv-movie-title'>
                    Title: 
                    <input
                    type="text" 
                    name="title" 
                    placeholder="The Devil Wears Prada" 
                    value={title}
                    onChange={handleTitleChange} 
                    id='tv-movie-title' />
                </label>

                <label htmlFor='tv-movie-year'>
                    Year:             
                    <input 
                    type="text" 
                    name="year" 
                    placeholder="2006" 
                    value={year} 
                    onChange={handleYearChange} 
                    id='tv-movie-year' 
                    />
                </label>

                <div>
                    <label htmlFor='tv-type'>
                        <input
                        type="radio" 
                        name="tv"  
                        checked={tv}
                        onChange={handleTVChange}
                        id='tv-type' 
                        />
                        TV
                    </label>

                    <label htmlFor='movie-type'>
                        <input
                        type="radio" 
                        name="movie"  
                        checked={movie}
                        onChange={handleMovieChange}
                        id='movie-type' 
                        />
                        Movie
                    </label>
                </div>

                <label htmlFor='tv-movie-image'>
                    Image: 
                    <input 
                    type="text" 
                    name="image" 
                    placeholder="www.imagelink.com" 
                    value={image}
                    onChange={handleImageChange}
                    id='tv-movie-image'
                    />
                </label>

                <button type="submit">Add new</button>
                {submited? <Navigate to="/tv-movies" /> : null}
            </form>
            <TVMovieCard movie={tvMovie} button={false}/>
        </>
    )
}

export default NewTVMovie;