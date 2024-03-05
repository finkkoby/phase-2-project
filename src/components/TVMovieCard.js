function TVMovieCard({ movie }) {
    return (
        <div className="card">
            <div className='card-image'>
                <img src={movie.image} alt={movie.title} />
            </div>
            <div className='card-info'>
                <div className='card-info-title'>
                    <h2>"{movie.title}"</h2>
                    <h5><em>{movie.year}</em></h5>
                </div>
                <div className='card-info-body'>
                    <small>{movie.type}</small>
                </div>
            </div>
        </div>
    )
}

export default TVMovieCard;