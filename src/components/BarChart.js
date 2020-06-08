import React from 'react';

function Chart(props) {
  let height = props.data * 100
  
  return (
    <React.Fragment>
      <div className="swiper-item-rain-wrapper">
        <div className="swiper-item-rain-bar" style={{height: `${height}%`, backgroundColor: '#33ccff'}}></div>
        <div className="swiper-item-rain-label">{props.data > 0 ? <span>{props.data} mm</span> : null}</div>
      </div>
    </React.Fragment>
  )
}

export default Chart;
