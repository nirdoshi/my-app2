import React from "react";
import Navbar from "./components/Navbar";
import Connect from "./components/Connect";
import Contact from "./pages/Contact";
import Home from './pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    <Connect />

    </Router>

  );
}

export default App;
