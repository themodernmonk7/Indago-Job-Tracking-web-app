import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { AreaChartComponent, BarChartComponent } from "../components"

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useSelector((store) => store.allJobs)
  return (
    <>
      <section className="flex flex-col justify-center items-center space-y-6 mb-24  ">
        <h4 className=" capitalize text-2xl ">Monthly applications</h4>
        <button
          type="button"
          className=" text-primary font-medium text-xl  "
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
