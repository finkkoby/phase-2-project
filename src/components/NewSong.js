import { useState } from'react';

function NewSong() {
    const [title, setTitle] = useState('');
    return (
        <form>
            <label htmlFor='song-title'>Title: </label>
            <input type="text" name="title" placeholder="Title" id='song-title' />

            <label htmlFor='song-artist'>Artist: </label>
            <input type="text" name="artist" placeholder="Artist" id='song-artist' />

            <label htmlFor='song-album'>Album: </label>
            <input type="text" name="album" placeholder="Album" id='song-album' />

            <label htmlFor='song-length'>Duration: </label>
            <input type="text" name="length" placeholder="Duration" id='song-length'/>

            <label htmlFor='song-image'>Image: </label>
            <input type="text" name="image" placeholder="Image" id='song-image'/>
        </form>
    )
}

export default NewSong;