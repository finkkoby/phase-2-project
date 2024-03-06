import './App.css';
import Header from './components/Header';
import { Outlet } from'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
