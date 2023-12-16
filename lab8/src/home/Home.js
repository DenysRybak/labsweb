import React, { useState } from 'react';
import About from './About';
import Footer from './Footer';
import Products from './Products';
import wash from './images (3).jpg'
import './Home.css';

export default function Home() {
  const initialProducts = [
    {
      id: 4,
      name: 'Ворота для тераси',
      price: 1100,
      image: wash,
    },
    {
      id: 5,
      name: 'Набір інструментів',
      price: 1100,
      image: wash,
    },
  ];

  const [additionalProducts, setAdditionalProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setAdditionalProducts(initialProducts);
    setShowMore(true);
  };

  return (
    <div>
      <About />
      <Products />
      {showMore && (
        <div className="additional-products2">
          {additionalProducts.map((product) => (
            <div className="seller-container2" key={product.id}>
              <div className="into">
                <p>{product.name}</p>
                <p>Ціна: {product.price}</p>
                <img src={product.image} alt={product.name} />
                <button className="buy-button">Купити</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button className='button23' onClick={handleShowMore}>View more</button>
      <Footer />
    </div>
  );
}
