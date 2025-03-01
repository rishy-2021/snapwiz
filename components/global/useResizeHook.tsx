"use client"
import { useEffect, useState } from "react"

const useScreenSize = () => {
    const hasWindow = typeof window !== "undefined"

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : 768
      const height = hasWindow ? window.innerHeight : 768
      return {
        width,
        height,
      }
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    )

    useEffect(() => {
      if (hasWindow) {
        const handleResize = () => {
          setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }
    }, [hasWindow])

    return windowDimensions
  }

export default useScreenSize