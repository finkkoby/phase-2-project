import { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';

function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/songs`)
         .then(res => res.json())
         .then(songs => setSongs(songs));
    }, []);

    const songsList = songs.map(song => {
        return <SongCard song={song} key={song.id} />
    })

    return (
        <div className='item-list'>
            {songsList}
        </div>
    )
}

export default Songs;