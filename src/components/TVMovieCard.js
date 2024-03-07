function TVMovieCard({ movie, onDelete, button }) {
    return (
        <div className='card'>
            <div className='item-card'>
                <div className='card-image'>
                    <img src={movie.image === '' ? 'https://t3.ftcdn.net/jpg/00/63/63/46/360_F_63634678_7ea6wuF1yvCq7NKkCAGnYUmcrsQEpEdm.jpg' : movie.image} alt={movie.title} />
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
            {button ? <div className='delete-button'><button onClick={() => onDelete(movie)}>x</button></div> : null }
        </div>
    )
}

export default TVMovieCard;