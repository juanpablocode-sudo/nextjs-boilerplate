"use client";
import { useState } from "react";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const h = Number(altura) / 100;
    const imc = Number(peso) / (h * h);

    let estado = "";
    if (imc < 18.5) estado = "Bajo peso";
    else if (imc < 25) estado = "Normal";
    else if (imc < 30) estado = "Sobrepeso";
    else estado = "Obesidad";

    let calorias =
      10 * Number(peso) + 6.25 * Number(altura) - 5 * Number(edad) + 5;

    setResultado(
      `IMC: ${imc.toFixed(2)} (${estado}) | ${Math.round(calorias)} kcal`
    );
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white"
    }}>
      <div style={{
        background: "#111827",
        padding: 30,
        borderRadius: 20,
        width: 300,
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>
          Fitness Calculator
        </h1>

        <input
          placeholder="Peso (kg)"
          onChange={(e) => setPeso(e.target.value)}
          style={input}
        />
        <input
          placeholder="Altura (cm)"
          onChange={(e) => setAltura(e.target.value)}
          style={input}
        />
        <input
          placeholder="Edad"
          onChange={(e) => setEdad(e.target.value)}
          style={input}
        />

        <button onClick={calcular} style={button}>
          Calcular
        </button>

        {resultado && (
          <div style={{
            marginTop: 20,
            padding: 15,
            background: "#1f2937",
            borderRadius: 10,
            textAlign: "center"
          }}>
            {resultado}
          </div>
        )}
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 8,
  border: "none"
};

const button = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  border: "none",
  background: "#22c55e",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer"
};
