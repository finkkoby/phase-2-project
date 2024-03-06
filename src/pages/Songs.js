import { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';

function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/songs`)
         .then(res => res.json())
         .then(songs => setSongs(songs));
    }, []);

    function handleDelete(item) {
        fetch(`http://localhost:3000/songs/${item.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => setSongs(songs.filter(song => song.id !== item.id)))
    }

    const songsList = songs.map(song => {
        return <SongCard song={song} key={song.id} onDelete={handleDelete} button={true}/>
    })

    return (
        <div className='item-list'>
            {songsList}
        </div>
    )
}

export default Songs;