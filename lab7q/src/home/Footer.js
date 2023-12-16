import React from 'react';
import './Footer.css'; // Підключення файлу зі стилями

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Магазин роздібленої торгівлі HouseStaff. Усі права захищені.</p>
        <nav>
          <ul className="footer-links">
            <li><a href="/about">Про нас</a></li>
            <li><a href="/contact">Контакти</a></li>
            <li><a href="/terms">Умови використання</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
