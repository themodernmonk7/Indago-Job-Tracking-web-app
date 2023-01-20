import React from "react"
import { Link } from "react-router-dom"
import GraphImage from "../assets/no_data_report.svg"
const NoData = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center mb-28  ">
        <div>
          <img
            src={GraphImage}
            alt=""
            className=" w-52 h-52  md:w-72 md:h-72"
          />
          <h2 className="text-xl ml5  text-gray-500 font-light  ">
            {" "}
            No job added yet.{" "}
          </h2>
        </div>
      </div>
    </>
  )
}

export default NoData
