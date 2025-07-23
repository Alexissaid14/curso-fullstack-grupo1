import React, { useState } from 'react';

function AdivinaComponent() {
    const [numero, setNumero] = useState(1);
    const [sorteo, setSorteo] = useState(0);
    const [result, setResult] = useState(false);
    const [ganadas, setGanadas] = useState(0);
    const [perdidas, setPerdidas] = useState(0);
    const [jugadas, setJugadas] = useState(0);
    const [error, setError] = useState("");

    const sortear = () => {
        const num = parseInt(numero); 
        if (num < 1 || num > 10) {
            setError("Ingrese un número entre 1 y 10.");
            return;
        }

        setError(""); 
        const winner = Math.floor(Math.random() * 10) + 1;
        setSorteo(winner);
        setResult(true);
        setJugadas(jugadas + 1);

        if (winner === num) {
            setGanadas(ganadas + 1);
        } else {
            setPerdidas(perdidas + 1);
        }
    };

    return (
        <div style={{display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "100vh", 
    flexDirection: "column", 
    textAlign: "center" }}>
            {!result ? (
                <div>
                    <h4>Adivina el Número del 1 al 10</h4>
                    <input
                        type='number'
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                    <br />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button onClick={sortear}>SORTEAR</button>
                    <br /><br />
                    <p>Jugadas: {jugadas} | Ganadas: {ganadas} | Perdidas: {perdidas}</p>
                </div>
            ) : (
                <>
                    <hr />
                    <h3>Usted eligió el: {numero}</h3>
                    <h3>Salió el número: {sorteo}</h3>
                    <h3 style={{ color: sorteo == numero ? "green" : "red" }}>
                        {sorteo == numero ? "¡Ha Ganado!" : "Siga participando !!"}
                    </h3>
                    <br />
                    <button onClick={() => {
                        setResult(false);
                        setNumero(1);
                    }}>
                        Volver a jugar!
                    </button>
                    <br /><br />
                    <p>Jugadas: {jugadas} | Ganadas: {ganadas} | Perdidas: {perdidas}</p>
                </>
            )}
        </div>
    );
}

export default AdivinaComponent;





