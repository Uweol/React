import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Users from './pages/Users';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import User from './pages/User';

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies/' element={<Movies />}></Route>
          <Route path='/users/' element={<Users />}></Route>
          <Route path='/users/:id' element={<User />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
