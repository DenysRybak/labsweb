import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './home/Header';
import Home from './home/Home';
import Catalog from './catalog/Catalog';
import Products from './home/Products';
import Footer from './home/Footer'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:catalogs" element={<Products />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
