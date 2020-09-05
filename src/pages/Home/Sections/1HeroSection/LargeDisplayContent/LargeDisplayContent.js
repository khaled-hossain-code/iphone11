import React, { useCallback, useRef } from "react"
import { ReactComponent as IPhone11 } from "../../../../../assets/texts/iphone11.svg"
import { useGlobalScroll } from "../../../../../hooks/useGlobalEvents"
import "./large-display-content.scss"

function LargeDisplayContent() {
  let initialScrollPos = 0
  const iphoneTextRef = useRef(null)
  const deviceContainerRef = useRef(null)

  const getScrollDirection = () => {
    const direction = window.pageYOffset > initialScrollPos ? "down" : "up"
    initialScrollPos = window.pageYOffset
    return direction
  }

  const minimizeText = (direction) => {
    if (direction === "up") {
      iphoneTextRef.current.style.opacity =
        parseFloat(iphoneTextRef.current.style.opacity) + 0.01
      console.log(iphoneTextRef.current.style.opacity)
    } else if (direction === "down") {
      iphoneTextRef.current.style.opacity -= 0.01
    }
  }

  const minimizePhone = () => {}
  const handleMouseScroll = useCallback((event) => {
    const scrollDirection = getScrollDirection()
    minimizeText(scrollDirection)
    minimizePhone()
    // event.preventDefault()
  }, [])

  useGlobalScroll(handleMouseScroll)

  return (
    <div className="large-display-content">
      <div className="sticky-content">
        <IPhone11
          style={{ opacity: 1, transform: "matrix(0.5, 0, 0, 0.5, 0, 0)" }}
          ref={iphoneTextRef}
          className="iphone-text hero-title-start will-change"
        />
        <div ref={deviceContainerRef} className="device-container">
          {/* video goes here */}
          <div className="hardware-container">
            <div className="hardware-wrapper">
              <div className="screen"></div>
              <div className="hardware"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LargeDisplayContent
