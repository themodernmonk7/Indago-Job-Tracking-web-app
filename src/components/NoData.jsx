import React from "react"
import GraphImage from "../assets/no_data.svg"
const NoData = () => {
  return (
    <>
      <div className=" mb-28 flex flex-col items-center justify-center  ">
        <div>
          <img
            src={GraphImage}
            alt="graph"
            className=" h-52 w-52  md:h-72 md:w-72"
          />
          <h2 className=" mt-5 text-center font-light text-gray-500 md:text-xl  ">
            {" "}
            No job added yet.{" "}
          </h2>
        </div>
      </div>
    </>
  )
}

export default NoData
