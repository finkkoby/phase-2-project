import { useState } from'react';

function AddNew() {
    const [type, setType] = useState('song');

    function handleTypeChange(e) {
        setType(e.target.value);
        console.log(e.target.value);
    }

    const song = (
        <form>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="artist" placeholder="Artist" />
            <input type="text" name="album" placeholder="Album" />
            <input type="text" name="length" placeholder="Duration" />
            <input type="text" name="image" placeholder="Image" />
        </form>
    )

    const book = (
        <form>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="author" placeholder="Author" />
            <input type="text" name="genre" placeholder="Genre" />
            <input type="text" name="image" placeholder="Image" />
        </form>
    )

    const tvMovie = (
        <form>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="year" placeholder="Year" />
            <input type="text" name="type" placeholder="Type" />
            <input type="text" name="image" placeholder="Image" />
        </form>
    )

    return (
        <div className='item-list'>
            <label htmlFor='add-new-type'>Add New: </label>
            <select id='add-new-type' onChange={handleTypeChange}>
                <option value="song">Song</option>
                <option value="book">Book</option>
                <option value="tvMovie">TV/Movie</option>
            </select>
            {type ==='song' && song ? song : null}
            {type === 'book' && book ? book : null}
            {type === 'tvMovie' && tvMovie ? tvMovie : null}
        </div>
    )
}

export default AddNew;