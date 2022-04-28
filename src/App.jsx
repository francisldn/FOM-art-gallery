import React from 'react';
import Home from './Pages/Home/Home';
import Location from './Pages/Location/Location';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
