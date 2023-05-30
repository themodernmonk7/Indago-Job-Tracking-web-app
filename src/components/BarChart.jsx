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
  const isMobile = window.innerWidth <= 768 // Define your mobile device width threshold

  const barSize = isMobile ? 30 : 50
  return (
    <ResponsiveContainer width="90%" height={300} className="mr-12 w-12 ">
      <BarChart data={data} margin={{ top: 10 }}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar
          dataKey="count"
          fill="#1d4ed8"
          barSize={barSize}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
