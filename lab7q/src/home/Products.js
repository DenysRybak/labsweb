import React from 'react';
import freze from './samsung.jpg';
import tv from './sontTV.jpg';
import wash from './images (3).jpg';
import './Products.css'; // Імпортуйте файл CSS для стилізації

export default function Products() {
  return (
    <div className="products-container">
      <div className="product seller-container">
        <div className="into">
          <p>Пропонуємо найкращий товар</p>
          <p>Холодильник Samsung.   Ціна:19000</p>
          <img src={freze} alt="холодильник" />
          <button className="buy-button">Купити</button>
        </div>
      </div>

      <div className="product tv-product">
        <div className="into">
          <p>Насолоджуйтеся найкращим</p>
          <p>Телевізор Sonyn 55X81J.  Ціна:25600</p>
          <img src={tv} alt="телик" />
          <button className="buy-button">Купити</button>
        </div>
      </div>

      <div className="product Cooker-product">
        <div className="into">
          <p>Оновлення в душовій</p>
          <p>Змішувач Water House Round New.  Ціна:1100</p>
          <img src={wash} alt="змішувач" />
          <button className="buy-button">Купити</button>
        </div>
      </div>
    </div>
  );
}
