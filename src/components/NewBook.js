import { useState } from'react';
import { Navigate } from'react-router-dom';
import BookCard from './BookCard';
import { useOutletContext } from 'react-router-dom';

function NewBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [, books, setBooks] = useOutletContext()

    const book = {
        title: title,
        author: author,
        genre: genre,
        image: image
    }

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleAuthorChange(e) {
        setAuthor(e.target.value);
    }

    function handleGenreChange(e) {
        setGenre(e.target.value);
    }

    function handleImageChange(e) {
        setImage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBook = {
            title: title,
            author: author,
            genre: genre,
            image: image
        }

        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(item => {
            setBooks([...books, item])
            setSubmitted(true)
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='book-title'>
                    Title: 
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="1984" 
                    value={title}
                    onChange={handleTitleChange}
                    id='book-title' 
                    />
                </label>

                <label htmlFor='book-author'>
                    Author: 
                    <input 
                    type="text" 
                    name="author" 
                    placeholder="George Orwell" 
                    value={author}
                    onChange={handleAuthorChange}
                    id='book-author'
                    />
                </label>
                
                <label htmlFor='book-genre'>
                    Genre: 
                    <input 
                    type="text" 
                    name="genre" 
                    placeholder="Science Fiction" 
                    value={genre}
                    onChange={handleGenreChange}
                    id='book-genre'
                    />
                </label>

                <label htmlFor='book-image'>
                    Image: 
                    <input 
                    type="text" 
                    name="image" 
                    placeholder="www.imagelink.com" 
                    value={image}
                    onChange={handleImageChange}
                    id='book-image'
                    />
                </label>
                <button type="submit">Add new</button>
                {submitted? <Navigate to="/books" /> : null}
            </form>
            <BookCard book={book} button={false}/>
        </>
    )
}

export default NewBook;