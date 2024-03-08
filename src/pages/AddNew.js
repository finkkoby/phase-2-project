import { useState, useEffect } from'react';
import NewSong from '../components/NewSong';
import NewBook from '../components/NewBook';
import NewTVMovie from '../components/NewTVMovie';
import { useOutletContext } from'react-router-dom';

function AddNew() {
    const [type, setType] = useState('song');
    const [toggleNavBar] = useOutletContext()

    useEffect(() => {
        toggleNavBar(true);
    }, [])

    function handleTypeChange(e) {
        setType(e.target.value);
    }

    return (
        <div className='item-list'>
            <label htmlFor='add-new-type'>Add New: </label>
            <select id='add-new-type' onChange={handleTypeChange}>
                <option value="song">Song</option>
                <option value="book">Book</option>
                <option value="tvMovie">TV/Movie</option>
            </select>
            {type ==='song' ? <NewSong /> : null}
            {type === 'book' ? <NewBook /> : null}
            {type === 'tvMovie' ? <NewTVMovie /> : null}
        </div>
    )
}

export default AddNew;