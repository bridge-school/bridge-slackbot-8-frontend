import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'

const mockData = [
  {
    name: 'Yes',
    value: 10
  },
  {
    name: 'No',
    value: 2
  },
  {
    name: 'Maybe',
    value: 4
  },
  {
    name: 'a',
    value: 10
  },
  {
    name: 'b',
    value: 2
  },
  {
    name: 'c',
    value: 4
  },
  {
    name: 'd',
    value: 10
  },
  {
    name: 'e',
    value: 2
  },
  {
    name: 'f',
    value: 4
  }
]

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
  <PieChart width={850} height={400}>
    <Tooltip />
    <Legend
      algin="right"
      verticalAlign="middle"
      layout="vertical"
      height={36}
    />
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="20%"
      cy="50%"
      innerRadius={100}
      outerRadius={150}
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
