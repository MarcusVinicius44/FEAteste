import React from 'react';
import './Coleta.css';
import mapa from './mapa.jpeg';

const PColeta = () => {
  const locations = [
    '📍 Aeroporto',
    '📍 Boca do Rio',
    '📍 Cabula',
    '📍 Dom Avelar',
    '📍 Engenho Velho de Brotas',
    '📍 Fazenda Grande I',
    '📍 Garcia',
    '📍 Itapuã',
    '📍 Nazaré',
    '📍 Jaguaripe',
    '📍 Lapinha',
    '📍 Mussurunga',
    '📍 Americana'
  ];

  return (
    <div className="container">
      <div className="localização">
        <h1>Onde já combatemos o desperdício em Salvador:</h1><br></br>
        {locations.map((location, index) => (
          <p className="p" key={index}>{location}</p>
        ))}
      </div>
      <div>
        <img src={mapa} alt="Mapa de Salvador" width={(1140)}/>
      </div>
    </div>
  );
};

export default PColeta;
