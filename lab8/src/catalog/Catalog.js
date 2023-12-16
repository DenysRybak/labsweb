
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CatalogFilters from './CatalogFilters'; 
import './Catalog.css';
import './sontTV.jpg'

const flowersData = [
{
    id: 1,
    title: 'Холодильник Samsung',
    img: 'sontTV.jpg',
    price: '19000',
    
},
{
    id: 2,
    title: 'Телевізор Sonyn 55X81J',
    img: 'images3.jpg',
    price: '25600',
    description: 'Великий і яскравий соняшник',
},
{
    id: 3,
    title: 'Змішувач Water House Round New',
    img: 'images6.jpg',
    price: '1100',
    description: 'Червона троянда з красивим запахом',
},
];

const Catalog = () => {
  const [search, setSearch] = useState('');
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  const filteredFlowers = flowersData.filter((flower) =>
    flower.title.toLowerCase().includes(search.toLowerCase())
  );

  const applyFilters = (flowers) => {
    if (appliedFilters.minPrice && appliedFilters.maxPrice) {
      flowers = flowers.filter(
        (flower) =>
          parseFloat(flower.price) >= parseFloat(appliedFilters.minPrice) &&
          parseFloat(flower.price) <= parseFloat(appliedFilters.maxPrice)
      );
    }

    return flowers;
  };

  const filteredFlowersWithFilters = applyFilters(filteredFlowers);

  return (
    <div>
      <h1>Catalog page</h1>
      <CatalogFilters onApplyFilters={handleApplyFilters} />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flowers-container">
        {filteredFlowersWithFilters.map((flower) => (
          <div key={flower.id} className="flower-container">
            <img src={`./img/${flower.img}`} alt={flower.title} />
            <h3>{flower.title}</h3>
            <p>Price: ${flower.price}</p>
            <Link to={`/catalog/${flower.id}`}>
              <button className="button">View more</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;