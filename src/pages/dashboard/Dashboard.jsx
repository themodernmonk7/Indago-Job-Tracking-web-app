import React from "react"
import { Overview } from "../../components"
import InstallPrompt from "../../utils/InstallPrompt"

const Dashboard = () => {
  return (
    <>
      <InstallPrompt />
      <Overview />
    </>
  )
}

export default Dashboard
