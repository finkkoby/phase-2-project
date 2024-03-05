import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/books`)
       .then(res => res.json())
       .then(books => setBooks(books));
    }, []);

    function handleDelete(item) {
        fetch(`http://localhost:3000/books/${item.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => setBooks(books.filter(book => book.id !== item.id)))
    }

    const booksList = books.map(book => {
        return <BookCard book={book} key={book.id} onDelete={handleDelete}/>
    })

    return (
        <div className="item-list">
            {booksList}
        </div>
    )
}

export default Books;