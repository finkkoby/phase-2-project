import './App.css';
import Header from './components/Header';
import { Outlet } from'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [header, setHeader] = useState(false)

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
      <Outlet context={toggleNavBar} />
    </div>
  );
}

export default App;
