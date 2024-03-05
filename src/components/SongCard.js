function SongCard({ song }) {
    return (
        <div className="card">
            <div className='card-image'>
                <img src={song.image} alt={song.album} />
            </div>
            <div className='card-info'>
                <div className='card-info-title'>
                    <h2>"{song.title}"</h2>
                    <h5>from <em>{song.album}</em></h5>
                </div>
                <div className='card-info-body'>
                    <p>{song.artist}</p>
                    <small>{song.length}</small>
                </div>
            </div>
        </div>
    );
}

export default SongCard;