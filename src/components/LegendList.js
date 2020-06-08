import React from 'react';
import './LegendList.css';

function LegendList () {
  return (
  <ul className="list-legend">
    <li className="list-item day">Dzień</li>
    <li className="list-item hour">Godzina</li>
    <li className="list-item weather">Prognoza</li>
    <li className="list-item temperature">Temperatura</li>
    <li className="list-item rain">Opady</li>
    <li className="list-item wind">Kierunek wiatru</li>
    <li className="list-item wind-speed">Prędkość wiatru</li>
    <li className="list-item pressure">Ciśnienie</li>
  </ul>)
}

export default LegendList;
