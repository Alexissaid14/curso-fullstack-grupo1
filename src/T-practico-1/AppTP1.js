import React from 'react';
import ProductCard from './T-practico-1/ProductCard';
import './T-practico-1/ProductCard.css';

function App() {
  return (
    <div className="product-wrapper">
      <ProductCard
        title="Auriculares Bluetooth"
        price={5999}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJDg_Xj7yIleZ_5iCiu0ia1MBWFN7xUYQjg&s"
        description="Sonido de alta calidad y batería de larga duración."
      />
    </div>
  );
}

export default App;
