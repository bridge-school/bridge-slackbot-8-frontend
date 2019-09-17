import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#F24874',
  '#E55D3C',
  '#00A160',
  '#8F8D00',
  '#526A80',
  '#808080'
]

const ResultPieChart = ({ data }) => (
  <PieChart width={900} height={500}>
    <Tooltip />
    <Legend
      algin="right"
      verticalAlign="middle"
      layout="vertical"
      height={200}
      iconSize={20}
    />
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="20%"
      cy="50%"
      innerRadius={130}
      outerRadius={180}
      fill="#82ca9d"
    >
      {data &&
        data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
    </Pie>
  </PieChart>
)

export default ResultPieChart
