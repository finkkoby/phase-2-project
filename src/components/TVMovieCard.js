function TVMovieCard({ movie, onDelete }) {
    return (
        <div className='card'>
            <div className='item-card'>
                <div className='card-image'>
                    <img src={movie.image} alt={movie.title} />
                </div>
                <div className='card-info'>
                    <div className='card-info-title'>
                        <h2>"{movie.title}"</h2>
                        <h5><em>{movie.year}</em></h5>
                    </div>
                    <div className='card-info-body'>
                        <small>{movie.type === 'tv' ? 'TV' : 'Movie'}</small>
                    </div>
                </div>
            </div>
            <div className='delete-button'>
                <button onClick={() => onDelete(movie)}>x</button>
            </div>
        </div>
    )
}

export default TVMovieCard;