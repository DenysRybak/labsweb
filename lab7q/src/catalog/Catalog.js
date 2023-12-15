

import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../home/Products';



export default function Catalog() {
  return (
    <div>
      <h2>Каталог товарів</h2>
      <Products />
      <div>
        {/* Посилання на окремі продукти */}
        <Link to="/product/samsung">Холодильник Samsung</Link>
        <Link to="/product/sony">Телевізор Sony</Link>
        <Link to="/product/waterhouse">Змішувач Water House</Link>
      </div>
    </div>
  );
}
