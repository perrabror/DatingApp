import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapjs from 'bootstrap/dist/js/bootstrap.min.js';
import logo from './logo.svg';
import React, { useState } from 'react';
import User from './components/user/user.js';
import Card from './components/card/card.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import GnomeLandBg from './gnomelandbg.jpg';
import Log from './components/gnomeskissing.jpg';
import UserImg from './components/user.png';

import Footer from './components/footer.js';
function App() {
  
  
  
  return (
    <div>
    <header>
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container">
    
      <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <h1 className='text-light'>GnomeLand</h1>
        <ul className="navbar-nav custom-justify-content-between">
          <li className="nav-item">
          <Link to="/card" className="nav-link active" aria-current="page"><img className='rounded-circle navbar-brand' src={Log} alt='log' style={{ width: "80px", height: "80px", paddingRight: '10px'}}/></Link>

          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page"> My Profile <img className='rounded-circle' src={UserImg} alt='user' style={{ width: "50px", height: "50px"}}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <img src={GnomeLandBg} style={{width: "100%", height: "100vh", opacity: ".90", zIndex:"-10"}} className="d-block position-absolute"  alt="Gnomeland" />
  {/* <User /> */}
   <Routes>
      <Route path="/" element={<User />} />
      <Route path="/card" element={<Card />}/>                
     
   
  

 </Routes>
  </Router>

    </header>
    <Footer style= {{width: "100%;"}}/>
  </div>
   
  );
}

export default App;
