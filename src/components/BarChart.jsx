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
    // <ResponsiveContainer width="100%" height={200} className="mr-12">
    <ResponsiveContainer width="90%" height={300} className="mr-12 w-12 ">
      <BarChart data={data} margin={{ top: 10 }}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#1d4ed8" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
