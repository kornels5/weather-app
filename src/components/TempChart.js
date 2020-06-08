import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

import './TempChart.css';

//TODO przeniesc do osobnego pliku
function ReferenceLabel(props) {
  const { 
      fill, value, textAnchor, 
      fontSize, viewBox, dy, dx,
  } = props;
  const x = viewBox.width + viewBox.x - 7;
  const y = viewBox.y - 10;
  return (
      <text 
          x={x} y={y}
          dy={dy}
          dx={dx}
          fill={fill}
          fontSize={fontSize || 14} 
          textAnchor={textAnchor}>
          {`${value}\u00b0`}
      </text>
  )
}

function Chart(props) {  
  const temperatures = [];
  props.data.map(obj => temperatures.push(
    {
      'temp': Math.round(obj.temp)
    }
  ))
  
  return (
    <LineChart width={2840} height={110} data={temperatures}
    margin={{ left: 10, right: 10, top: 30}}>
      <Line type="monotone" dataKey="temp" stroke="#f5d742" label={<ReferenceLabel/>}/>
      <YAxis hide={true}/>
      <XAxis dataKey="dt" hide={true}>
      </XAxis>
    </LineChart>
  )
}

export default Chart;
