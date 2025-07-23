import React, { useState } from 'react';
import './ImageSwitcher.css';

function ImageSwitcher() {
  const [imagen, setImagen] = useState(null);

  return (
    <div className="image-switcher">
      <h2>Galería de imágenes</h2>
      <div className="botones">
        <button onClick={() => setImagen('https://tse4.mm.bing.net/th/id/OIP.b540gC4VnCFekYCyns5xgAHaE8?w=1440&h=960&rs=1&pid=ImgDetMain&o=7&rm=3')}>Imagen 1</button>
        <button onClick={() => setImagen('https://th.bing.com/th/id/R.0cd5b29cc01d8634437d5c3c8a6d7d19?rik=9VOIApyBc%2fGv%2bQ&pid=ImgRaw&r=0')}>Imagen 2</button>
        <button onClick={() => setImagen('https://th.bing.com/th/id/R.4fa81eea95bdf2138382fbd2a9ea5a29?rik=yPQvCnqzf2oyqg&pid=ImgRaw&r=0')}>Imagen 3</button>
      </div>
      {imagen && <img src={imagen} alt="Imagen seleccionada" />}
    </div>
  );
}

export default ImageSwitcher;
