import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { useOutletContext } from'react-router-dom';

function Books() {
    const [toggleNavBar, books, setBooks ] = useOutletContext()

    useEffect(() => {
        toggleNavBar(true);
    }, [])

    function handleDelete(item) {
        fetch(`http://localhost:3000/books/${item.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => setBooks(books.filter(book => book.id !== item.id)))
    }

    const booksList = books.map(book => {
        return <BookCard book={book} key={book.id} onDelete={handleDelete} button={true}/>
    })

    return (
        <div className="item-list">
            {booksList}
        </div>
    )
}

export default Books;