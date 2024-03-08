import './App.css';
import Header from './components/Header';
import { Outlet } from'react-router-dom';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';

function App() {
  const [header, setHeader] = useState(false)
  const [books, setBooks] = useState([])
  const [songs, setSongs] = useState([])
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/books`)
    .then(res => res.json())
    .then(books => setBooks(books));

    fetch(`http://localhost:3000/songs`)
    .then(res => res.json())
    .then(songs => setSongs(songs));

    fetch(`http://localhost:3000/tv-movies`)
    .then(res => res.json())
    .then(movies => setMovies(movies));
    console.log("running fetch")
  }, []);

  function toggleNavBar(boo = true) {
    if (header === false && boo === true) {
      setHeader(true)
    } else if (boo === false) {
      setHeader(false)
    }
  }

  return (
    <div className="App">
      <Header />
      <NavBar toggleNavBar={toggleNavBar} header={header}/>
      <Outlet context={[toggleNavBar, books, setBooks, songs, setSongs, movies, setMovies]} />
    </div>
  );
}

export default App;
