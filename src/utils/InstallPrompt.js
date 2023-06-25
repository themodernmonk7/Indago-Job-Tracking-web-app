import React, { useEffect } from "react"

function InstallPrompt() {
  useEffect(() => {
    let deferredPrompt

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      deferredPrompt = event
      deferredPrompt.prompt()
    }

    const handleAppInstalled = () => {
      deferredPrompt = null
      console.log("App installed")
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      )
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  return null
}

export default InstallPrompt
