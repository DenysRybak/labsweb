import React, { useState } from 'react';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import './Home.css';
import wash from './images (3).jpg';

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      
      <About />
      <Products />
      {showMore && <MoreProducts />} {/* Показувати більше продуктів, якщо showMore === true */}
      <button className='button23' onClick={handleShowMore}>View more</button> {/* Кнопка для показу більше продуктів */}
      <Footer />
    </div>
  );
}

// Змінений компонент Home з додатковими продуктами

function MoreProducts() {
  return (
    <div className="additional-products2">
      <div className="seller-container2">
      <div className="into">
          <p>Для крашого виду</p>
          <p>Ворота для тераси.  Ціна:1100</p>
          <img src={wash} alt="змішувач" />
          <button className="buy-button">Купити</button>
        </div>
      </div>
      <div className="seller-container2">
      <div className="into">
          <p>Підтримуємо авто в русі</p>
          <p>Набір інстурментів.  Ціна:1100</p>
          <img src={wash} alt="змішувач" />
          <button className="buy-button">Купити</button>
        </div>
      </div>
      {/* Інші додаткові товари */}
    </div>
  );
}
