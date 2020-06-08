import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

import './PressureChart.css';

//TODO przeniesc do osobnego pliku - powtarza się
function ReferenceLabel(props) {
  const { 
      fill, value, textAnchor, 
      fontSize, viewBox, dy, dx,
  } = props;
  const x = viewBox.width + viewBox.x - 20;
  const y = viewBox.y - 10;
  return (
      <text 
          x={x} y={y}
          dy={dy}
          dx={dx}
          fill={fill}
          fontSize={fontSize || 10} 
          textAnchor={textAnchor}>
          {`${value} hPa`}
      </text>
  )
}

function Chart(props) {  
  return (
    <LineChart width={2850} height={92} data={props.data}
    margin={{ left: 20, right: 10, top: 30}}>
      <Line type="monotone" dataKey="pressure" stroke="#000" label={<ReferenceLabel/>}/>
      <YAxis hide={true}/>
      <XAxis dataKey="dt" hide={true}>
      </XAxis>
    </LineChart>
  )
}

export default Chart;
