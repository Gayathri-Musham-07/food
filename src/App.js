import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className='jj' > 
   
    <Router>
      <Header />
      <Routes>
        <Route path="/pro" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Presentation />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;