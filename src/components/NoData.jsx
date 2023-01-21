import React from "react"
import { Link } from "react-router-dom"
import GraphImage from "../assets/no_data_report.svg"
const NoData = () => {
  return (
    <>
      <div className=" mb-28 flex flex-col items-center justify-center  ">
        <div>
          <img
            src={GraphImage}
            alt=""
            className=" h-52 w-52  md:h-72 md:w-72"
          />
          <h2 className="ml5 text-xl  font-light text-gray-500  ">
            {" "}
            No job added yet.{" "}
          </h2>
        </div>
      </div>
    </>
  )
}

export default NoData
