import { useState } from'react';
import { Navigate } from 'react-router-dom';

function NewSong() {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [length, setLength] = useState('');
    const [image, setImage] = useState('');
    const [submited, setSubmitted] = useState(false);

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleArtistChange(e) {
        setArtist(e.target.value);
    }

    function handleAlbumChange(e) {
        setAlbum(e.target.value);
    }

    function handleLengthChange(e) {
        setLength(e.target.value);
    }

    function handleImageChange(e) {
        setImage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newSong = {
            title: title,
            artist: artist,
            album: album,
            length: length,
            image: image
        }

        fetch('http://localhost:3000/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSong)
        })
      .then(res => res.json())
      setSubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='song-title'>
                Title: 
                <input 
                type="text" 
                name="title" 
                placeholder="Title" 
                value={title}
                onChange={handleTitleChange}
                id='song-title' 
                />
            </label>

            <label htmlFor='song-artist'>
                Artist:             
                <input 
                type="text" 
                name="artist" 
                placeholder="Artist" 
                value={artist}
                onChange={handleArtistChange}
                id='song-artist' 
                />
            </label>

            <label htmlFor='song-album'>
                Album: 
                <input 
                type="text" 
                name="album" 
                placeholder="Album" 
                value={album}
                onChange={handleAlbumChange}
                id='song-album' 
                />
            </label>

            <label htmlFor='song-length'>
                Duration: 
                <input 
                type="text" 
                name="length" 
                placeholder="Duration" 
                value={length}
                onChange={handleLengthChange}
                id='song-length'
                />
            </label>

            <label htmlFor='song-image'>
                Image:             
                <input 
                type="text" 
                name="image" 
                placeholder="Image" 
                value={image}
                onChange={handleImageChange}
                id='song-image'
                />
            </label>
            <button type="submit">Add new</button>
            {submited? <Navigate to="/songs" /> : null}
        </form>
    )
}

export default NewSong;