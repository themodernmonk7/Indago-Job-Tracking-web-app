import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <BarChart data={data} margin={{ top: 10 }}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#3b82f6" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
