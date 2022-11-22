import React from 'react'
import Logo from '../assets/Logo.png'
const IndagoLogo = ({width, height}) => {
    // console.log(height);
  return (
    <>
    <img src={Logo} alt='Indago, Job tracking web app' className= {`object-cover mix-blend-multiply w-${width} h-${height} `} />
    <h2 className="text-3xl text-center font-semibold ">indago</h2>
    </>

  )
}

export default IndagoLogo