import React, { useState } from 'react';

const TasaMetabolicaBasal = () => {
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [actividad, setActividad] = useState('');
  const [tmb, setTmb] = useState('');

  const calcularTmb = () => {
    let resultado = 0;
    if (sexo === 'hombre') {
      resultado = 66 + (6.2 * parseFloat(peso)) + (12.7 * parseFloat(altura)) - (6.8 * parseFloat(edad));
    } else if (sexo === 'mujer') {
      resultado = 655 + (4.35 * parseFloat(peso)) + (4.7 * parseFloat(altura)) - (4.7 * parseFloat(edad));
    }

    switch (actividad) {
      case 'sedentario':
        resultado *= 1.2;
        break;
      case 'ligero':
        resultado *= 1.375;
        break;
      case 'moderado':
        resultado *= 1.55;
        break;
      case 'alto':
        resultado *= 1.725;
        break;
      case 'muy alto':
        resultado *= 1.9;
        break;
      default:
        break;
    }

    setTmb(resultado.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Tasa Metabólica Basal</h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="edad">Edad (años)</label>
          <input
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="sexo">Sexo</label>
          <select
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            id="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="peso">Peso (kg)</label>
          <input
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="altura">Altura (cm)</label>
          <input
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="actividad">Nivel de actividad</label>
          <select
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            id="actividad"
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            <option value="sedentario">Sedentario (poco o ningún ejercicio)</option>
            <option value="ligero">Ligero (ejercicio ligero/sport 1-3 días a la semana)</option>
            <option value="moderado">Moderado (ejercicio moderado/sport 3-5 días a la semana)</option>
            <option value="alto">Alto (ejercicio intenso/sport 6-7 días a la semana)</option>
            <option value="muy alto">Muy alto (ejercicio extremadamente intenso/sport y trabajo físico)</option>
          </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          type="button"
          onClick={calcularTmb}
        >
          Calcular TMB
        </button>
        {tmb && (
          <p className="text-lg font-bold mt-4">Tu Tasa Metabólica Basal es: {tmb} calorías/día</p>
        )}
      </form>
    </div>
  );
};

export default TasaMetabolicaBasal;