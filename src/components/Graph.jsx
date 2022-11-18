import React from "react"

const Graph = () => {
  return (
    <section className="grid place-items-center h-screen relative">
      <div className="bg-white/5 backdrop-blur-sm border border-gray-400 rounded-xl absolute">
        <h1 className="text-right pr-4 pt-2">20% </h1>
        <div className="px-3 py-3 flex flex-wrap-reverse space-x-3">
          <div className="bg-[#f53465] w-6 h-12 rounded-md"></div>
          <div className="bg-[#f53465] w-6 h-16 rounded-md"></div>
          <div className="bg-black w-6 h-24 rounded-md"></div>
          <div className="bg-[#f53465] w-6 h-14 rounded-md"></div>
          <div className="bg-[#f53465] w-6 h-14 rounded-md"></div>
        </div>
      </div>
    </section>
  )
}

export default Graph
