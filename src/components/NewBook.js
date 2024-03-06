import { useState } from'react';

function NewBook() {
    const [title, setTitle] = useState('');
    return (
        <form>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="author" placeholder="Author" />
            <input type="text" name="genre" placeholder="Genre" />
            <input type="text" name="image" placeholder="Image" />
        </form>
    )
}

export default NewBook;