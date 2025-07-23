import React from 'react';
import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
      <img
        src={props.image}
        alt={props.title}
        className="product-image"
      />
      <h2>{props.title}</h2>
      <p className="product-price"><strong>Precio:</strong> ${props.price}</p>
      <p className="product-description">{props.description}</p>
      <button className="product-button">Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
