import React from "react"
import Logo from "../assets/Logo.png"
const Loading = () => {
  return (
    <>
      <div className=" h-screen grid place-items-center ">
        <img
          src={Logo}
          alt="Indago - Job tracking app Logo"
          className="w-20 h-20 object-contain mix-blend-multiply animate-bounce  "
        />
      </div>
    </>
  )
}

export default Loading
