import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { AreaChartComponent, BarChartComponent } from "../components"

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useSelector((store) => store.allJobs)
  return (
    <>
      <section className="mb-24 flex flex-col items-center justify-center space-y-6  ">
        <h4 className=" text-2xl capitalize ">Monthly applications</h4>
        <button
          type="button"
          className=" text-xl font-medium text-primary  "
          onClick={() => setBarChart(!barChart)}
        >
          {" "}
          {barChart ? "Area Chart" : "Bar Chart"}
        </button>
        {barChart ? (
          <BarChartComponent data={data} />
        ) : (
          <AreaChartComponent data={data} />
        )}
      </section>
    </>
  )
}

export default ChartsContainer
