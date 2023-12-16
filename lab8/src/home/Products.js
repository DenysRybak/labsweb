import React, { useState } from 'react';
import freze from './samsung.jpg';
import tv from './sontTV.jpg';
import wash from './images (3).jpg';
import './Products.css';

export default function Products() {
  const initialProducts = [
    {
      id: 1,
      name: 'Холодильник Samsung',
      price: 19000,
      image: freze,
    },
    {
      id: 2,
      name: 'Телевізор Sonyn 55X81J',
      price: 25600,
      image: tv,
    },
    {
      id: 3,
      name: 'Змішувач Water House Round New',
      price: 1100,
      image: wash,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="into">
            <p>{product.name}</p>
            <p>Ціна: {product.price}</p>
            <img src={product.image} alt={product.name} />
            <button className="buy-button">Купити</button>
          </div>
        </div>
      ))}
    </div>
  );
}

