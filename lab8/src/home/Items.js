import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Ціна: {item.price}</p>

    </div>
  );
};

export default Item;
