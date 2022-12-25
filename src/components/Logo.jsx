import Logo from "../assets/Logo.png"
const IndagoLogo = ({ className }) => {
  return (
    <>
      <img
        src={Logo}
        alt="Indago, Job tracking web app"
        className={` ${className} object-cover mix-blend-multiply  `}
      />
    </>
  )
}

export default IndagoLogo
