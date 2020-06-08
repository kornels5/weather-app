import React, { useState, useEffect } from 'react';

import usePositon from './hooks/usePosition';
import Swiper from './components/Swiper';
import LegendList from './components/LegendList';
import './App.css';

const API_KEY = 'a5c071516384d280f97fc11094a21953';

function App() {
  const {position, error} = usePositon();
  const [weather, setWeather] = useState([]);
  
  useEffect(() => {
    if(position) {
      const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.latitude}&lon=${position.longitude}&exclude=current,minutely,daily&units=metric&lang=pl&appid=${API_KEY}`;

      const fetchData = async () => {
        const result = await fetch(URL)
          .then(res => res.json())
          .then(data => data);
          const hourly = result.hourly;
        setWeather(hourly);  
      }
      fetchData();
    } 

  }, [position, error]);

  return (
      <div className="app">
        <div className="app-wrapper">
          {
            weather.length > 0 ? (
              <React.Fragment>
                <LegendList/>
                <Swiper data={weather}/>
              </React.Fragment>
            ) : (
              <div>...Loading</div>
            )
          }
        </div>
      </div>
    )
}

export default App;
