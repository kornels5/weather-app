import React from 'react';

function getDirectionFromDeg(deg) {
  let direction = '';
  if((deg > 337.5 && deg <= 360) || (deg >= 0 && deg < 22.5)) {
    direction = 'Południowy';
  } else if (deg > 22.5 && deg < 67.5) {
    direction = 'Pd.-Zach.';
  } else if (deg > 67.5 && deg < 112.5) {
    direction = 'Zachodni';
  } else if ( deg > 112.5 && deg < 157.5) {
    direction = 'Pn.-Zach.';
  } else if (deg > 157.5 && deg < 202.5) {
    direction = 'Północny';
  } else if (deg > 202.5 && deg < 247.5) {
    direction = 'Pn.-Wsch.';
  } else if (deg > 247.5 && deg < 292.5 ) {
    direction = 'Wschodni';
  } else if (deg > 292.5 && deg < 337.5) {
    direction = 'Pd.-Wsch.';
  }
  return direction
}

function Arrow(props) {
  return (
    <div className="arrow-container">
      <svg 
        className="arrow-icon"
        style={{transform: `rotate(${props.deg}deg)`}}
        x="0px" 
        y="0px"
        viewBox="0 0 511.995 511.995">
        <g>
          <path d="M509.758,480.649L275.091,11.315c-7.232-14.464-30.955-14.464-38.187,0L2.238,480.649
            c-4.267,8.576-2.304,18.944,4.8,25.365c7.147,6.464,17.664,7.317,25.749,2.176l223.211-142.037l223.21,142.037
            c3.52,2.219,7.488,3.328,11.456,3.328c5.141,0,10.261-1.856,14.293-5.504C512.062,499.593,514.024,489.225,509.758,480.649z"/>
        </g>
      </svg>
      <div>
        {getDirectionFromDeg(props.deg)}
      </div>
    </div>
  )
}

export default Arrow;
