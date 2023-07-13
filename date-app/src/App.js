import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import User from './components/user/user.js';
import Card from './components/card/card.js';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapjs from 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  
  
  
  return (
    <div >
    <header>
    <Router> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <h3 className="navbar-brand">My App</h3>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/card" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link active" aria-current="page">User</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   <Routes>
      <Route path="/user" element={<User />} />
      <Route path="/card" element={<Card />}/>                
     
   
  

 </Routes>
  </Router>

    </header>
  </div>
   
  );
}

export default App;
