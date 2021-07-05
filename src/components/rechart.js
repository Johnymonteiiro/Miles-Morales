import React, { PureComponent } from 'react';
import './rechart.css';
import {AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip, Line,ResponsiveContainer } from 'recharts';

const data = [
  {
    name:'10:00',
    uv:0,
    amt:0
  },
  {
    name:'10:30',
    uv:800,
    amt:200 
  },
  {
    name:'11:00',
    uv:950,
    amt:400
  },
  {
    name: '12:00',
    uv:780,
    amt:600
  },
  {
    name: '13:00',
    uv:950,
    amt:800
  },
  {
    name: '14:00',
    uv:30,
    amt:1000
  },
  {
    name: '13:00',
    uv:280,
    amt:800
  },
  {
    name: '15:00',
    uv:170
  },
  {
    name: '16:00',
    uv:185
  },
  {
    name: '17:00',
    uv:270
  },
  {
    name: '17:30',
    uv:200
  },
  {
    name: '18:00',
    uv:240
  },
];

const CustomTooltip = ({ active, payload}) => {
   const dollar="$"
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip">{dollar}{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};


class Rechart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" aspect={3}> 
          <AreaChart
             width={730}
             height={250}
             data={data}
             margin={{ top:20,
                 right: 30,
                 left: 0, 
                 bottom: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#88dd6" />
            <CartesianGrid strokeDasharray="1 0"/>
            <XAxis dataKey="name" tick={{fill:'#ACACAC'}} tickMargin={10}/>
            <YAxis dataKey="amt" tick={{fill:'#ACACAC'}} tickMargin={10} />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0047BB" stopOpacity={0.8}/>
                <stop offset="90%" stopColor="#0047BB" stopOpacity={0}/>
             </linearGradient>
           </defs>
           <Area type="monotone" dataKey="uv" dot={{ stroke: '#0047BB', strokeWidth: 5 }} stroke={'#0047BB'} activeDot={{fill:' #FFFF', stroke: '#0047BB', strokeWidth:3, r:10 }} fillOpacity={0.3} fill="url(#colorUv)" />
         </AreaChart>
      </ResponsiveContainer>
    )
  }
}
export default Rechart;
