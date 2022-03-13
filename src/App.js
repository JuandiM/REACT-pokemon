import React from 'react';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EachPokemon from './pages/eachPokemon/EachPokemon';
import './global.scss';

function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pokemon_name" element={<EachPokemon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
