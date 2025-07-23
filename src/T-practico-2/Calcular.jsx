import React, { useState } from 'react';
import './Calcular.css';

function Calcular() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const manejarSuma = () => {
    const suma = Number(valor1) + Number(valor2);
    setResultado(suma);
  };

  return (
    <div className="calcular">
      <div className="inputs">
        <input
          type="number"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          placeholder="Número 1"
        />
        <span className="signo">+</span>
        <input
          type="number"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          placeholder="Número 2"
        />
      </div>

      <div className="resultado-bloque">
        <button className="boton-igual" onClick={manejarSuma}>=</button>
        <div className="resultado">
          Resultado: {resultado}
        </div>
      </div>
    </div>
  );
}

export default Calcular;