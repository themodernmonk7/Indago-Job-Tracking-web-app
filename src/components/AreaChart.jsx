import React from "react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={300} className="mr-12 w-12 ">
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#1e3a8a" fill="#1d4ed8" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
