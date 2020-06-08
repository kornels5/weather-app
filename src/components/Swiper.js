import React from 'react';
import Carousel from 'react-id-swiper';

import './Swiper.css';
import TempChart from './TempChart';
import PressureChart from './PressureChart';
import BarChart from './BarChart';
import Arrow from './Arrow';



function Swiper ({data}) {  
  const getHours = (timestamp) => {
    let h = new Date(timestamp*1000).getHours();
    let m = new Date(timestamp*1000).getMinutes();
    
    h = (h<10) ? '0' + h : h;
    m = (m<10) ? '0' + m : m;
    
    let output = h + ':' + m;
    return output;
  }

  const getDay = (timestamp) => {
    let a = new Date(timestamp*1000);
    let days = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'];
    let dayOfWeek = days[a.getDay()]
    return dayOfWeek;
  }

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
    slidesPerView: 9,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
      1024: {
        slidesPerView: 9,
      }
    }
  }
  return (
    <Carousel {...params}>
      {
        data.map((hourly, index) => 
          <div 
            className="swiper-item"
            key={index.toString()}>
              <div className="swiper-item-day">
                {getHours(hourly.dt) === "00:00" ? (
                  <span className="swiper-item-day-text">
                    {getDay(hourly.dt)}
                  </span>
                ):(
                  null
                )}
              </div>
              <div className="swiper-item-hour"> 
                {getHours(hourly.dt)}
              </div>
              <div className="swiper-item-weather">
                <img 
                  className="weather-icon"
                  src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`}
                  alt={hourly.weather[0].main}/>
              </div>
              {
                index === 0 ? ( 
                  <div className="swiper-item-temperature">
                    <TempChart data={data}/>
                  </div>  
                ) : (
                  <div className="swiper-item-temperature"></div> 
                )
              }
              <div className="swiper-item-rain">
                <BarChart data={hourly.rain ? hourly.rain['1h'] : 0 }/>
              </div> 
              <div className="swiper-item-wind">
                <Arrow deg={hourly.wind_deg}/>
              </div>
              <div className="swiper-item-wind-speed">
                {hourly.wind_speed} m/s
              </div>
              {
                index === 0 ? ( 
                  <div className="swiper-item-pressure">
                    <PressureChart data={data}/>
                  </div>  
                ) : (
                  <div className="swiper-item-pressure"></div> 
                )
              }
          </div>
        )
      }
    </Carousel>
  )
};

export default Swiper;
