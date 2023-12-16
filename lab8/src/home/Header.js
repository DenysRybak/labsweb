import React from 'react';
import { Link } from 'react-router-dom'; // Імпорт компоненту Link для переходу
import './Header.css'

const Header = () => (
  <header className="header-container">
    <div className='logo'>
      <span className="brand-name">House</span><span className="highlighted">staff</span>
    </div>
    {/* Перехід до сторінки каталогу за допомогою Link */}
    <Link to="/catalog" className="catalog-button">Каталог</Link>
    <div className='search-bar'>
      <input type='text' placeholder='Пошук...' />
      <button>Пошук</button>
    </div>
    <div className="divider"></div>
    <nav>
      <ul className='nav'>
        <li>Сторінка</li>
        <li>Корзина</li>
      </ul>
    </nav>
  </header>
);

export default Header;
