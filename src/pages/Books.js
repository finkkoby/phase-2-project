import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/books`)
       .then(res => res.json())
       .then(books => setBooks(books));
    }, []);

    const booksList = books.map(book => {
        return <BookCard book={book} key={book.id}/>
    })

    return (
        <div className="item-list">
            {booksList}
        </div>
    )
}

export default Books;