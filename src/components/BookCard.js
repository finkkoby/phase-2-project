import React, { useState, useEffect } from 'react';
function BookCard({ book }) {
    return (
        <div className='card'>
            <div className='item-card'>
                <div className='card-image'>
                    <img src={book.image} alt={book.title} />
                </div>
                <div className='card-info'>
                    <div className='card-info-title'>
                        <h2>"{book.title}"</h2>
                        <h5>by <em>{book.author}</em></h5>
                    </div>
                    <div className='card-info-body'>
                        <small>{book.genre}</small>
                    </div>
                </div>
            </div>
            <div className='delete-button'>
                <button>x</button>
            </div>
        </div>
    )
}

export default BookCard;