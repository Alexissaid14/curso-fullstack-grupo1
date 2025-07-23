import React, { useState } from 'react';
import Header from './Header';
import Calcular from './Calcular';
import ImageSwitcher from './ImageSwitcher';
import Footer from './Footer';
import './Content.css';  // Asegurate que importe los estilos

export default function Content() {
  const [selectedFunc, setSelectedFunc] = useState(null);

  const handleSelect = (funcName) => {
    setSelectedFunc(funcName);
  };

  return (
    <div className="content-wrapper">
      <Header onSelect={handleSelect} />

      {selectedFunc === 'calcular' && <Calcular />}
      {selectedFunc === 'imagenes' && <ImageSwitcher />}

      {!selectedFunc && (
        <p className="content-message">
          Selecciona una función arriba para comenzar.
        </p>
      )}

      <Footer />
    </div>
  );
}