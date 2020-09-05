import React, { useCallback, useRef } from "react"
import { ReactComponent as IPhone11 } from "../../../../../assets/texts/iphone11.svg"
import { useGlobalScroll } from "../../../../../hooks/useGlobalEvents"
import "./large-display-content.scss"

function LargeDisplayContent() {
  let initialScrollPosRef = useRef(0)
  const iphoneTextRef = useRef(null)
  const deviceContainerRef = useRef(null)

  const getMatrixData = (matrixString) => {
    const firstBracePos = matrixString.indexOf("(")
    const endBracePos = matrixString.indexOf(")")
    const values = matrixString.slice(firstBracePos + 1, endBracePos)
    const parsedValues = values.split(",").map((val) => parseFloat(val))

    return {
      a: parsedValues[0],
      b: parsedValues[1],
      c: parsedValues[2],
      d: parsedValues[3],
      tx: parsedValues[4],
      ty: parsedValues[5],
    }
  }

  const handleMouseScroll = useCallback((event) => {
    const minimizePhone = (scrollDirection) => {
      if (scrollDirection === "up") {
      }
      // console.log(iphoneTextRef.current.style.transform)
    }

    const getScrollDirection = () => {
      const direction =
        window.pageYOffset > initialScrollPosRef.current ? "down" : "up"
      initialScrollPosRef.current = window.pageYOffset
      return direction
    }

    const minimizeText = (direction) => {
      const diffAmount = {
        a: 0.01,
        d: 0.01,
      }
      const opacityDiff = 0.03
      const { a, b, c, d, tx, ty } = getMatrixData(
        iphoneTextRef.current.style.transform
      )
      const currentOpacity = parseFloat(iphoneTextRef.current.style.opacity)
      let updatedstyle

      if (direction === "up") {
        updatedstyle = {
          opacity: currentOpacity + opacityDiff,
          transform: `matrix(${a + diffAmount.a},${b},${c},${
            d + diffAmount.d
          },${tx}, ${ty})`,
        }

        console.log("up", iphoneTextRef.current.style.transform)
      } else if (direction === "down") {
        updatedstyle = {
          opacity: currentOpacity - opacityDiff,
          transform: `matrix(${a - diffAmount.a},${b},${c},${
            d - diffAmount.d
          },${tx}, ${ty})`,
        }

        console.log("down", iphoneTextRef.current.style.transform)
      }

      Object.assign(iphoneTextRef.current.style, updatedstyle)
    }

    const scrollDirection = getScrollDirection()
    minimizeText(scrollDirection)
    minimizePhone(scrollDirection)
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
