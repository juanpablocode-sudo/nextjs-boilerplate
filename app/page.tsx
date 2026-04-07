"use client";
import { useState } from "react";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [objetivo, setObjetivo] = useState("mantener");
  const [resultado, setResultado] = useState<any>(null);

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

    if (objetivo === "bajar") calorias -= 300;
    if (objetivo === "subir") calorias += 300;

    setResultado({
      imc: imc.toFixed(2),
      estado,
      calorias: Math.round(calorias),
    });
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Fitness Calculator PRO</h1>

        <input placeholder="Peso (kg)" onChange={(e) => setPeso(e.target.value)} style={input}/>
        <input placeholder="Altura (cm)" onChange={(e) => setAltura(e.target.value)} style={input}/>
        <input placeholder="Edad" onChange={(e) => setEdad(e.target.value)} style={input}/>

        <select onChange={(e) => setObjetivo(e.target.value)} style={input}>
          <option value="mantener">Mantener</option>
          <option value="bajar">Bajar grasa</option>
          <option value="subir">Subir masa</option>
        </select>

        <button onClick={calcular} style={button}>
          Calcular
        </button>

        {resultado && (
          <div style={resultBox}>
            <h2>IMC: {resultado.imc}</h2>
            <p>{resultado.estado}</p>
            <p>{resultado.calorias} kcal / día</p>

            <button style={proButton}>
              Desbloquear Plan PRO
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 🎨 ESTILOS PRO
const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #0f172a, #020617)",
};

const card = {
  background: "#0f172a",
  padding: 30,
  borderRadius: 20,
  width: 320,
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  textAlign: "center",
};

const title = {
  color: "white",
  marginBottom: 20,
};

const input = {
  width: "100%",
  padding: 12,
  marginBottom: 10,
  borderRadius: 10,
  border: "none",
};

const button = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  border: "none",
  background: "#22c55e",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
};

const resultBox = {
  marginTop: 20,
  padding: 15,
  background: "#020617",
  borderRadius: 10,
  color: "white",
};

const proButton = {
  marginTop: 10,
  padding: 10,
  width: "100%",
  background: "#f59e0b",
  border: "none",
  borderRadius: 8,
  fontWeight: "bold",
  cursor: "pointer",
};
