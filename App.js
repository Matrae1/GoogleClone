import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.js';
import SearchPage from './Pages/SearchPage.js';



function App() {
  return (
    <Router >
    <div className="App">
      <Routes>
      <Route path='/search' element={<SearchPage />}/> 
      <Route path="/" element={<Home />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
