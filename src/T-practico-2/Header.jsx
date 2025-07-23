import React from 'react';
import './Header.css';

function Header({ onSelect }) {
  return (
    <header className="header">
      <h1>Elige una función</h1>
      <div className="botones-header">
        <button onClick={() => onSelect('calcular')}>➕ Calcular</button>
        <button onClick={() => onSelect('imagenes')}>🖼 Ver Imágenes</button>
      </div>
    </header>
  );
}

export default Header;